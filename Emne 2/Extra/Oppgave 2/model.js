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
    allToppings: ["Onion", "Ham", "Cheese", "Meatballs", "Paprika", "Mushroom", "Pepperoni", "Beef"],
    
    allSauces: ["None", "Garlic", "Tomato"],
    
    toppingPrices: {
      "Onion": 5,
      "Ham": 15,
      "Cheese": 10,
      "Meatballs": 20,
      "Paprika": 5,
      "Mushroom": 5,
      "Pepperoni": 20,
      "Beef": 25,
    },

    saucePrices: {
      "None": 0,
      "Garlic": 15,
      "Tomato": 15,
    },

    basePrices: {
      "Italian": 100,
      "American": 200,
    },

    pizza: [
      {
        name: "Billig Pizza",
        base: "Italian",
        topping: ["Onion", "Ham", "Cheese"],
        sauce: "None",
        price: 130,
        id: 1,
      },
      {
        name: "Vanlig Pizza",
        base: "Italian",
        topping: ["Meatballs", "Paprika", "Cheese", "Mushroom"],
        sauce: "Garlic",
        price: 155,
        id: 2,
      },
      {
        name: "Luksus Pizza",
        base: "American",
        topping: ["Pepperoni", "Ham", "Beef", "Cheese"],
        sauce: "Tomato",
        price: 285,
        id: 3,
      },

    ],
    orders: []
  }
};