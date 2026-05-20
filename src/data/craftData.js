export const materialMeta = {
  sulfur: {
    label: 'Сера',
    image: 'raid-assets/sulfur.jpg',
  },
  charcoal: {
    label: 'Уголь',
  },
  metalFragments: {
    label: 'Металл фрагменты',
  },
  lowGradeFuel: {
    label: 'ТНК',
    image: 'raid-assets/tnk.jpg',
  },
  cloth: {
    label: 'Ткань',
  },
  techTrash: {
    label: 'Микросхемы',
  },
  metalPipes: {
    label: 'Трубы',
  },
  rope: {
    label: 'Верёвка',
  },
};

export const craftItems = [
  {
    id: 'rockets',
    label: 'Ракета',
    image: 'raid-assets/rocket.jpg',
    workbench: 'Верстак 3',
    directIngredients: [
      { label: 'Взрывчатка', amount: 10 },
      { label: 'Порох', amount: 150 },
      { label: 'Металлическая труба', amount: 2 },
    ],
    rawMaterials: {
      sulfur: 1400,
      charcoal: 1950,
      metalFragments: 100,
      lowGradeFuel: 30,
      metalPipes: 2,
    },
  },
  {
    id: 'c4',
    label: 'C4',
    image: 'raid-assets/c4.jpg',
    workbench: 'Верстак 3',
    directIngredients: [
      { label: 'Взрывчатка', amount: 20 },
      { label: 'Ткань', amount: 5 },
      { label: 'Микросхемы', amount: 2 },
    ],
    rawMaterials: {
      sulfur: 2200,
      charcoal: 3000,
      metalFragments: 200,
      lowGradeFuel: 60,
      cloth: 5,
      techTrash: 2,
    },
  },
  {
    id: 'satchel',
    label: 'Сачель',
    image: 'raid-assets/satchel.jpg',
    workbench: 'Верстак 1',
    directIngredients: [
      { label: 'Бобовая граната', amount: 4 },
      { label: 'Маленький тайник', amount: 1 },
      { label: 'Верёвка', amount: 1 },
    ],
    rawMaterials: {
      sulfur: 480,
      charcoal: 720,
      metalFragments: 80,
      cloth: 10,
      rope: 1,
    },
  },
  {
    id: 'molotov',
    label: 'Молотов',
    image: 'raid-assets/molotov.png',
    workbench: 'Верстак 2',
    directIngredients: [
      { label: 'ТНК', amount: 50 },
      { label: 'Ткань', amount: 10 },
    ],
    rawMaterials: {
      lowGradeFuel: 50,
      cloth: 10,
    },
  },
];
