const model = {

  app: {
    app: document.getElementById("app"),
    currentPage: "home",
    pages: ["home", "game", "inspect"]
  
  
  },

  viewState: {
    monster: 
    {
      name: null,
      strength: null,
      mood: null,
      id: null,
    }
  },

  data: {
    monster: [
    {
      name: "Bjarne",
      strength: 2,
      mood: "happy",
      id: 1,
    },
    {
      name: "Børre",
      strength: 8,
      mood: "happy",
      id: 2,
    },
    {
      name: "Bernt",
      strength: 5,
      mood: "happy",
      id: 3,
    },
  ]
      
  }
};