-- Los Hermanos: tabla de precios editable desde el panel de administracion
-- Ejecutar completo en Supabase > SQL Editor

create table if not exists public.precios (
  id text primary key,
  price integer not null,
  price2 integer,
  updated_at timestamptz not null default now()
);

alter table public.precios enable row level security;

drop policy if exists "precios_select_public" on public.precios;
create policy "precios_select_public" on public.precios for select using (true);

drop policy if exists "precios_write_authenticated" on public.precios;
create policy "precios_write_authenticated" on public.precios for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

insert into public.precios (id, price, price2) values
  ('ent-01', 12000, null), -- Jamón crudo
  ('ent-02', 15000, null), -- Jamón crudo con rusa
  ('ent-03', 15000, null), -- Matambre
  ('ent-04', 19000, null), -- Matambre con rusa
  ('ent-05', 8500, null), -- Mayonesa de ave
  ('ent-06', 9500, null), -- Mayonesa de atún
  ('ent-07', 8000, null), -- Palmitos con salsa golf
  ('ent-08', 13000, null), -- Salpicón de ave
  ('ent-09', 16000, null), -- Salpicón de atún
  ('emp-01', 2500, null), -- De carne
  ('emp-02', 2500, null), -- De la casa
  ('arr-01', 18000, null), -- Arroz a la valenciana
  ('arr-02', 26000, null), -- Arroz con mejillones a la provenzal
  ('arr-03', 18000, null), -- Arroz con pollo
  ('arr-04', 28000, null), -- Arroz con calamares
  ('arr-05', 9000, null), -- Arroz blanco
  ('min-01', 18000, null), -- Costillitas de cerdo al verdeo
  ('min-02', 17500, null), -- Costillitas de cerdo a la riojana
  ('min-03', 26000, null), -- Matambrito de cerdo al verdeo
  ('min-04', 8000, null), -- Puré de papa / calabaza
  ('min-05', 8500, null), -- Papas fritas
  ('min-06', 6000, null), -- Papas al natural
  ('min-07', 9000, null), -- Papas rejillas
  ('min-08', 12000, null), -- Papas a la crema
  ('min-09', 8500, null), -- Papas paes
  ('ens-01', 8000, null), -- Dos o tres ingredientes
  ('ens-02', 10000, null), -- Ensalada de la casa
  ('ens-03', 7500, null), -- Ensalada rusa
  ('ens-04', 10000, null), -- Ensalada Waldorf
  ('ens-05', 10000, null), -- Rúcula y parmesano
  ('par-01', 87000, 55000), -- Parrilla mixta
  ('par-02', 32000, 24000), -- Mollejas
  ('par-03', 11000, 8000), -- Chinchulines
  ('par-04', 6000, null), -- Chorizo
  ('par-05', 6000, null), -- Morcilla
  ('par-06', 13000, 9000), -- Riñón
  ('par-07', 9500, null), -- Pollo
  ('par-08', 27000, 22000), -- Bife de chorizo con guarnición
  ('par-09', 27000, 22000), -- Bife de lomo con guarnición
  ('par-10', 15000, null), -- Costillitas de cerdo
  ('par-11', 11000, null), -- Provoleta
  ('par-12', 27000, null), -- Matambre de cerdo
  ('par-13', 28000, 21000), -- Asado
  ('par-14', 30000, 22000), -- Vacío
  ('lom-01', 33000, null), -- Lomo al verdeo (especialidad)
  ('lom-02', 33000, null), -- Lomo a la suiza (especialidad)
  ('lom-03', 33000, null), -- Lomo al champignon (especialidad)
  ('lom-04', 33000, null), -- Lomo a la pimienta (especialidad)
  ('lom-05', 33000, null), -- Lomo a la ciruela con papas rejilla (especialidad)
  ('lom-06', 33000, null), -- Lomo al roquefort (especialidad)
  ('lom-13', 34000, null), -- Saltimbocca a la romana
  ('lom-07', 27000, null), -- Lomo al verdeo
  ('lom-08', 27000, null), -- Lomo a la pimienta
  ('lom-09', 27000, null), -- Lomo a la ciruela
  ('lom-10', 27000, null), -- Lomo al champignon
  ('lom-11', 27000, null), -- Lomo a la suiza
  ('sup-01', 15000, null), -- Suprema sola
  ('sup-02', 18000, null), -- Suprema a la Maryland
  ('sup-03', 19000, null), -- Suprema a la suiza
  ('sup-04', 17000, null), -- Suprema napolitana
  ('tor-01', 16000, null), -- Tortilla de papas
  ('tor-02', 17000, null), -- Tortilla a la española
  ('tor-03', 16000, null), -- Tortilla de acelga
  ('tor-04', 16000, null), -- Revuelto de Gramajo
  ('tor-05', 9500, null), -- Omelette de jamón y queso
  ('mil-01', 25000, null), -- De ternera
  ('mil-02', 29000, null), -- De ternera napolitana
  ('mil-03', 32000, null), -- De ternera a la suiza
  ('mil-04', 30000, null), -- De lomo napolitana
  ('mil-05', 34000, null), -- De lomo a la suiza
  ('mil-06', 30000, null), -- De lomo
  ('pas-01', 11500, null), -- Lasagna
  ('pas-02', 10000, 9000), -- Tallarines
  ('pas-03', 10000, 9000), -- Ñoquis
  ('pas-04', 10500, 9000), -- Ravioles
  ('pas-05', 11500, null), -- Canelones de verdura y jamón
  ('pas-06', 11000, null), -- Sorrentinos de jamón y queso
  ('pas-07', 18000, null), -- Crepes de espinaca y muzzarella
  ('sal-01', 5500, null), -- Fileto / manteca
  ('sal-02', 6500, null), -- Cuatro quesos / roquefort
  ('sal-03', 6000, null), -- Bolognesa / blanca / crema
  ('sal-04', 7500, null), -- Príncipe de Nápoli
  ('sal-05', 7000, null), -- Parisienne
  ('sal-06', 10000, null), -- Estofado de pollo
  ('sal-07', 11000, null), -- Estofado de carne
  ('pol-01', 16500, null), -- Pollo al verdeo
  ('pol-02', 16500, null), -- Pollo al ajillo
  ('pol-03', 17000, null), -- Pollo al champignon
  ('pol-04', 17000, null), -- Pollo al roquefort
  ('pol-05', 17000, null), -- Pollo a la suiza
  ('pol-06', 16500, null), -- Pollo a la portuguesa
  ('pol-07', 16500, null), -- Pollo a la provenzal
  ('pol-08', 17000, null), -- Pollo a la ciruela con papas rejilla
  ('pes-01', 23000, null), -- Rabas
  ('pes-02', 26000, null), -- Rabas a la provenzal
  ('pes-03', 16000, null), -- Merluza a la romana
  ('pes-04', 20000, null), -- Merluza al roquefort
  ('pes-05', 27000, null), -- Filet de abadejo al oreganato
  ('pes-06', 25000, null), -- Filet de abadejo a la romana
  ('pes-07', 29000, null), -- Filet de abadejo al roquefort
  ('pos-01', 3000, null), -- Dulce de batata
  ('pos-02', 5500, null), -- Zapallos en almíbar
  ('pos-03', 4500, null), -- Flan casero
  ('pos-04', 5500, null), -- Budín de pan
  ('pos-05', 3000, null), -- Dulce de membrillo
  ('pos-06', 4000, null), -- Queso
  ('pos-07', 5500, null), -- Panqueques con dulce de leche
  ('pos-08', 6000, null), -- Panqueques de manzana
  ('pos-09', 7000, null), -- Panqueques quemados al rhum
  ('pos-10', 5500, null), -- Ensalada de fruta
  ('pos-11', 7500, null), -- Frutillas con crema
  ('pos-12', 5500, null), -- Frutillas solas
  ('pos-13', 5500, null), -- Higos en almíbar
  ('pos-14', 6500, null), -- Mousse de chocolate
  ('pos-15', 3500, null), -- Porción de crema o dulce
  ('pos-16', 2500, null), -- Recargo de crema o dulce
  ('caf-01', 3000, null), -- Té
  ('caf-02', 3500, null), -- Café
  ('caf-03', 4500, null), -- Café doble
  ('beb-01', 4000, null), -- Agua mineral con o sin gas
  ('beb-02', 4000, null), -- Gaseosa
  ('beb-03', 5500, null), -- Jugo
  ('beb-04', 4000, null), -- Agua saborizada
  ('beb-05', 4000, null), -- Soda
  ('cer-01', 10000, null), -- Litro
  ('cer-02', 5000, null), -- Porrón
  ('hel-01', 5500, 3500), -- Helado
  ('hel-02', 11000, null), -- Gran copa Marifrú
  ('hel-03', 5000, null), -- Almendrado
  ('hel-04', 5500, null), -- Bombón helado
  ('hel-05', 8000, null), -- Don Pedro
  ('hel-06', 11000, null), -- Copa matrimonio
  ('hel-07', 6000, null), -- Limón con champagne
  ('vin-01', 6500, 8500), -- San Felipe
  ('vin-02', 10000, 15000), -- Trumpeter
  ('vin-03', 19500, null), -- Trumpeter Reserva
  ('vin-04', 21000, null), -- Rutini Encuentro
  ('vin-05', 26000, null), -- Rutini Cabernet - Malbec
  ('vin-06', 11000, 14500), -- Las Perdices Malbec
  ('vin-07', 14500, null), -- Las Perdices Cabernet
  ('vin-08', 11000, 14500), -- Las Perdices Sauvignon Blanco
  ('vin-09', 12000, null), -- Alamos
  ('vin-10', 19000, null), -- Saint Felicien
  ('vin-11', 25000, null), -- DV Catena
  ('vin-12', 15000, null), -- Nicassia
  ('vin-13', 4500, 6000), -- Vasco Viejo
  ('vin-14', 6000, 8000), -- Selección López
  ('vin-15', 10000, null), -- Crios Malbec
  ('vin-16', 11000, null), -- Emilia Malbec
  ('vin-17', 14000, null), -- Nieto Senetiner
  ('vin-18', 24000, null), -- Don Nicanor
  ('vin-19', 8500, null), -- Los Cardos Malbec
  ('vin-20', 8500, null), -- Los Cardos Chardonnay
  ('vin-21', 14500, null), -- La Linda
  ('vin-23', 8500, null), -- Norton Cosecha Tardía
  ('vin-24', 8500, null), -- Elementos
  ('vin-25', 12500, null), -- Don David
  ('vin-26', 29000, null), -- Clos de los Siete
  ('vin-27', 23000, null), -- Nieto Brut Nature
  ('vin-28', 20000, null), -- Las Perdices Extra Brut
  ('vin-29', 18000, null), -- Emilia Extra Brut
  ('vin-30', 13000, null) -- Sidra 1888
on conflict (id) do update set price = excluded.price, price2 = excluded.price2;
