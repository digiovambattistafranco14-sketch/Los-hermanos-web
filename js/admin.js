(function () {
  "use strict";

  var fmt = new Intl.NumberFormat("es-AR");
  function money(n) { return fmt.format(n); }

  var dirty = {}; // { id: { price, price2 } }
  var liveData = {}; // ultimo valor conocido por id, para poder descartar cambios

  var loginView = document.getElementById("loginView");
  var adminView = document.getElementById("adminView");
  var logoutBtn = document.getElementById("logoutBtn");
  var loginForm = document.getElementById("loginForm");
  var loginError = document.getElementById("loginError");
  var loginBtn = document.getElementById("loginBtn");
  var configHint = document.getElementById("configHint");
  var searchInput = document.getElementById("searchInput");
  var itemCount = document.getElementById("itemCount");
  var adminList = document.getElementById("adminList");
  var saveBar = document.getElementById("saveBar");
  var saveBarText = document.getElementById("saveBarText");
  var saveBtn = document.getElementById("saveBtn");
  var discardBtn = document.getElementById("discardBtn");
  var toast = document.getElementById("toast");

  function showToast(msg, isError) {
    toast.textContent = msg;
    toast.classList.toggle("is-error", !!isError);
    toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.classList.remove("is-visible"); }, 3200);
  }

  function itemsFlat() {
    var out = [];
    MENU_CHAPTERS.forEach(function (chapter) {
      chapter.subs.forEach(function (sub) {
        sub.items.forEach(function (item) {
          if (item.price == null && item.price2 == null) return; // ej. "Consulte variedades"
          out.push({ item: item, chapterTitle: chapter.title, chapterId: chapter.id });
        });
      });
    });
    return out;
  }

  function updateSaveBar() {
    var n = Object.keys(dirty).length;
    saveBarText.textContent = n === 0 ? "Sin cambios sin guardar" : n + " cambio" + (n === 1 ? "" : "s") + " sin guardar";
    saveBar.classList.toggle("is-visible", n > 0);
    saveBtn.disabled = n === 0;
  }

  function markDirty(id, field, value) {
    if (!dirty[id]) dirty[id] = {};
    dirty[id][field] = value;
    updateSaveBar();
  }

  function buildRow(entry, livePrices) {
    var item = entry.item;
    var live = livePrices[item.id];
    var curPrice = live ? live.price : item.price;
    var curPrice2 = live ? live.price2 : item.price2;
    liveData[item.id] = { price: curPrice, price2: curPrice2 };

    var row = document.createElement("div");
    row.className = "admin-row";
    row.dataset.searchText = (item.name + " " + entry.chapterTitle).toLowerCase();

    var name = document.createElement("div");
    name.className = "admin-row__name";
    name.textContent = item.name;
    row.appendChild(name);

    row.appendChild(priceField(item.id, "price", "Precio", curPrice));
    row.appendChild(priceField(item.id, "price2", "Media / alt.", curPrice2));

    return row;
  }

  function priceField(id, field, labelText, value) {
    var wrap = document.createElement("div");
    wrap.className = "admin-row__field";

    var label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", id + "-" + field);

    var cur = document.createElement("span");
    cur.className = "cur";
    cur.textContent = "$";

    var input = document.createElement("input");
    input.type = "number";
    input.inputMode = "numeric";
    input.min = "0";
    input.step = "100";
    input.id = id + "-" + field;
    input.placeholder = field === "price2" ? "—" : "0";
    if (value != null) input.value = value;

    input.addEventListener("input", function () {
      var v = input.value === "" ? null : parseInt(input.value, 10);
      input.classList.add("is-dirty");
      markDirty(id, field, v);
    });

    wrap.appendChild(label);
    wrap.appendChild(cur);
    wrap.appendChild(input);
    return wrap;
  }

  function renderAdminList(livePrices) {
    var entries = itemsFlat();
    itemCount.textContent = entries.length + " productos";

    var byChapter = {};
    var order = [];
    entries.forEach(function (entry) {
      if (!byChapter[entry.chapterId]) {
        byChapter[entry.chapterId] = { title: entry.chapterTitle, rows: [] };
        order.push(entry.chapterId);
      }
      byChapter[entry.chapterId].rows.push(entry);
    });

    var frag = document.createDocumentFragment();
    order.forEach(function (chapterId) {
      var group = byChapter[chapterId];
      var section = document.createElement("div");
      section.className = "admin-chapter";
      var h2 = document.createElement("h2");
      h2.textContent = group.title;
      section.appendChild(h2);
      group.rows.forEach(function (entry) {
        section.appendChild(buildRow(entry, livePrices));
      });
      frag.appendChild(section);
    });

    adminList.innerHTML = "";
    adminList.appendChild(frag);
  }

  function applySearch() {
    var q = searchInput.value.trim().toLowerCase();
    var rows = adminList.querySelectorAll(".admin-row");
    var chapters = adminList.querySelectorAll(".admin-chapter");

    rows.forEach(function (row) {
      row.classList.toggle("hidden", q !== "" && row.dataset.searchText.indexOf(q) === -1);
    });
    chapters.forEach(function (section) {
      var visible = section.querySelectorAll(".admin-row:not(.hidden)").length;
      section.classList.toggle("hidden", visible === 0);
    });
  }

  function discardChanges() {
    dirty = {};
    // manera simple y confiable de "descartar": re-renderizar con los ultimos valores conocidos
    var livePrices = {};
    Object.keys(liveData).forEach(function (id) { livePrices[id] = liveData[id]; });
    renderAdminList(livePrices);
    applySearch();
    updateSaveBar();
  }

  function saveChanges() {
    var ids = Object.keys(dirty);
    if (ids.length === 0) return;
    saveBtn.disabled = true;
    saveBtn.textContent = "Guardando…";

    var payload = ids.map(function (id) {
      var base = liveData[id] || {};
      var changes = dirty[id];
      return {
        id: id,
        price: changes.price !== undefined ? changes.price : base.price,
        price2: changes.price2 !== undefined ? changes.price2 : (base.price2 != null ? base.price2 : null)
      };
    });

    window.supabaseClient
      .from("precios")
      .upsert(payload, { onConflict: "id" })
      .then(function (res) {
        saveBtn.disabled = false;
        saveBtn.textContent = "Guardar cambios";
        if (res.error) {
          showToast("No se pudo guardar: " + res.error.message, true);
          return;
        }
        payload.forEach(function (row) { liveData[row.id] = { price: row.price, price2: row.price2 }; });
        dirty = {};
        adminList.querySelectorAll("input.is-dirty").forEach(function (i) { i.classList.remove("is-dirty"); });
        updateSaveBar();
        showToast("Cambios guardados ✓");
      })
      .catch(function (err) {
        saveBtn.disabled = false;
        saveBtn.textContent = "Guardar cambios";
        showToast("No se pudo guardar: " + err.message, true);
      });
  }

  function loadPanel() {
    if (!window.supabaseClient) return;
    window.supabaseClient
      .from("precios")
      .select("id, price, price2")
      .then(function (res) {
        var livePrices = {};
        if (res && res.data) {
          res.data.forEach(function (row) { livePrices[row.id] = { price: row.price, price2: row.price2 }; });
        }
        renderAdminList(livePrices);
      });
  }

  function showAdmin() {
    loginView.classList.add("hidden");
    adminView.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    loadPanel();
  }

  function showLogin() {
    adminView.classList.add("hidden");
    loginView.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }

  function init() {
    if (!window.supabaseClient) {
      configHint.textContent = "Supabase todavía no está configurado (falta completar js/supabase-config.js).";
      loginBtn.disabled = true;
      return;
    }

    window.supabaseClient.auth.getSession().then(function (res) {
      if (res.data && res.data.session) showAdmin();
    });

    window.supabaseClient.auth.onAuthStateChange(function (event, session) {
      if (session) showAdmin(); else showLogin();
    });

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      loginError.textContent = "";
      loginBtn.disabled = true;
      loginBtn.textContent = "Ingresando…";
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value;

      window.supabaseClient.auth.signInWithPassword({ email: email, password: password }).then(function (res) {
        loginBtn.disabled = false;
        loginBtn.textContent = "Ingresar";
        if (res.error) {
          loginError.textContent = "Email o contraseña incorrectos.";
        }
      });
    });

    logoutBtn.addEventListener("click", function () {
      window.supabaseClient.auth.signOut();
    });

    searchInput.addEventListener("input", applySearch);
    saveBtn.addEventListener("click", saveChanges);
    discardBtn.addEventListener("click", discardChanges);

    window.addEventListener("beforeunload", function (e) {
      if (Object.keys(dirty).length > 0) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
