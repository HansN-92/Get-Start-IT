updateView();

function updateView(){
    let html = "";

    if(model.app.currentPage === "home") html = homeView();
    else if(model.app.currentPage === "combat") html = combatView();
    else if(model.app.currentPage === "create") html = createSpellView();
    else if(model.app.currentPage === "") html = View();

    else alert("Error"); // feilmelding hvis changePage("unknown")

    model.app.app.innerHTML = html;
}

function changeView(element){
    model.app.currentPage = element;
    updateView();
}

function homeView(){


    return /* html */ `
        <button onclick="changeView('combat')">Start</button>
    `

}

function combatView(){
   
   
    return /* html */ `
        <button onclick=""></button>
        <button onclick="castSpell()">Cast Spell</button>
        <button onclick="changeView('create')">Create New</button>
    `

}

function createSpellView(){
   
   
    return /* html */ `
        <div>
            <input type="text" placeholder="name">
            <input type="number" placeholder="power">
            <input type="number" placeholder="manaCost">
            <input type="text" placeholder="element">
            <input type="text" placeholder="type">
            <button onclick="createSpell()">Save New</button>
        </div>
    `

}
