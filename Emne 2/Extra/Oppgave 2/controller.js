function getAllPizzas() {
  return model.data.pizza;
}

function selectPizza(id){
    model.viewState.pizza = model.data.pizza.find(p => p.id === id);
    model.viewState.originalToppings = [...model.viewState.pizza.topping];
    model.viewState.originalBase = model.viewState.pizza.base;
    model.viewState.originalSauce = model.viewState.pizza.sauce;
    
    console.log(model.viewState.pizza)
}

function orderPizza(){
    const kopi = {
    ...model.viewState.pizza,
    topping: [...model.viewState.pizza.topping],
    originalToppings: [...model.viewState.originalToppings],
    originalBase: model.viewState.originalBase,
    originalSauce: model.viewState.originalSauce,
    
}

    if(kopi.price < 200){
        model.data.orders.push(kopi);
    }
    else {
        if(confirm("Er du sikker på at du vil kjøpe denne luksuspizzaen?!")){
            model.data.orders.push(kopi);
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

    model.viewState.pizza.price = calcPrice(model.viewState.pizza);
    updateView();
}

function editPizzaTopping(topping){
    const toppings = model.viewState.pizza.topping;
    if(toppings.includes(topping))
        model.viewState.pizza.topping = toppings.filter(t => t !== topping);
    else
        toppings.push(topping);
    
    model.viewState.pizza.price = calcPrice(model.viewState.pizza);
    updateView();
}

function editPizzaSauce(sauce){
    model.viewState.pizza.sauce = sauce; 
    
    model.viewState.pizza.price = calcPrice(model.viewState.pizza);
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

function calcPrice(pizza){
    let total = 0;
    total += model.data.basePrices[pizza.base];
    total += model.data.saucePrices[pizza.sauce];
    
    for(let i = 0; i < pizza.topping.length; i++){
        total += model.data.toppingPrices[pizza.topping[i]];
    }
    
    return total;
}

