const dame = {
    voiceLine: ["Du lukter som en ødelagt BMW, Jeg elsker deg", "Hans sin Volvo er min favoritt!", "Æsj, kom deg vekk, stygge potet"],
    additionalVL: ["Hva faen pell deg vekk", "Jeg kontakter Rebecka", "Ser jeg deg igjen så skal jeg torturere deg med Geir sin Chorei time", "Mujaffa er kjekkere", "Du er en ekkel jævel, spis Ostekake i Brunsaus", "Slett system32"]
}

function hasGummi() {
    if (gummi >= 2 ) {
        console.log(dame.voiceLine[1])
        setTimeout(removeButton(), 1);
        setTimeout(eventPicker(), 10);
    } else if (gummi >= 1) {
        showEvent(dame.voiceLine[0])
        setTimeout(removeButton(), 1);
        setTimeout(eventPicker(), 10);
    } else if (gummi < 1 && usedGummi === true){
        noGummi()
        
    } else {
       showEvent(dame.voiceLine[2])
       setTimeout(removeButton(), 1);
       setTimeout(eventPicker(), 10);
    }
}

function noGummi() {
    const ekstraVL = dame.additionalVL[Math.floor(Math.random() * dame.additionalVL.length)]
    showEvent(ekstraVL)
    setTimeout(removeButton(), 1);
    setTimeout(eventPicker(), 10);
}

