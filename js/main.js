(function () {
  "use strict";

  var fmt = new Intl.NumberFormat("es-AR");
  function money(n) { return "$" + fmt.format(n); }

  // Capitulos despues de los cuales se inserta una ilustracion separadora,
  // tal como aparecen intercaladas en la carta impresa original.
  var DIVIDERS_AFTER = {
    cafeteria: "illus-refrescos",
    helados: "illus-brindis"
  };

  function dishRow(item, livePrices) {
    var li = document.createElement("li");
    li.className = "dish";
    li.id = item.id;

    var nameWrap = document.createElement("div");
    nameWrap.className = "dish__name-wrap";

    var name = document.createElement("span");
    name.className = "dish__name";
    name.textContent = item.name;
    nameWrap.appendChild(name);

    if (item.sizeNote) {
      var sn = document.createElement("span");
      sn.className = "dish__sizenote";
      sn.textContent = "  ·  " + item.sizeNote;
      nameWrap.appendChild(sn);
    }

    var leader = document.createElement("span");
    leader.className = "dish__leader";
    leader.setAttribute("aria-hidden", "true");

    var live = livePrices && livePrices[item.id];
    var curPrice = live ? live.price : item.price;
    var curPrice2 = live ? live.price2 : item.price2;

    var price = document.createElement("span");
    price.className = "dish__price";
    if (item.priceText) {
      price.textContent = item.priceText;
    } else if (curPrice2 != null) {
      price.innerHTML =
        money(curPrice) + '<span class="sep">/</span><span class="alt">' + money(curPrice2) + "</span>";
    } else {
      price.textContent = money(curPrice);
    }

    li.appendChild(nameWrap);
    li.appendChild(leader);
    li.appendChild(price);

    if (item.desc) {
      var desc = document.createElement("p");
      desc.className = "dish__desc";
      desc.textContent = item.desc;
      li.appendChild(desc);
    }

    return li;
  }

  function buildChapter(chapter, livePrices) {
    var section = document.createElement("section");
    section.className = "chapter";
    section.id = chapter.id;

    var head = document.createElement("div");
    head.className = "chapter__head";

    var icon = document.createElement("span");
    icon.className = "chapter__icon";
    icon.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="assets/icons.svg#' + chapter.icon + '"></use></svg>';

    var titles = document.createElement("div");
    titles.className = "chapter__titles";
    titles.innerHTML =
      '<span class="chapter__folio">Carta &middot; ' + chapter.num + "</span>" +
      '<h2 class="chapter__title">' + chapter.title + "</h2>";

    head.appendChild(icon);
    head.appendChild(titles);
    section.appendChild(head);

    var rule = document.createElement("div");
    rule.className = "chapter__rule";
    section.appendChild(rule);

    if (chapter.note) {
      var note = document.createElement("p");
      note.className = "chapter__note";
      note.textContent = chapter.note;
      section.appendChild(note);
    }

    chapter.subs.forEach(function (sub) {
      var subEl = document.createElement("div");
      subEl.className = "sub";
      if (sub.label) {
        var label = document.createElement("h3");
        label.className = "sub__label";
        label.textContent = sub.label;
        subEl.appendChild(label);
      }
      var list = document.createElement("ul");
      list.className = "dish-list";
      sub.items.forEach(function (item) {
        list.appendChild(dishRow(item, livePrices));
      });
      subEl.appendChild(list);
      section.appendChild(subEl);
    });

    return section;
  }

  function buildDivider(symbolId) {
    var div = document.createElement("div");
    div.className = "divider";
    div.setAttribute("aria-hidden", "true");
    div.innerHTML = '<svg viewBox="0 0 260 120"><use href="assets/icons.svg#' + symbolId + '"></use></svg>';
    return div;
  }

  function fetchLivePrices() {
    if (!window.supabaseClient) return Promise.resolve(null);
    return window.supabaseClient
      .from("precios")
      .select("id, price, price2")
      .then(function (res) {
        if (!res || res.error || !res.data) return null;
        var map = {};
        res.data.forEach(function (row) {
          map[row.id] = { price: row.price, price2: row.price2 };
        });
        return map;
      })
      .catch(function () { return null; });
  }

  function renderMenu(livePrices) {
    var main = document.getElementById("menuMain");
    var navList = document.getElementById("indexNavList");
    var overlayList = document.getElementById("indexOverlayList");
    var frag = document.createDocumentFragment();

    MENU_CHAPTERS.forEach(function (chapter) {
      frag.appendChild(buildChapter(chapter, livePrices));
      if (DIVIDERS_AFTER[chapter.id]) {
        frag.appendChild(buildDivider(DIVIDERS_AFTER[chapter.id]));
      }

      var navLi = document.createElement("li");
      navLi.innerHTML = '<a class="index-nav__link" href="#' + chapter.id + '" data-chapter="' + chapter.id + '">' + chapter.title + "</a>";
      navList.appendChild(navLi);

      var overlayLi = document.createElement("li");
      overlayLi.innerHTML =
        '<a href="#' + chapter.id + '" data-chapter-link="' + chapter.id + '"><span class="folio">' + chapter.num + "</span>" + chapter.title + "</a>";
      overlayList.appendChild(overlayLi);
    });

    main.appendChild(frag);
  }

  function renderInfo() {
    document.getElementById("heroTagline").textContent = RESTAURANT_INFO.tagline;
    document.getElementById("footerHours").textContent = RESTAURANT_INFO.hours;
    document.getElementById("footerPayments").textContent = RESTAURANT_INFO.payments;
    document.getElementById("footerAddress").textContent = RESTAURANT_INFO.address;
    document.getElementById("year").textContent = new Date().getFullYear();

    var waLink = "https://wa.me/" + RESTAURANT_INFO.whatsappNumber + "?text=" + encodeURIComponent(RESTAURANT_INFO.whatsappMessage);
    document.getElementById("footerMapsLink").href = RESTAURANT_INFO.mapsUrl;

    var footerWa = document.getElementById("footerWhatsappLink");
    footerWa.href = waLink;
    footerWa.textContent = RESTAURANT_INFO.phoneDisplay + " · WhatsApp";

    document.getElementById("whatsappFab").href = waLink;

    document.getElementById("infoStrip").innerHTML =
      "<span><b>Horario</b> &nbsp;" + RESTAURANT_INFO.hours + "</span>" +
      "<span><b>Medios de pago</b> &nbsp;" + RESTAURANT_INFO.payments + "</span>" +
      "<span>" + RESTAURANT_INFO.cover + "</span>";
  }

  function setupHeaderReveal() {
    var header = document.getElementById("siteHeader");
    var hero = document.getElementById("portada");
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("is-visible", !entry.isIntersecting);
        });
      },
      { rootMargin: "-10% 0px 0px 0px" }
    );
    obs.observe(hero);
  }

  // Centra la pestaña activa dentro del indice horizontal, moviendo
  // unicamente el scrollLeft de ese contenedor. A proposito NO usa
  // scrollIntoView: ese metodo puede terminar ajustando tambien el
  // scroll vertical de la pagina (sobre todo con un header sticky
  // animado), lo que "peleaba" contra el scroll del usuario cada vez
  // que cambiaba de capitulo.
  function centerNavLink(link) {
    var nav = document.querySelector(".index-nav");
    if (!nav || !link) return;
    var navRect = nav.getBoundingClientRect();
    var linkRect = link.getBoundingClientRect();
    var delta = (linkRect.left + linkRect.width / 2) - (navRect.left + navRect.width / 2);
    if (Math.abs(delta) < 4) return;
    nav.scrollBy({ left: delta, behavior: "smooth" });
  }

  function setupActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".index-nav__link"));
    var sections = MENU_CHAPTERS.map(function (c) { return document.getElementById(c.id); });

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle("is-active", link.dataset.chapter === entry.target.id);
          });
          var active = document.querySelector('.index-nav__link[data-chapter="' + entry.target.id + '"]');
          centerNavLink(active);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { if (s) obs.observe(s); });
  }

  function setupMobileOverlay() {
    var toggle = document.getElementById("menuToggle");
    var overlay = document.getElementById("indexOverlay");
    var close = document.getElementById("indexOverlayClose");

    function open() {
      overlay.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
    function shut() {
      overlay.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", function (e) {
      if (e.target.closest("a")) shut();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") shut();
    });
  }

  // El scroll con rueda/trackpad queda nativo (instantaneo); solo los clics
  // en enlaces internos (#id) animan el desplazamiento, via JS puntual.
  function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href").slice(1);
        var target = id && document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderInfo();
    setupHeaderReveal();
    setupMobileOverlay();

    fetchLivePrices().then(function (livePrices) {
      renderMenu(livePrices);
      setupActiveNav();
      setupSmoothAnchors();
    });
  });
})();
