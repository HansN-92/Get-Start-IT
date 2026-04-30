updateView();
function updateView(){

	if (model.app.currentPage === "home")  homeView();
	else if (model.app.currentPage === "game")  gameView();
	else if (model.app.currentPage === "inspect")  inspectView();

    else alert("Error") // feilmelding hvis changePage("unknown")
}

function changePage(element) {
	model.app.currentPage = element;
	updateView();
}   // endre view ved å kalle changePage("view som skal vises")

function homeView(){
    model.app.app.innerHTML = /*HTML*/ `
    <div id="startWindow">
    <h1>Monster Manager</h1>
    <button onclick="changePage('game')">Start</button>
    </div>
    `;
}

function gameView(){
    const monsters = getAllMonsters();

    let monsterCards = "";
    for (let i = 0; i < monsters.length; i++){
        const monster = monsters[i];

        monsterCards += /*HTML*/ `
        <div id="monster-card ${monster.mood}" onclick="selectMonster(${monster.id})">
        <strong>${monster.name}</strong>
        <span id="strength">STR: ${monster.strength}</span>
        <span id="mood-badge">Mood: ${monster.mood}</span>
      </div>
        `
    }

    if (monsters.length === 0){
        monsterCards = /*HTML*/ `<p id="noMonsterMSG">No monsters left</p>`
    }
    
    
    model.app.app.innerHTML = /*HTML*/ `
    <div id="gameWindow">
    <div id="monsterList">Monsters (${monsters.length})
    </div>

    <button onclick="changeMood()">Change Mood</button>
    <button onclick="removeWeak()">Remove all < 5 strength</button>
    <button onclick="changePage('inspect')">Inspect</button>

    <div id="currentMonsterCards">${monsterCards}</div>
    </div>
    `;
}

function inspectView(){
    model.app.app.innerHTML = /*HTML*/ `
    <div id="inspectWindow">
    <button onclick="changePage('home')">Home</button>
    </div>

    `;
}
