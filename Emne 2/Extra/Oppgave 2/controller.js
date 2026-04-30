function getAllPizzas() {
  return model.data.pizza;
}

function selectPizza(id){
    model.viewState.pizza = model.data.pizza.find(p => p.id === id);
    console.log(model.viewState.pizza)
}

function orderPizza(){
    if (model.viewState.pizza.price < 200){
        model.data.orders.push(model.viewState.pizza)
        console.log(model.data.orders)
    }
    else if (model.viewState.pizza.price >= 200){
        if (confirm("Er du sikker på at du vil kjøpe denne luksuspizzaen?!")){
            model.data.orders.push(model.viewState.pizza)
        }
        else return;

    }
}

function editPizzaBase(){
    if (model.viewState.pizza.base === "Italian"){
        model.viewState.pizza.base = "American";
    }
    else if (model.viewState.pizza.base === "American"){
        model.viewState.pizza.base = "Italian";
    }
    else alert("Error")
    updateView();
}

function editPizzaTopping(){
    model.data.allToppings

    updateView();
}

function editPizzaSauce(){
    model.data.allSauces
    
    updateView();
}

function totalOrderPrice(){
    let total = 0;
    for (let i = 0; i < model.data.orders.length; i++){
        const order = model.data.orders[i];
        total = total + order.price;
    }
    return total;
}