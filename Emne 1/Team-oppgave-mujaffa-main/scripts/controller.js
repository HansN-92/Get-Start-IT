function startGame(){
    gameView();
    render();
    setTimeout(eventPicker, 1);
}
function eventPicker(){
    randomEvent = eventName[Math.random()* eventName.length |0 ];
    if (coolness >=125){
        winGame();
    }
    else {
      eventHandler(randomEvent);
    }
}


function eventHandler(val){
    if (val == "dame"){

        hasGummi();
    }
    else if(val == "kompis"){

        isCool();
    }
    else if(val == "carUpgrades"){
        randomSelector();
    }
    else{

    }
}

