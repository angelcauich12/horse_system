
const horsesData = [
  {
    id: 1,
    name: "Órale La Hacienda – Elegancia y Genética de Élite",
    breed: "Pura Raza Española (PRE)",
    age: 5,
    price: 8500,
    image: "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/acec521a16bdf0e68e3e9cb4328fa534.jpg",
    description: "Presentamos a Midnight (Órale La Hacienda), un imponente semental negro de Pura Raza Española (PRE) que combina una presencia física excepcional con un temperamento equilibrado. Con 5 años de edad y una alzada de 16.1 manos, este ejemplar destaca por sus movimientos fluidos y elegantes, siendo una opción ideal tanto para la doma clásica como para exhibiciones de alto nivel. Ha recibido entrenamiento profesional y muestra un potencial ilimitado para competiciones futuras.",
    pedigree: {
      sections: [
        {
          title: "Sire Line",
          data: [
            { name: "Black Diamond King I", year: "2015", sire: "Diamond Grande", sex: "S", studbook: "PRE", approval: "Approved", predicates: "Elite", sport: "Dressage", intResults: "1st Place Nationals" },
            { name: "Diamond Grande", year: "2010", sire: "El Rey", sex: "S", studbook: "PRE", approval: "Approved", predicates: "Premium", sport: "Dressage", intResults: "-" }
          ]
        },
        {
          title: "Dam Line - First Mother: DALE LA HACIENDA (DARCO X RISUENO LA SILLA XX), CCDM, 2010",
          data: [
            { name: "ORALE LA HACIENDA", year: "2015", sire: "DALLAS VDL", sex: "Stallion", studbook: "SLS", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "CORONADO LA HAC...", year: "2020", sire: "CORLAND", sex: "Stallion", studbook: "SLS", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "ORION LA HACIENDA", year: "2021", sire: "ORALE LA HACIE...", sex: "Gelding", studbook: "SLS", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "CATCH ME IF YOU C...", year: "2023", sire: "CHARLES DE CO...", sex: "Mare", studbook: "SLS", approval: "-", predicates: "-", sport: "-", intResults: "-" }
          ]
        },
        {
          title: "Dam Line - Second Mother: RISK LA SILLA (RISUENO LA SILLA XX X PILOT), CCDM, 1994",
          data: [
            { name: "A. SPEEDY GONZ...", year: "2006", sire: "ARGENTINUS", sex: "Mare", studbook: "ZANG", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "ISABELA LA HACI...", year: "2008", sire: "INDOCTRO", sex: "Mare", studbook: "ZANG", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "DALE LA HACIENDA", year: "2010", sire: "DARCO", sex: "Mare", studbook: "CCDM", approval: "-", predicates: "-", sport: "1.40m Jump", intResults: "RESULTS" }
          ]
        },
        {
          title: "Dam Line - Third Mother: MARACUYA LA SILLA (PILOT X FRUEHLINGSSTRAUM II), WESTF, 1990",
          data: [
            { name: "RISK LA SILLA", year: "1994", sire: "RISUENO LA SIL...", sex: "Mare", studbook: "CCDM", approval: "-", predicates: "-", sport: "-", intResults: "-" }
          ]
        },
        {
          title: "Dam Line - Fourth Mother: FARAH-DIBA (FRUEHLINGSSTRAUM II X SIOUX), WESTF, 1983",
          data: [
            { name: "MARACUYA LA SI...", year: "1990", sire: "PILOT", sex: "Mare", studbook: "WESTF", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "ROMANZE", year: "1991", sire: "RAMIROFF", sex: "Mare", studbook: "WESTF", approval: "-", predicates: "-", sport: "-", intResults: "-" },
            { name: "ANDREA K", year: "1992", sire: "AZARRO", sex: "Mare", studbook: "WESTF", approval: "-", predicates: "-", sport: "-", intResults: "-" }
          ]
        }
      ]
    },
    color: "Negro (Black) – Capa sólida y brillante.",
    height: "16.1 manos",
    gender: "Semental (Stallion)",
    featured: true,
    gallery: [
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/acec521a16bdf0e68e3e9cb4328fa534.jpg",
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/2a5b846806f79aab4750a8e1582012b1.jpg",
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/0f4540b356f6637c1131c2b0693c8c20.jpg"
    ]
  },
  {
    id: 2,
    name: "Trotador",
    breed: "Caballo Criollo",
    age: 3,
    price: 6200,
    image: "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/8b922017a0f4f1bedda02763a5dd5bb2.jpg",
    description: "Young energetic horse with natural trotting ability. Trotador is eager to learn and has shown exceptional stamina in early training. His friendly personality makes him a favorite around the stable. Ideal for endurance riding or ranch work.",
    pedigree: {
      sireLine: [
        { name: "Pampas King", year: "2014", sire: "Gaucho", sex: "S", studbook: "Criollo", approval: "Yes", predicates: "Premium", sport: "Endurance", intResults: "-" }
      ],
      damLine: [
        { name: "Criollo Star", year: "2015", sire: "Estrella", sex: "M", studbook: "Criollo", approval: "Yes", predicates: "Ster", sport: "Working", intResults: "-" }
      ]
    },
    color: "Dark Brown",
    height: "15.0 hands",
    gender: "Gelding",
    featured: true,
    gallery: [
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/8b922017a0f4f1bedda02763a5dd5bb2.jpg"
    ]
  },
  {
    id: 3,
    name: "Plata",
    breed: "Andaluz",
    age: 6,
    price: 9800,
    image: "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/d8cd6e78498432ba1be6bd9a84347ef7.jpg",
    description: "Beautiful gray mare with excellent bloodline and training. Plata is a stunning example of the Andalusian breed, with a thick mane and tail and powerful, elevated movement. She is gentle enough for an amateur but talented enough for a professional.",
    pedigree: {
      sireLine: [
        { name: "Silver Cloud", year: "2012", sire: "Cloud Nine", sex: "S", studbook: "Andalusian", approval: "Approved", predicates: "Elite", sport: "Dressage", intResults: "Grand Prix" }
      ],
      damLine: [
        { name: "Andalusian Pearl", year: "2013", sire: "Ocean", sex: "M", studbook: "Andalusian", approval: "Ster", predicates: "Preferent", sport: "-", intResults: "-" }
      ]
    },
    color: "Gray",
    height: "15.3 hands",
    gender: "Mare",
    featured: true,
    gallery: [
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/d8cd6e78498432ba1be6bd9a84347ef7.jpg"
    ]
  },
  {
    id: 4,
    name: "Blanco",
    breed: "Pura Raza Española",
    age: 4,
    price: 7500,
    image: "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/41950d9e5097cebd11bb81de99bbf939.jpg",
    description: "Pure white stallion with calm temperament and show potential. Blanco turns heads wherever he goes with his striking appearance and noble bearing. He is currently in basic dressage training and is progressing rapidly.",
    pedigree: {
      sireLine: [
        { name: "White Knight", year: "2013", sire: "Snow", sex: "S", studbook: "PRE", approval: "Approved", predicates: "Elite", sport: "Dressage", intResults: "-" }
      ],
      damLine: [
        { name: "Spanish Rose", year: "2014", sire: "Red Rose", sex: "M", studbook: "PRE", approval: "Ster", predicates: "-", sport: "-", intResults: "-" }
      ]
    },
    color: "White",
    height: "16.0 hands",
    gender: "Stallion",
    featured: true,
    gallery: [
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/41950d9e5097cebd11bb81de99bbf939.jpg",
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/8ec34fa8cb12d042a489bb6c727b5a15.jpg",
      "https://horizons-cdn.hostinger.com/74d50c87-a413-4830-b35b-4c989f8ddcb9/dd81d5d973baa02a16183a2fd1bdb519.jpg"
    ]
  }
];

export default horsesData;
