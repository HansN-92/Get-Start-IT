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
        <li>Topping: ${selectedPizza.topping.join(", ")} <button onclick="editPizzaTopping()">Change</button></li>
        <li>Sauce: ${selectedPizza.sauce} <button onclick="editSelectedPizza()">Change</button></li>
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

        orderList += /* html */ `
        <div id="orderlist">
        <li>
        ${orders.name}
        ${orders.price} Kr,-
        </li>
        </div>
        `
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