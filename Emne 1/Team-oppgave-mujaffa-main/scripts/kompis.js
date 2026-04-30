const kompis = {
  voiceLines: {
    positive: "Halla, kompis! Fet Volvo!",
    neutral: "Helt grei bil, kompis. Den triller i hvert fall!",
    negative: "Eier du ikke skam? Få den skrotkjerra der av veien!",
    wrongGreeting: "Tror du virkelig jeg flytter meg for den hilsenen der? Se å få deg et kurs i folkeskikk, gutt."
  }
};


function isCool() {
    buttonPrint()
    if (coolness >= 80) {
        showEvent(kompis.voiceLines.positive);
    } else if (coolness >= 40 ) {
        showEvent(kompis.voiceLines.neutral);
    } else {
        showEvent(kompis.voiceLines.negative);
    }
    console.log(coolness)
}

function isCoolnessOver66(val) {
    
    if (val == "Fetere enn drittkjerra di!" && coolness >= 80){
        removeButton();
        eventPicker();
    } else if (val == "Triller nesten like fort som morra di!" && coolness >= 40 && coolness <= 79){
        removeButton();
        eventPicker();
       } else if(val == "Mista skammen min i morra di igår kveld!" && coolness <= 39){
        removeButton();
        eventPicker();
       }
     else {
        showEvent(kompis.voiceLines.wrongGreeting);
        console.log("Feil SVar")
    }


}


