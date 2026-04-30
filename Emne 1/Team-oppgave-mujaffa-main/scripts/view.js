initialView();

function initialView(){
main.innerHTML =  /*HTML*/`
<div id="car"></div>
<div class="gameView">
<button class="startButton" onclick="startGame()">Start Game</button>
</div>
`

}

function gameView(){
    main.innerHTML =  /*HTML*/`

    <div class="gameView">
    <div id="eventView">
    <div id="car"></div>
    <div id="event"></div>
    </div>
    <div class="replyButton"></div>
    </div>
`
}

function winGame(){
    main.innerHTML =  /*HTML*/`
    
    Du har feteste volvoen i hele Nøtterøy!
    <img id="HansVolvo" class="car-layer" src = "./designs/HansVolvo.png">
        <img id="volvo" class="car-layer" src="./designs/OGVolvo.png">
        <img id="red" class="car-layer">
        <img id="dekk" class="car-layer">
        <img id="felger" class="car-layer">
        <img id="wonderbaum" class="car-layer">
        <img id="blackWindow" class="car-layer">
    `
    
}


function showEvent(index){
    
    const eventDiv = document.getElementById("event");
    const eventText = document.createElement("p");
    const eventButton = document.createElement("button")
    eventButton.setAttribute("onclick", "startGame()")
    //eventButton.innerHTML = `${}`
    eventText.innerHTML = `${index}`;
    eventDiv.appendChild(eventText);
    return ;

}

function buttonPrint(){
    console.log("Button Test")
    const  buttonDiv = document.getElementsByClassName("replyButton")[0];
    replies.forEach((replies,) => {
        const replyButton = document.createElement("button")
        replyButton.setAttribute("onclick", "isCoolnessOver66(this.innerHTML)", "onclick", "removeButton()")
        replyButton.innerHTML = replies;
        buttonDiv.appendChild(replyButton);
    }
    
    ) }

    function removeButton(){
        const  buttonDiv = document.getElementsByClassName("replyButton")[0];
        const eventDiv = document.getElementById("event");
        buttonDiv.innerHTML = null;
        eventDiv.innerHTML = null;

    }