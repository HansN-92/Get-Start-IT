function getAllMonsters() {
  return model.data.monster;
}
 
function getMonsterById(id) {
  return model.data.monster.find(m => m.id === id);
}

function changeMood(){
  model.data.monster.forEach(m => {
    if (m.mood === "happy") {
      m.mood = "angry";
    }
    else m.mood = "happy";
  });
  updateView();
}

function removeWeak(){
  const before = model.data.monster.length;  // mellom lagrer monster liste fra model
  model.data.monster = model.data.monster.filter(m => m.strength >= 5); // filtrerer etter str
  const removed = before - model.data.monster.length; // henter tilbake monster etter filtrering
  updateView();
}