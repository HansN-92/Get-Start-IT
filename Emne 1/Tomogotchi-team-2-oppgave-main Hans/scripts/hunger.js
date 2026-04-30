
setInterval(reduceHunger, 1000);
function reduceHunger(){
    hunger -= 5;
    hunger = Math.max(hunger, minHunger);
    console.log(hunger);
    updateMainView();
}

function feed(newHunger){
    hunger = Math.min(hunger + newHunger, maxHunger);
    updateMainView(); 
}


