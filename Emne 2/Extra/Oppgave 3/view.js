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
    const spells = getAllSpells();

    let spellList = "";
    for (let i = 0; i < spells.length; i++){
        const spell = spells[i];

        spellList += /*HTML*/ `
        <div id="spellList">
        <li>
        <strong>${spell.name}</strong> <br> Power: ${spell.power} <br> Mana: ${spell.manaCost} <br> ${spell.element} ${spell.effect} ${spell.type}
        </li>
        </div>
        `
    }
   
    return /* html */ `
        <div id="buttons">
            <button onclick=""></button>
            <button onclick="castSpell()">Cast Spell</button>
            <button onclick="changeView('create')">Create New</button>
        </div>

        <div id="spellListView">
        ${spellList}
        </div>
    `

}

function createSpellView(){
   
   
    return /* html */ `
        <div id="createInputs">
            <input id="spellName" type="text" placeholder="name">
            <input id="spellPower" type="number" placeholder="power">
            <input id="spellManaCost" type="number" oninput="checkManaCost()" placeholder="manaCost">
            <input id="spellElement" type="text" placeholder="element">
            <input id="spellEffect" type="text" placeholder="effect">
            <label><input type="radio" name="spellType" value="spell" >Spell</label>
            <label><input type="radio" name="spellType" value="cantrip">Cantrip</label>
            <button onclick="createSpell()">Save New</button>
        </div>
    `

}
