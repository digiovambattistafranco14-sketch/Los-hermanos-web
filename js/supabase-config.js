// Configuracion de conexion a Supabase.
// SUPABASE_ANON_KEY es la clave publica ("anon"), esta pensada para
// viajar en el codigo del sitio: el acceso de escritura esta protegido
// por Row Level Security (solo usuarios logueados pueden modificar precios).
// Nunca pongas aca la "service_role key": esa es secreta y no va en el frontend.

const SUPABASE_URL = "https://edlpotndeemsydxckmey.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbHBvdG5kZWVtc3lkeGNrbWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NjEyMzIsImV4cCI6MjEwMDEzNzIzMn0.TjrjI0iUTolygM6FMjU_jMNgO4PuV7wePPqK2xNpuAo";

window.supabaseClient = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
