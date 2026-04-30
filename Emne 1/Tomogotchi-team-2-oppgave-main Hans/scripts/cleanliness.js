
setInterval(reduceCleanliness,  500);
function reduceCleanliness(){
    cleanLevel -= 5;
    cleanLevel = Math.max(cleanLevel, minClean);
    console.log(cleanLevel);
    updateMainView();

    
}

function cleanUp(newCleanLevel){
    cleanLevel = Math.min(cleanLevel + newCleanLevel, maxClean);
    updateMainView();  
}




/*function addPoop(){
    if (cleanLevel <= 75){
        var poop = document.createElement("poop");
        poop.setAttribute("src", "poop.png")
        poop.setAttribute("height", "25");
        poop.setAttribute("width", "25");
        cleanliness.append(poop);
    }
}*/


