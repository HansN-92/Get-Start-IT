function createSpell(){
    const type = document.querySelector('input[name="spellType"]:checked').value;

    model.viewState.spells.name = document.getElementById("spellName").value;
    model.viewState.spells.power = Number(document.getElementById("spellPower").value);
    model.viewState.spells.manaCost = type === "cantrip" ? 0 : Number(document.getElementById("spellManaCost").value);
    model.viewState.spells.element = document.getElementById("spellElement").value;
    model.viewState.spells.effect = document.getElementById("spellEffect").value;
    model.viewState.spells.type = type;
    model.viewState.spells.id = randomIDgen();

    model.data.spells.push({...model.viewState.spells});
    changeView("combat");

}

function castSpell(){
    model.data.usedSpells.push(selectedSpell)

}

function selectSpell(id){
    model.viewState.selectedSpell = model.data.spells.find(s => s.id === id);
}

function randomIDgen(){
    const newID = Math.floor(Math.random() * 1000) + 1;
    return newID;
}

function recoverSpells(){
    model.data.spells.push(model.data.usedSpells)
}

function getAllSpells(){
    return model.data.spells;
}

function checkManaCost(){
    const manaCost = document.getElementById("spellManaCost").value;
    if(Number(manaCost) === 0){
        document.querySelector('input[value="cantrip"]').checked = true;
    } else {
        document.querySelector('input[value="spell"]').checked = true;
    }
}