// Datos de la carta de Los Hermanos.
// Estructura pensada para poder reemplazarse mas adelante por datos
// provenientes de Supabase sin cambiar el resto de la aplicacion.
// Cada item tiene un "id" estable que luego servira de clave para el panel de admin.

const MENU_CHAPTERS = [
  {
    id: "entradas",
    num: "01",
    title: "Entradas",
    icon: "icon-entradas",
    note: null,
    subs: [
      {
        items: [
          { id: "ent-01", name: "Jamón crudo", price: 12000 },
          { id: "ent-02", name: "Jamón crudo con rusa", price: 15000, desc: "Finas fetas de jamón crudo acompañadas de nuestra tradicional ensalada rusa elaborada con papas, zanahorias, arvejas y mayonesa." },
          { id: "ent-03", name: "Matambre", price: 15000, desc: "Relleno con vegetales frescos, huevo y una delicada selección de especias." },
          { id: "ent-04", name: "Matambre con rusa", price: 19000, desc: "Matambre tierno y sabroso acompañado de nuestra clásica ensalada rusa de elaboración casera." },
          { id: "ent-05", name: "Mayonesa de ave", price: 8500, desc: "Una combinación tradicional de pollo, papas y arvejas, ligada con suave mayonesa casera." },
          { id: "ent-06", name: "Mayonesa de atún", price: 9500, desc: "Preparación tradicional elaborada con atún, papas, zanahorias y arvejas, ligada con suave mayonesa." },
          { id: "ent-07", name: "Palmitos con salsa golf", price: 8000, desc: "Delicados palmitos acompañados de una clásica salsa golf de sabor suave y equilibrado." },
          { id: "ent-08", name: "Salpicón de ave", price: 13000, sizeNote: "para 2 personas", desc: "Fresca combinación de pollo, vegetales de estación, huevo y papas, ideal para compartir." },
          { id: "ent-09", name: "Salpicón de atún", price: 16000, sizeNote: "para 2 personas", desc: "Atún seleccionado combinado con vegetales frescos, huevo y papas, en una propuesta ligera y sabrosa para compartir." }
        ]
      }
    ]
  },
  {
    id: "empanadas",
    num: "02",
    title: "Empanadas",
    icon: "icon-empanadas",
    note: null,
    subs: [
      {
        items: [
          { id: "emp-01", name: "De carne", price: 2500, desc: "Elaborada con carne seleccionada, aceitunas, vegetales y una delicada combinación de especias." },
          { id: "emp-02", name: "De la casa", price: 2500, desc: "Nuestra especialidad, rellena de queso fundido, cebolla y morrón rojo." }
        ]
      }
    ]
  },
  {
    id: "arroz",
    num: "03",
    title: "Arroz",
    icon: "icon-arroz",
    note: "Consulte por nuestro plato del día.",
    subs: [
      {
        items: [
          { id: "arr-01", name: "Arroz a la valenciana", price: 18000, desc: "Arroz amarillo preparado con pollo, arvejas y vegetales, sazonado con una selección de condimentos tradicionales." },
          { id: "arr-02", name: "Arroz con mejillones a la provenzal", price: 26000, desc: "Arroz acompañado de mejillones cocidos con ajo, perejil, aceite de oliva y un toque de vino blanco." },
          { id: "arr-03", name: "Arroz con pollo", price: 18000, desc: "Clásica preparación de arroz con pollo, cocinado en una suave salsa de tomate y vegetales." },
          { id: "arr-04", name: "Arroz con calamares", price: 28000, desc: "Arroz elaborado con calamares, salsa de tomate, arvejas y un delicado toque de perejil." },
          { id: "arr-05", name: "Arroz blanco", price: 9000, desc: "Guarnición clásica de arroz cocido al punto justo." }
        ]
      }
    ]
  },
  {
    id: "minutas",
    num: "04",
    title: "Minutas",
    icon: "icon-minutas",
    note: null,
    subs: [
      {
        items: [
          { id: "min-01", name: "Costillitas de cerdo al verdeo", price: 18000, desc: "Tiernas costillitas de cerdo acompañadas de papas fritas y una suave salsa de crema y verdeo, elaborada con manteca y cocción lenta." },
          { id: "min-02", name: "Costillitas de cerdo a la riojana", price: 17500, desc: "Costillitas de cerdo servidas con papas fritas, jamón crocante, arvejas y huevo frito, en una clásica combinación de sabores." },
          { id: "min-03", name: "Matambrito de cerdo al verdeo", price: 26000, desc: "Tierno matambrito de cerdo acompañado de papas fritas y una delicada salsa de crema y verdeo." }
        ]
      },
      {
        label: "Guarniciones",
        items: [
          { id: "min-04", name: "Puré de papa / calabaza", price: 8000 },
          { id: "min-05", name: "Papas fritas", price: 8500 },
          { id: "min-06", name: "Papas al natural", price: 6000 },
          { id: "min-07", name: "Papas rejillas", price: 9000, desc: "Extra crocantes." },
          { id: "min-08", name: "Papas a la crema", price: 12000 },
          { id: "min-09", name: "Papas paes", price: 8500, desc: "Finas y crocantes." }
        ]
      }
    ]
  },
  {
    id: "ensaladas",
    num: "05",
    title: "Ensaladas",
    icon: "icon-ensaladas",
    note: "Ingredientes: lechuga, tomate, cebolla, apio, remolacha, radicheta, zanahoria, chaucha, huevo, rúcula.",
    subs: [
      {
        items: [
          { id: "ens-01", name: "Dos o tres ingredientes", price: 8000 },
          { id: "ens-02", name: "Ensalada de la casa", price: 10000 },
          { id: "ens-03", name: "Ensalada rusa", price: 7500 },
          { id: "ens-04", name: "Ensalada Waldorf", price: 10000, desc: "Ensalada fresca de manzana verde, apio, nueces y roquefort, unida con crema de leche." },
          { id: "ens-05", name: "Rúcula y parmesano", price: 10000 }
        ]
      }
    ]
  },
  {
    id: "parrilla",
    num: "06",
    title: "Parrilla",
    icon: "icon-parrilla",
    note: "Los precios con dos valores corresponden a porción entera y media porción.",
    subs: [
      {
        items: [
          { id: "par-01", name: "Parrilla mixta", price: 87000, price2: 55000 },
          { id: "par-02", name: "Mollejas", price: 32000, price2: 24000 },
          { id: "par-03", name: "Chinchulines", price: 11000, price2: 8000 },
          { id: "par-04", name: "Chorizo", price: 6000 },
          { id: "par-05", name: "Morcilla", price: 6000 },
          { id: "par-06", name: "Riñón", price: 13000, price2: 9000 },
          { id: "par-07", name: "Pollo", price: 9500 },
          { id: "par-08", name: "Bife de chorizo con guarnición", price: 27000, price2: 22000, desc: "Acompañado con puré o papas paes a elección." },
          { id: "par-09", name: "Bife de lomo con guarnición", price: 27000, price2: 22000, desc: "Acompañado con puré o papas paes a elección." },
          { id: "par-10", name: "Costillitas de cerdo", price: 15000, desc: "Acompañado con puré o papas paes a elección." },
          { id: "par-11", name: "Provoleta", price: 11000, desc: "Tradicional queso provolone cocido a las brasas." },
          { id: "par-12", name: "Matambre de cerdo", price: 27000 },
          { id: "par-13", name: "Asado", price: 28000, price2: 21000 },
          { id: "par-14", name: "Vacío", price: 30000, price2: 22000 }
        ]
      }
    ]
  },
  {
    id: "lomo",
    num: "07",
    title: "Especialidades de lomo",
    icon: "icon-lomo",
    note: "Las especialidades se acompañan con guarnición de papas cuadradas.",
    subs: [
      {
        label: "Especialidades",
        items: [
          { id: "lom-01", name: "Lomo al verdeo (especialidad)", price: 33000, desc: "Medallones de lomo acompañados de una suave salsa de crema y verdeo." },
          { id: "lom-02", name: "Lomo a la suiza (especialidad)", price: 33000, desc: "Medallones de lomo cubiertos con crema de espinaca, jamón y queso gratinado." },
          { id: "lom-03", name: "Lomo al champignon (especialidad)", price: 33000, desc: "Medallones de lomo servidos con una delicada salsa de champiñones." },
          { id: "lom-04", name: "Lomo a la pimienta (especialidad)", price: 33000, desc: "Medallones de lomo acompañados de una clásica salsa a la pimienta de sabor intenso y equilibrado." },
          { id: "lom-05", name: "Lomo a la ciruela con papas rejilla (especialidad)", price: 33000, desc: "Medallones de lomo acompañados de una suave salsa de crema y ciruelas, servidos con papas rejilla." },
          { id: "lom-06", name: "Lomo al roquefort (especialidad)", price: 33000, desc: "Medallones de lomo bañados en una cremosa salsa de queso roquefort." },
          { id: "lom-13", name: "Saltimbocca a la romana", price: 34000, desc: "Base de puré de papas cremoso, con lomo marinado tierno, bañado en salsa de champiñones y arvejas." }
        ]
      },
      {
        label: "Clásicos",
        items: [
          { id: "lom-07", name: "Lomo al verdeo", price: 27000 },
          { id: "lom-08", name: "Lomo a la pimienta", price: 27000 },
          { id: "lom-09", name: "Lomo a la ciruela", price: 27000 },
          { id: "lom-10", name: "Lomo al champignon", price: 27000 },
          { id: "lom-11", name: "Lomo a la suiza", price: 27000 }
        ]
      }
    ]
  },
  {
    id: "supremas",
    num: "08",
    title: "Supremas",
    icon: "icon-supremas",
    note: null,
    subs: [
      {
        items: [
          { id: "sup-01", name: "Suprema sola", price: 15000 },
          { id: "sup-02", name: "Suprema a la Maryland", price: 18000, desc: "Suprema de pollo acompañada de papas paes, banana frita, jamón crocante y arvejas, en una clásica combinación de sabores." },
          { id: "sup-03", name: "Suprema a la suiza", price: 19000, desc: "Suprema de pollo cubierta con jamón, queso y crema, gratinada al horno y acompañada de papas doradas." },
          { id: "sup-04", name: "Suprema napolitana", price: 17000, desc: "Suprema de pollo acompañada de salsa de tomate, jamón y queso fundido, gratinada al horno." }
        ]
      }
    ]
  },
  {
    id: "tortillas",
    num: "09",
    title: "Tortillas y omelettes",
    icon: "icon-tortillas",
    note: null,
    subs: [
      {
        items: [
          { id: "tor-01", name: "Tortilla de papas", price: 16000 },
          { id: "tor-02", name: "Tortilla a la española", price: 17000, desc: "Nuestra tradicional tortilla de papas con cebolla y chorizo colorado, de sabor intenso y casero." },
          { id: "tor-03", name: "Tortilla de acelga", price: 16000, desc: "Preparación casera elaborada con acelga fresca, huevos y suaves condimentos." },
          { id: "tor-04", name: "Revuelto de Gramajo", price: 16000, desc: "Un clásico de la cocina tradicional, preparado con papas paes, huevos revueltos, jamón y vegetales frescos." },
          { id: "tor-05", name: "Omelette de jamón y queso", price: 9500 }
        ]
      }
    ]
  },
  {
    id: "milanesas",
    num: "10",
    title: "Milanesas",
    icon: "icon-milanesas",
    note: null,
    subs: [
      {
        items: [
          { id: "mil-01", name: "De ternera", price: 25000 },
          { id: "mil-02", name: "De ternera napolitana", price: 29000, desc: "Milanesa de ternera cubierta con salsa de tomate, jamón y queso, gratinada al horno." },
          { id: "mil-03", name: "De ternera a la suiza", price: 32000, desc: "Milanesa de ternera cubierta de crema de leche y jamón, gratinada al horno y acompañada de papas doradas." },
          { id: "mil-04", name: "De lomo napolitana", price: 30000, desc: "Lomo cubierto con salsa de tomate, jamón y queso, gratinado al horno." },
          { id: "mil-05", name: "De lomo a la suiza", price: 34000, desc: "Medallones de lomo cubiertos con jamón, queso y crema, gratinados al horno y acompañados de papas doradas." },
          { id: "mil-06", name: "De lomo", price: 30000 }
        ]
      }
    ]
  },
  {
    id: "pastas",
    num: "11",
    title: "Pastas caseras",
    icon: "icon-pastas",
    note: null,
    subs: [
      {
        items: [
          { id: "pas-01", name: "Lasagna", price: 11500, desc: "Nuestra clásica lasaña casera, rellena de jamón y queso." },
          { id: "pas-02", name: "Tallarines", price: 10000, price2: 9000, desc: "Precio según tamaño de la porción." },
          { id: "pas-03", name: "Ñoquis", price: 10000, price2: 9000 },
          { id: "pas-04", name: "Ravioles", price: 10500, price2: 9000, desc: "Pasta casera rellena de verdura y jamón, elaborada de manera artesanal." },
          { id: "pas-05", name: "Canelones de verdura y jamón", price: 11500 },
          { id: "pas-06", name: "Sorrentinos de jamón y queso", price: 11000 },
          { id: "pas-07", name: "Crepes de espinaca y muzzarella", price: 18000, desc: "Finos crepes rellenos de espinaca y muzzarella, acompañados con salsa de queso." }
        ]
      }
    ]
  },
  {
    id: "salsas",
    num: "12",
    title: "Salsas especiales",
    icon: "icon-salsas",
    note: "Acompañe nuestras pastas caseras con la salsa de su preferencia.",
    subs: [
      {
        items: [
          { id: "sal-01", name: "Fileto / manteca", price: 5500 },
          { id: "sal-02", name: "Cuatro quesos / roquefort", price: 6500 },
          { id: "sal-03", name: "Bolognesa / blanca / crema", price: 6000 },
          { id: "sal-04", name: "Príncipe de Nápoli", price: 7500, desc: "Delicada salsa de crema, pollo y jamón, coronada con queso gratinado y un suave toque de fileto." },
          { id: "sal-05", name: "Parisienne", price: 7000, desc: "Suave salsa de crema y jamón, cubierta con queso gratinado." },
          { id: "sal-06", name: "Estofado de pollo", price: 10000 },
          { id: "sal-07", name: "Estofado de carne", price: 11000 }
        ]
      }
    ]
  },
  {
    id: "pollos",
    num: "13",
    title: "Pollos",
    icon: "icon-pollos",
    note: "Todos los platos se elaboran con 1/4 de pollo y se sirven con papas fritas cuadradas, salvo indicación contraria.",
    subs: [
      {
        items: [
          { id: "pol-01", name: "Pollo al verdeo", price: 16500, desc: "Acompañado de una suave salsa de crema y verdeo." },
          { id: "pol-02", name: "Pollo al ajillo", price: 16500, desc: "Salteado con ajo y vino blanco, resaltando todo su sabor." },
          { id: "pol-03", name: "Pollo al champignon", price: 17000, desc: "Acompañado de una delicada salsa de champiñones." },
          { id: "pol-04", name: "Pollo al roquefort", price: 17000, desc: "Cubierto con una cremosa salsa de queso roquefort." },
          { id: "pol-05", name: "Pollo a la suiza", price: 17000, desc: "Cubierto con crema de espinaca, jamón y queso, gratinado al horno." },
          { id: "pol-06", name: "Pollo a la portuguesa", price: 16500, desc: "Salteado con cebolla y morrón, acompañado de papas al natural." },
          { id: "pol-07", name: "Pollo a la provenzal", price: 16500, desc: "Salteado con ajo, perejil y vino blanco." },
          { id: "pol-08", name: "Pollo a la ciruela con papas rejilla", price: 17000, desc: "Acompañado de una suave salsa de crema y ciruelas pasas, servido con papas rejilla." }
        ]
      }
    ]
  },
  {
    id: "pescados",
    num: "14",
    title: "Pescados",
    icon: "icon-pescados",
    note: null,
    subs: [
      {
        items: [
          { id: "pes-01", name: "Rabas", price: 23000 },
          { id: "pes-02", name: "Rabas a la provenzal", price: 26000, desc: "Rabas salteadas con ajo, perejil y vino blanco." },
          { id: "pes-03", name: "Merluza a la romana", price: 16000, desc: "Filet de merluza marinado y rebozado, acompañado de papas al natural." },
          { id: "pes-04", name: "Merluza al roquefort", price: 20000, desc: "Filet de merluza con una cremosa salsa de queso roquefort, acompañado de papas cuadradas." },
          { id: "pes-05", name: "Filet de abadejo al oreganato", price: 27000, desc: "A la parrilla, condimentado con orégano y limón, acompañado de papas al natural." },
          { id: "pes-06", name: "Filet de abadejo a la romana", price: 25000, desc: "Marinado y rebozado, acompañado de papas al natural." },
          { id: "pes-07", name: "Filet de abadejo al roquefort", price: 29000, desc: "Con una cremosa salsa de queso roquefort, acompañado de papas cuadradas." }
        ]
      }
    ]
  },
  {
    id: "postres",
    num: "15",
    title: "Postres",
    icon: "icon-postres",
    note: null,
    subs: [
      {
        items: [
          { id: "pos-01", name: "Dulce de batata", price: 3000 },
          { id: "pos-02", name: "Zapallos en almíbar", price: 5500 },
          { id: "pos-03", name: "Flan casero", price: 4500 },
          { id: "pos-04", name: "Budín de pan", price: 5500 },
          { id: "pos-05", name: "Dulce de membrillo", price: 3000 },
          { id: "pos-06", name: "Queso", price: 4000 },
          { id: "pos-07", name: "Panqueques con dulce de leche", price: 5500 },
          { id: "pos-08", name: "Panqueques de manzana", price: 6000 },
          { id: "pos-09", name: "Panqueques quemados al rhum", price: 7000 },
          { id: "pos-10", name: "Ensalada de fruta", price: 5500 },
          { id: "pos-11", name: "Frutillas con crema", price: 7500 },
          { id: "pos-12", name: "Frutillas solas", price: 5500 },
          { id: "pos-13", name: "Higos en almíbar", price: 5500 },
          { id: "pos-14", name: "Mousse de chocolate", price: 6500 },
          { id: "pos-15", name: "Porción de crema o dulce", price: 3500 },
          { id: "pos-16", name: "Recargo de crema o dulce", price: 2500 }
        ]
      }
    ]
  },
  {
    id: "cafeteria",
    num: "16",
    title: "Cafetería",
    icon: "icon-cafeteria",
    note: null,
    subs: [
      {
        items: [
          { id: "caf-01", name: "Té", price: 3000 },
          { id: "caf-02", name: "Café", price: 3500 },
          { id: "caf-03", name: "Café doble", price: 4500 }
        ]
      }
    ]
  },
  {
    id: "bebidas",
    num: "17",
    title: "Bebidas sin alcohol",
    icon: "icon-bebidas",
    note: null,
    subs: [
      {
        items: [
          { id: "beb-01", name: "Agua mineral con o sin gas", price: 4000 },
          { id: "beb-02", name: "Gaseosa", sizeNote: "línea Coca-Cola", price: 4000 },
          { id: "beb-03", name: "Jugo", sizeNote: "línea Estancia Los Naranjos", price: 5500 },
          { id: "beb-04", name: "Agua saborizada", sizeNote: "línea Clara, sin azúcar", price: 4000 },
          { id: "beb-05", name: "Soda", sizeNote: "línea Hermida", price: 4000 }
        ]
      }
    ]
  },
  {
    id: "cervezas",
    num: "18",
    title: "Cervezas",
    icon: "icon-cervezas",
    note: "Marcas disponibles: Heineken, Miller, Imperial, Schneider.",
    subs: [
      {
        items: [
          { id: "cer-01", name: "Litro", price: 10000 },
          { id: "cer-02", name: "Porrón", price: 5000 }
        ]
      }
    ]
  },
  {
    id: "helados",
    num: "19",
    title: "Helados",
    icon: "icon-helados",
    note: null,
    subs: [
      {
        items: [
          { id: "hel-01", name: "Helado", price: 5500, price2: 3500, desc: "Dos opciones de tamaño." },
          { id: "hel-02", name: "Gran copa Marifrú", sizeNote: "frutilla", price: 11000 },
          { id: "hel-03", name: "Almendrado", price: 5000 },
          { id: "hel-04", name: "Bombón helado", price: 5500 },
          { id: "hel-05", name: "Don Pedro", price: 8000 },
          { id: "hel-06", name: "Copa matrimonio", price: 11000, desc: "Ensalada de frutas, helado tricolor y galletitas." },
          { id: "hel-07", name: "Limón con champagne", price: 6000 }
        ]
      }
    ]
  },
  {
    id: "vinos",
    num: "20",
    title: "Vinos",
    icon: "icon-vinos",
    note: "Los precios con dos valores corresponden a media botella y botella, salvo aclaración.",
    subs: [
      {
        label: "Bodega La Rural",
        items: [
          { id: "vin-01", name: "San Felipe", price: 6500, price2: 8500, sizeNote: "3/8 o chico / 750cc" },
          { id: "vin-02", name: "Trumpeter", price: 10000, price2: 15000 },
          { id: "vin-03", name: "Trumpeter Reserva", price: 19500 },
          { id: "vin-04", name: "Rutini Encuentro", price: 21000 },
          { id: "vin-05", name: "Rutini Cabernet - Malbec", price: 26000 }
        ]
      },
      {
        label: "Bodega Viñas Las Perdices",
        items: [
          { id: "vin-06", name: "Las Perdices Malbec", price: 11000, price2: 14500 },
          { id: "vin-07", name: "Las Perdices Cabernet", price: 14500 },
          { id: "vin-08", name: "Las Perdices Sauvignon Blanco", price: 11000, price2: 14500 }
        ]
      },
      {
        label: "Bodega Catena Zapata",
        items: [
          { id: "vin-09", name: "Alamos", price: 12000 },
          { id: "vin-10", name: "Saint Felicien", price: 19000 },
          { id: "vin-11", name: "DV Catena", price: 25000 },
          { id: "vin-12", name: "Nicassia", price: 15000 }
        ]
      },
      {
        label: "Bodega López",
        items: [
          { id: "vin-13", name: "Vasco Viejo", price: 4500, price2: 6000 },
          { id: "vin-14", name: "Selección López", price: 6000, price2: 8000 }
        ]
      },
      {
        label: "Bodega Nieto Senetiner / Susana Balbo",
        items: [
          { id: "vin-15", name: "Crios Malbec", price: 10000 },
          { id: "vin-16", name: "Emilia Malbec", price: 11000 },
          { id: "vin-17", name: "Nieto Senetiner", price: 14000 },
          { id: "vin-18", name: "Don Nicanor", price: 24000 }
        ]
      },
      {
        label: "Bodega Doña Paula",
        items: [
          { id: "vin-19", name: "Los Cardos Malbec", price: 8500 },
          { id: "vin-20", name: "Los Cardos Chardonnay", price: 8500 }
        ]
      },
      {
        label: "Bodega Luigi Bosca",
        items: [
          { id: "vin-21", name: "La Linda", price: 14500 },
          { id: "vin-22", name: "Luigi Bosca", price: null, priceText: "Consulte variedades" }
        ]
      },
      {
        label: "Bodega Norton",
        items: [
          { id: "vin-23", name: "Norton Cosecha Tardía", price: 8500 }
        ]
      },
      {
        label: "Bodega El Esteco",
        items: [
          { id: "vin-24", name: "Elementos", price: 8500 },
          { id: "vin-25", name: "Don David", price: 12500 },
          { id: "vin-26", name: "Clos de los Siete", price: 29000 }
        ]
      },
      {
        label: "Espumantes y sidras",
        items: [
          { id: "vin-27", name: "Nieto Brut Nature", price: 23000 },
          { id: "vin-28", name: "Las Perdices Extra Brut", price: 20000 },
          { id: "vin-29", name: "Emilia Extra Brut", sizeNote: "rosado dulce", price: 18000 },
          { id: "vin-30", name: "Sidra 1888", price: 13000 }
        ]
      }
    ]
  }
];

const RESTAURANT_INFO = {
  name: "Los Hermanos",
  tagline: "La casa se reserva el derecho de admisión y permanencia",
  hours: "12:00 a 15:30 hs / 19:00 a 23:30 hs",
  payments: "Efectivo · Transferencia · Tarjeta de débito",
  cover: "Servicio de mesa $1.500 — incluye mantelería, panificados y untables.",
  address: "Cam. Parque Centenario Centro, B1896 City Bell, Provincia de Buenos Aires",
  phoneDisplay: "221 672-2209",
  whatsappNumber: "5492216722209",
  whatsappMessage: "Hola! Quería hacer una consulta.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Los Hermanos, Cam. Parque Centenario Centro, B1896 City Bell, Provincia de Buenos Aires")
};
