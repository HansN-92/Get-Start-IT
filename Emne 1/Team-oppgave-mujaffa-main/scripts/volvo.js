

function render() {
    car.innerHTML = /*HTML*/ `
        <img id="HansVolvo" class="car-layer" src = "./designs/HansVolvo.png">
        <img id="volvo" class="car-layer" src="./designs/OGVolvo.png">
        <img id="red" class="car-layer">
        <img id="dekk" class="car-layer">
        <img id="felger" class="car-layer">
        <img id="wonderbaum" class="car-layer">
        <img id="blackWindow" class="car-layer">
    `
}

function upgradeLayers() {

    const dekk = document.getElementById("dekk")
    if (VolvoCar.tire === "sport") {
        dekk.src = "./designs/DekkVolvo.png"
    } else {
        dekk.src = ""
    }

    const vindu = document.getElementById("blackWindow")
    if (VolvoCar.window === "dark") {
        vindu.src = "./designs/blackWindowVolvo.png"
    } else {
        vindu.src = ""
    }

    const wonderbaum = document.getElementById("wonderbaum")
    if (VolvoCar.wonderbaum === "true") {
        wonderbaum.src = "./designs/WonderbaumVolvo.png"
    } else {
        wonderbaum.src = ""
    }

    const rims = document.getElementById("felger")
    if (VolvoCar.rims === "fancy") {
        rims.src = "./designs/FelgerVolvo.png"
    } else {
        rims.src = ""
    }

    const redPaint = document.getElementById("red")
    if (VolvoCar.paint === "red") {
        redPaint.src = "./designs/RedVolvo.png"
    } else {
        redPaint.src = ""
    }

    // const hansVolvo = document.getElementById("HansVolvo")
    // if (VolvoCar.hans === "true") {
    //     hansVolvo.src = "./designs/HansVolvo.png"
    // } else {
    //     hansVolvo.src = ""
    // } 
    console.log("testslutt");
    eventPicker();
}

//function volvoUpgrades() {
//
//    VolvoCar.tire = "" //stock / sport
//    VolvoCar.rims = "" //stock / fancy
//    VolvoCar.window = "" //stock / dark
//    VolvoCar.wonderbaum = "" //false / true
//    VolvoCar.paint = "" //blue / red
//    VolvoCar.hans = "true" //true / false
//    render()
//}

