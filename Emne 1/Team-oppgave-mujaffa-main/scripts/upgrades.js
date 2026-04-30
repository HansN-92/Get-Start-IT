
function randomSelector(){
    let randomPickUp = pickUps[Math.floor(Math.random() * pickUps.length |0)]
    selectedPickUp = randomPickUp;
    getRandomPickUp(selectedPickUp)
}
function getRandomPickUp(selectedPickUp){
    console.log(selectedPickUp)
    if (selectedPickUp == "carUpgrades"){
        console.log("Random Upgrade")
        getRandomUpgrade();
    }
    else if (selectedPickUp == "gummi"){
        console.log("Gummi")
        gummi += 1;
        eventPicker();
    }
    else {
        console.log("error")
    }
}

function getRandomUpgrade(){
    let randomUpgrade = carUpgrades[Math.floor(Math.random() * carUpgrades.length | 0)]
    selectedUpgrade = randomUpgrade;
    console.log(selectedUpgrade)
    upgradeCar(selectedUpgrade);
    usedUpgrade(selectedUpgrade)
}

function usedUpgrade(selectedUpgrade){
    spliceNumber = carUpgrades.indexOf(selectedUpgrade)
    console.log(spliceNumber)
    carUpgrades.splice(spliceNumber, 1)
    console.log(carUpgrades)
    
    
}

/*function wonderBaum(){
    VolvoCar.wonderbaum = "true"
    wonderbaum.src = "./designs/WonderbaumVolvo.png"
}*/

// let hasUpgrade = false;

function upgradeCar(selectedUpgrade){
    if(selectedUpgrade == "wonderbaum"){
       VolvoCar.wonderbaum = "true";
       
    }

    else if(selectedUpgrade == "basskasse"){
       
    }

    else if(selectedUpgrade == "lakkering"){
       VolvoCar.paint = "red";
    }

    else if(selectedUpgrade == "fete Felger"){
       VolvoCar.rims = "fancy";
    }

    else if(selectedUpgrade == "sota ruter"){
       VolvoCar.window = "dark";
    }

    else if(selectedUpgrade == "nye dekk"){
       VolvoCar.tire = "sport";
    }
console.log(selectedUpgrade, VolvoCar)
    coolness += 25;
    console.log("hvor kul erru", coolness)
    upgradeLayers();
}


// showEvent()