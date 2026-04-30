
setInterval(reduceBoredom, 700)
function reduceBoredom(){
    boredom-= 5;
    boredom = Math.max(boredom, minBoredom);
    console.log(boredom);
    updateMainView();
}

function play(newBoredom){
    boredom = Math.min(boredom + newBoredom, maxBoredom);
    updateMainView();
}


