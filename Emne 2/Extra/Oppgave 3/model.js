const model = {

  app: {
    app: document.getElementById("app"),
    currentPage: "home",
    pages: ["home", "combat", "create", ""]

  },

  viewState: {
    spells: 
    {
      name: null,
      power: null,
      manaCost: null,
      element: null,
      effect: null,
      type: null,
      id: null,
    },

    selectedSpell: 
    {
      name: null,
      power: null,
      manaCost: null,
      element: null,
      effect: null,
      type: null,
      id: null,
    },
  },

  data: {
    wizard: {
      hp: 100,
      mana: 100,
    },

    spells: [
    {
      name: "Fireball",
      power: 50,
      manaCost: 20,
      element: "Fire",
      effect: "Burn",
      type: "spell",
      id: 1,
    },
    {
      name: "Ice Storm",
      power: 40,
      manaCost: 25,
      element: "Ice",
      effect: "Freeze",
      type: "spell",
      id: 2,
    },
    {
      name: "Chain Lightning",
      power: 35,
      manaCost: 15,
      element: "Lightning",
      effect: "Chain",
      type: "spell",
      id: 3,
    },
    {
      name: "Hold Person",
      power: 0,
      manaCost: 30,
      element: "Enchantment",
      effect: "Stun",
      type: "spell",
      id: 4,
    },
    {
      name: "Eldritch Blast",
      power: 20,
      manaCost: 0,
      element: "Evocation",
      effect: "None",
      type: "cantrip",
      id: 5,
    },

    ],

    usedSpells: [

    ]
  }
};