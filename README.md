# Los Hermanos — sitio + panel de administración

Sitio estático (HTML/CSS/JS, sin build step) con la carta de Los Hermanos
y un panel de administración para editar precios, conectado a Supabase.

## Estructura

- `index.html`, `css/style.css`, `js/menu-data.js`, `js/main.js` — sitio público.
- `admin.html`, `css/admin.css`, `js/admin.js` — panel de administración (`/admin.html`).
- `js/supabase-config.js` — credenciales públicas de Supabase (URL + clave anon).
- `supabase/seed.sql` — crea la tabla `precios`, sus políticas de seguridad y la carga inicial.

## Configurar Supabase (una sola vez)

1. Crear un proyecto en [supabase.com](https://supabase.com).
2. En **SQL Editor**, pegar y ejecutar el contenido completo de `supabase/seed.sql`.
3. En **Authentication → Users**, crear el usuario administrador (email + contraseña).
4. En **Project Settings → API**, copiar el **Project URL** y la clave **anon/public**.
5. Pegar esos dos valores en `js/supabase-config.js`:

   ```js
   const SUPABASE_URL = "https://xxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJ...";
   ```

La clave `anon` está diseñada para ser pública (viaja en el frontend); la escritura
está protegida por Row Level Security: solo un usuario logueado puede modificar `precios`.
**Nunca** uses la `service_role key` en este archivo.

## Uso del panel

Ir a `/admin.html`, iniciar sesión con el usuario creado en Supabase, buscar el producto
y editar su precio. Los cambios se guardan con el botón "Guardar cambios" y se reflejan
en el sitio público al instante (recargando la página).

## Despliegue

Sitio estático sin build step. En Netlify: build command vacío, publish directory `/`.
