export const raidTargets = [
  {
    id: 'wooden-door',
    name: 'Деревянная дверь',
    type: 'wood',
    health: 200,
    image: 'raid-assets/targets/wooden-door.webp',
    durability: '200 HP',
    resources: {
      rockets: {
        amount: 1,
        sulfur: 1400,
        damage: 200,
      },
      c4: {
        amount: 1,
        sulfur: 2200,
        damage: 200,
      },
      satchel: {
        amount: 2,
        sulfur: 960,
        damage: 100,
      },
      molotov: {
        amount: 2,
        tnk: 400,
        damage: 100,
      },
    },
  },
  {
    id: 'sheet-metal-door',
    name: 'Железная дверь',
    type: 'metal',
    health: 250,
    image: 'raid-assets/targets/sheet-metal-door.webp',
    durability: '250 HP',
    resources: {
      rockets: {
        amount: 2,
        sulfur: 2800,
        damage: 125,
      },
      c4: {
        amount: 1,
        sulfur: 2200,
        damage: 250,
      },
      satchel: {
        amount: 4,
        sulfur: 1920,
        damage: 62.5,
      },
    },
  },
  {
    id: 'armored-door',
    name: 'МВК дверь',
    type: 'armored',
    health: 1000,
    image: 'raid-assets/targets/armored-door.webp',
    durability: '1000 HP',
    resources: {
      rockets: {
        amount: 5,
        sulfur: 7000,
        damage: 200,
      },
      c4: {
        amount: 2,
        sulfur: 4400,
        damage: 500,
      },
      satchel: {
        amount: 15,
        sulfur: 7200,
        damage: 67,
      },
    },
  },
  {
    id: 'wooden-wall',
    name: 'Деревянная стена',
    type: 'wood',
    health: 250,
    image: 'raid-assets/targets/wooden-wall.webp',
    durability: '250 HP',
    resources: {
      rockets: {
        amount: 2,
        sulfur: 2800,
        damage: 125,
      },
      c4: {
        amount: 1,
        sulfur: 2200,
        damage: 250,
      },
      satchel: {
        amount: 3,
        sulfur: 1440,
        damage: 84,
      },
      molotov: {
        amount: 6,
        tnk: 1200,
        damage: 42,
      },
    },
  },
  {
    id: 'stone-wall',
    name: 'Каменная стена',
    type: 'stone',
    health: 500,
    image: 'raid-assets/targets/stone-wall.webp',
    durability: '500 HP',
    resources: {
      rockets: {
        amount: 4,
        sulfur: 5600,
        damage: 125,
      },
      c4: {
        amount: 2,
        sulfur: 4400,
        damage: 250,
      },
      satchel: {
        amount: 10,
        sulfur: 4800,
        damage: 50,
      },
    },
  },
  {
    id: 'sheet-metal-wall',
    name: 'Железная стена',
    type: 'metal',
    health: 1000,
    image: 'raid-assets/targets/sheet-metal-wall.webp',
    durability: '1000 HP',
    resources: {
      rockets: {
        amount: 8,
        sulfur: 11200,
        damage: 125,
      },
      c4: {
        amount: 4,
        sulfur: 8800,
        damage: 250,
      },
      satchel: {
        amount: 23,
        sulfur: 11040,
        damage: 44,
      },
    },
  },
  {
    id: 'armored-wall',
    name: 'МВК стена',
    type: 'armored',
    health: 2000,
    image: 'raid-assets/targets/armored-wall.webp',
    durability: '2000 HP',
    resources: {
      rockets: {
        amount: 15,
        sulfur: 21000,
        damage: 134,
      },
      c4: {
        amount: 8,
        sulfur: 17600,
        damage: 250,
      },
      satchel: {
        amount: 46,
        sulfur: 22080,
        damage: 44,
      },
    },
  },
  {
    id: 'sheet-metal-hatch',
    name: 'Железный люк',
    type: 'metal',
    health: 250,
    image: 'raid-assets/targets/sheet-metal-hatch.webp',
    durability: '250 HP',
    resources: {
      rockets: {
        amount: 2,
        sulfur: 2800,
        damage: 125,
      },
      c4: {
        amount: 1,
        sulfur: 2200,
        damage: 250,
      },
      satchel: {
        amount: 4,
        sulfur: 1920,
        damage: 62.5,
      },
    },
  },
];

export const resourceMeta = {
  rockets: {
    label: 'Ракеты',
    color: '#d75a3d',
    image: 'raid-assets/rocket.jpg',
    priceLabel: 'Цена в сере',
    priceField: 'sulfur',
    priceImage: 'raid-assets/sulfur.jpg',
  },
  c4: {
    label: 'C4',
    color: '#d9a441',
    image: 'raid-assets/c4.jpg',
    priceLabel: 'Цена в сере',
    priceField: 'sulfur',
    priceImage: 'raid-assets/sulfur.jpg',
  },
  satchel: {
    label: 'Сачели',
    color: '#9f8f7a',
    image: 'raid-assets/satchel.jpg',
    priceLabel: 'Цена в сере',
    priceField: 'sulfur',
    priceImage: 'raid-assets/sulfur.jpg',
  },
  molotov: {
    label: 'Молотовы',
    color: '#f08a2f',
    image: 'raid-assets/molotov.png',
    priceLabel: 'Цена в ТНК',
    priceField: 'tnk',
    priceImage: 'raid-assets/tnk.jpg',
  },
};
