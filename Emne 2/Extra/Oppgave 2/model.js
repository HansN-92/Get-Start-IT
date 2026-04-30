const model = {

  app: {
    app: document.getElementById("app"),
    currentPage: "home",
    pages: ["home", "edit", "menu", "order"]

  },

  viewState: {
    pizza: 
    {
      name: null,
      base: null,
      topping: null,
      sauce: null,
      price: null,
      id: null,
    },
    orders: []
  },

  data: {
    pizza: [
      {
        name: "Billig Pizza",
        base: "Italian",
        topping: ["Onion", "Ham", "Cheese"],
        sauce: "None",
        price: 123,
        id: 1,
      },
      {
        name: "Vanlig Pizza",
        base: "Italian",
        topping: ["Meatballs", "Paprika", "Cheese", "Mushroom"],
        sauce: "Garlic",
        price: 199,
        id: 2,
      },
      {
        name: "Luksus Pizza",
        base: "American",
        topping: ["Pepperoni", "Ham", "Beef", "Cheese"],
        sauce: "Tomato",
        price: 249,
        id: 3,
      },

    ],
    orders: []
  }
};