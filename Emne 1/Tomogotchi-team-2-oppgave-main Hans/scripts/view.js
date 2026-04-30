const page = document.getElementById("mainView")
let currentpage = "mainGameView";

updateMainView();
function updateMainView(){
    let html = "";

    if(currentpage == "mainGameView") html = drawMainView();

    page.innerHTML = html;

}

function changepage(element){
    currentpage = element;
    updateMainView();

}

function drawMainView(){
return /*html*/`
    <div id="cleanHUD">Clean:${cleanLevel}
    <button onclick="cleanUp(25)">Clean</button> 
    <progress id="cleanBar" value="${cleanLevel}" max="${maxClean}"></progress>
    </div>

    <div id="hungerHUD">Hunger:${hunger}
    <button onclick="feed(25)">Feed</button> 
    <progress id="hungerBar" value="${hunger}" max="${maxHunger}"></progress>
    </div>

    <div id="boredomHUD">Boredom:${boredom}
    <button onclick="play(25)">Play</button> 
    <progress id="boredomBar" value="${boredom}" max="${maxBoredom}"></progress>
    </div>

    <div id="healthHUD">HP:${health}
    <button onclick="()">???</button> 
    <progress id="healthBar" value="${health}" max="${maxHealth}"></progress>
    </div>

    <div id="HUD">
    <button onclick="()">???</button> 
    <progress id="" value="" max=""></progress>
    </div>

    


    `;
}