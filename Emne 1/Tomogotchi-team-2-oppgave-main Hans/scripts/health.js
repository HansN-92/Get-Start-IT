setInterval(reduceHealth, 1000)

function reduceHealth(){
  if (hunger <= 0 || cleanLevel <= 0 || boredom <= 0) {
    health -= 10;
  }
  if (health < 0) {
    health = 0;
  }
  
}

/* setInterval(increaseHealth, 1000)
function increaseHealth(){
  if(hunger >= 50 && cleanLevel >= 50 && boredom >= 50) {
    health += 10;
    health = Math.min(health, maxHealth);
  }
} */

/*function updateImg() {
  updateImg();
    if (health <= 0) {
        tamagotchiImg.src = "../images/dead/lavachicken.jpg"
    }
    else if (health < 50) {
      tamagotchiImg.src = "../images/evolve/animal.png"  
    }
    else {
        tamagotchiImg.src = "../images/evolve/diamond.png"
    }
} */