let clickCount = 0;
let totalNumber = 0;
const page = document.getElementById("app")
updateView();
function updateView(){


page.innerHTML = /* HTML */ `
<button onclick="addToNumber(2)">2</button>
<button onclick="addToNumber(3)">3</button>
<button onclick="addToNumber(9)">9</button>
<p>${totalNumber}</p>
<p>${clickCount}</p>
${checkNumber()}

`

}



function addToNumber(newNumber){

totalNumber += newNumber
clickCount += 1;
updateView();

}

function checkNumber(){
    if(totalNumber > 55){
        return /* HTML */ `
        <p>Game Over</p>
        `
    }

    else if(totalNumber == 55){
        return /* HTML */ `
        <p>Winner</p>
        `
    }
    else {
        return ""
    }
    
}