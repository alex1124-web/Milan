import { MenuItem, WineItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ANTIPASTI
  {
    id: 'ant-1',
    name: "Carpaccio d'Oro",
    price: 42,
    description: "Wagyu A5, 24k edible gold leaf, white truffle essence, 36-month aged Parmigiano shavings, and wild microgreens.",
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    isSignature: true
  },
  {
    id: 'ant-2',
    name: "Zaffiro del Mare",
    price: 38,
    description: "Blue lobster medallion, saffron-infused foam, citrus zest air, and premium Oscietra caviar on an obsidian-stone dish.",
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ant-3',
    name: "Fiori di Zucca Reali",
    price: 35,
    description: "Crispy squash blossoms, stuffed with artisanal buffalo ricotta heart, anchovy essence, and a delicate amber honey-gold glaze.",
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80'
  },

  // PRIMI
  {
    id: 'pri-1',
    name: "Risotto alla Milanese 'Oro'",
    price: 55,
    description: "Acquerello rice aged 7 years, Iranian saffron, slow-cooked marrow reduction, and a full sheet of 24k edible gold leaf. The quintessential Milanese icon redefined.",
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop&q=80',
    isSignature: true
  },
  {
    id: 'pri-2',
    name: "Tortellini di Seta",
    price: 48,
    description: "Hand-pulled silk-dough pasta, wild porcini mushroom filling, liquid gold butter sauce, and a crispy sage leaf finish.",
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pri-3',
    name: "Tagliolini al Nero",
    price: 52,
    description: "Squid ink silk pasta, rich sea urchin emulsion, gold-dusted Sardinian bottarga, and premium extra virgin lemon olive oil.",
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80'
  },

  // SECONDI
  {
    id: 'sec-1',
    name: "Cotoletta Imperiale",
    price: 68,
    description: "Bone-in select veal chop, double-breaded in customized gold crumbs, fried in clarified alpine butter, finished with Maldon smoked salt crystals.",
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    isSignature: true
  },
  {
    id: 'sec-2',
    name: "Branzino di Mezzanotte",
    price: 62,
    description: "Wild-caught select sea bass, charred baby leek, champagne & gold glaze reduction, accompanied by fresh sea succulents.",
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sec-3',
    name: "Filetto Noir",
    price: 75,
    description: "Dry-aged Chateaubriand fillet, dark berry glaze, wood-charred parsnip puree, and gold-leaf candied peppercorns.",
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&auto=format&fit=crop&q=80'
  },

  // DOLCI
  {
    id: 'dol-1',
    name: "Sfera di Cioccolato Noir",
    price: 24,
    description: "85% dark single-origin chocolate sphere, warm gold-flecked espresso center, melt pour, resting on a bed of chocolate soil.",
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'dol-2',
    name: "Panna Cotta d'Alba",
    price: 22,
    description: "Madagascar vanilla bean and white truffle panna cotta, hard gold-melt sugar crystals, finished with edible gold dust.",
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'dol-3',
    name: "Tiramisu del Futuro",
    price: 26,
    description: "Deconstructed espresso cloud, premium mascarpone mousse dome, gold-infused espresso soaked sponge, salted dark cacao crumble.",
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80'
  }
];

export const WINE_ITEMS: WineItem[] = [
  {
    id: 'wine-1',
    name: "The 1955 Barolo Riserva",
    price: 4200,
    description: "An incredibly rare vintage, kept under immaculate conditions in the private collection of the Viscontis. Rich leather, dry rose, and deep charcoal notes.",
    category: 'cuvee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_pVjmKMpiSy6Ft65If3nDjARZxpg_AmS7rmXlGg265e6koxAEhbcEME5V4w0ruCKUSB4i1poFxuFbY7iUuwH7yfrnrEUPRpt2h8It_TvD8Hiz1o1UG30i-CUqiy3FnXjXOxeGG-73Kygoa-PIXD-dcW9p63Jp9spEvBSvI3QbVlqKPkfcb_Zj4I9oigfNcJvtKvEJQpCQMNLPbJDY2PruIcN8BVShaVlAvijfWHfO6MOVkMRF_26TCcN0MIU5MqkwY4CqmpDjegg',
    archiveNo: 'ARCHIVE NO. 055',
    region: 'Piemonte, Italy',
    limitation: 'One bottle remains in vault'
  },
  {
    id: 'wine-2',
    name: "Poggio di Sotto Brunello 2012",
    price: 850,
    description: "Limited allocation estate wine. Shows exquisite cherry clarity, crushed stone, high-toned floral notes, and premium oak structure.",
    category: 'red',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6bxqza8rQ5wBt7gSK8CbD_Dh1p7P_ep974Pcx2O2qJGDvAvQq2f_8wyXVZXsYt2RVx4v7333oXd2_OuVf_ZzA4f1A57gvUoq2MIBucSrI7qkeRRyqO6ivVpVO4qzDl-9J_7jHBy681EHcKUH6LMUeRlG1U0JSs66ZhhTY25ddBtJ2es2fXQP3TxKxfCBcdhoYw92MDEmPlQBvAhp7RpdfVmE-fJONReFBEeTVFkc9pK2LkelmsLuyxACwKHCDHsuYsUdo4PXY14',
    archiveNo: 'ARCHIVE NO. 412',
    region: 'Tuscany, Italy',
    limitation: 'Allocated allocation only'
  },
  {
    id: 'wine-3',
    name: "Masseto '97 Magnum",
    price: 3100,
    description: "An legendary merlot benchmark from Italy's western coast. Displaying intense dark plum, truffle powder, and chocolate dust on a velvet canvas.",
    category: 'exclusive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzE6nkVkaqifJzkrXDxSWvIF5gfCfgD5ERLNOlVNjww1bgIDkMFelItpd4ZdQCmjelL0V368FXOWNmSXNlJegGTPl4eAILUCyHo2YoiqzBap1jGVjKTvUiANluRAY-yb1nemQdCt-qRKNg8Xr-flP2YHHLiadZFwdQxk9lEUZvELkHVlekguPU0kQPM6p0pd3rIMeyCALCId-HBjRyHYsohInrJoOMIBB3y2IZxNlAJGHZlHCsYJqshWcyIaUdRrhIhjXenwoL29E',
    archiveNo: 'ARCHIVE NO. 097',
    region: 'Bolgheri, Italy',
    limitation: 'Rare collectors bottle'
  }
];
