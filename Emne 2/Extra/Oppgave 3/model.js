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
      type: "spell",
      id: 1,
    },
    {
      name: "Ice Storm",
      power: 40,
      manaCost: 25,
      element: "Ice",
      type: "spell",
      id: 2,
    },
    {
      name: "Chain Lightning",
      power: 35,
      manaCost: 15,
      element: "Lightning",
      type: "spell",
      id: 3,
    },
    {
      name: "Hold Person",
      power: 0,
      manaCost: 30,
      element: "Enchantment",
      type: "spell",
      id: 4,
    },
    {
      name: "Eldritch Blast",
      power: 20,
      manaCost: 0,
      element: "Evocation",
      type: "cantrip",
      id: 5,
    },

    ]
  }
};