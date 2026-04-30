const main = document.getElementById("main")



const eventName = ["dame", "kompis","carUpgrades" ]

let coolness = 0;
let maxCoolness = 125;

let gummi = 2
let usedGummi = true

// let coolCarScore = 0;

const carUpgrades = ["wonderbaum", "basskasse", "lakkering", "fete Felger", "sota ruter", "nye dekk"]
let selectedUpgrade = "";

const pickUps = ["carUpgrades", "gummi"]

const replies = ["Fetere enn drittkjerra di!","Triller nesten like fort som morra di!","Mista skammen min i morra di igår kveld!"]


let VolvoCar = {
    rims: "stock",
    tire: "stock",
    window: "stock",
    wonderbaum: "none",
    paint: "blue",
    hans: "true"
}