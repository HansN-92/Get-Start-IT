updateView();

function updateView(){
    let html = "";

    if(model.app.currentPage === "home") html = homeView();
    else if(model.app.currentPage === "edit") html = editPizzaView();
    else if(model.app.currentPage === "menu") html = pizzaMenuView();
    else if(model.app.currentPage === "order") html = pizzaOrderView();

    else alert("Error"); // feilmelding hvis changePage("unknown")

    model.app.app.innerHTML = html;
}

function changeView(element){
    model.app.currentPage = element;
    updateView();
}

function homeView(){
    return /* HTML */ `
    <div id="homeView">
    <button onclick="changeView('menu')">Menu</button>
    <button onclick="changeView('order')">Order List</button>
    </div>
    `
}

function editPizzaView(){
    const selectedPizza = model.viewState.pizza;

    return /* HTML */ `
    <div id="editPizzaView">
    <button onclick="changeView('home')">Home</button>
    <ul>
        <li>Pizza: <strong> ${selectedPizza.name} </strong></li>
        <li>Base: ${selectedPizza.base} <button onclick="editPizzaBase()">Change</button></li>
        <li>Topping: ${model.data.allToppings.map(t => /* HTML */ `
            <label><input type="checkbox" ${selectedPizza.topping.includes(t) ? "checked" : ""} onchange="editPizzaTopping('${t}')">${t}</label>`).join("")} </li>
    
        <li>Sauce: ${model.data.allSauces.map(s => /* HTML */ `
            <label><input type="radio" name="sauce" ${selectedPizza.sauce.includes(s) ? "checked" : ""} onchange="editPizzaSauce('${s}')">${s}</label>`).join("")} </li>
        
        <li>Price: ${selectedPizza.price} Kr,-</li>    
        <button onclick="orderPizza(); changeView('order')">Order</button>
    </ul>
    </div>
    `
}

function pizzaMenuView(){
    const pizzas = getAllPizzas();

    let pizzaList = "";
    for (let i = 0; i < pizzas.length; i++){
        const pizza = pizzas[i];

        pizzaList += /*HTML*/ `
        <div id="pizzaList">
        <li>
        ${pizza.name} ${pizza.price} Kr,-
        <button onclick="selectPizza(${pizza.id}); changeView('edit')">Edit</button>
        <button onclick="selectPizza(${pizza.id}); orderPizza(); changeView('order')">Order</button>
        </li>
        </div>
        `
    }
    
    return /* HTML */ `
    <div id="pizzaMenuView">
    <button onclick="changeView('home')">Home</button>
    ${pizzaList}
    </div>
    `
}

function pizzaOrderView(){
    const orderedPizza = model.data.orders

    let orderList = "";

    for (let i = 0; i < orderedPizza.length; i++){
    const orders = orderedPizza[i];

    const added = orders.topping.filter(t => !orders.originalToppings.includes(t));
    const removed = orders.originalToppings.filter(t => !orders.topping.includes(t));

    let changes = "";
    for (let j = 0; j < added.length; j++){
        changes += /* html */ `<li>+ ${added[j]} ${model.data.toppingPrices[added[j]]} Kr,-</li>`;
    }
    for (let j = 0; j < removed.length; j++){
        changes += /* html */ `<li>- ${removed[j]} ${model.data.toppingPrices[removed[j]]} Kr,-</li>`;
    }

    if(orders.base !== orders.originalBase)
    changes += /* html */ `<li>Base endret: ${orders.originalBase} → ${orders.base}</li>`;

    if(orders.sauce !== orders.originalSauce)
    changes += /* html */ `<li>Sauce endret: ${orders.originalSauce} → ${orders.sauce}</li>`;

    orderList += /* html */ `
        <div id="orderlist">
        <li>${orders.name} ${orders.price} Kr,-</li>
        ${changes}
        </div>
    `;
}

    return /* HTML */ `
    <div id="pizzaOrderView">
    <button onclick="changeView('home')">Home</button>
    <button onclick="changeView('menu')">Menu</button>
    ${orderList}
    <br>
    ${totalOrderPrice()}Kr,-
    </div>
    `
}