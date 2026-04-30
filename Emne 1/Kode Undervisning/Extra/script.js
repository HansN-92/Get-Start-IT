const page = document.getElementById("app");
let currentpage = "home";

updateView();
function updateView(){
    let html = "";
    
    if(currentpage == "home") html = showHome();
    else if(currentpage == "login") html = showLogin();
    
    page.innerHTML = html;
}

function showHome(){
    return /*HTML*/ `
    <h1>homepage</h1>
    <button onclick="changepage('login')">log out</button>
    <input type="number" onchange="saveNumber(this.value)">
    <p>${randomNumber()}</p>
    `;
}
function changepage(element){
    currentpage = element;
    updateView()
}

function showLogin(){
    return /*HTML*/`
    <button onclick="changepage('home')">log in</button>
    `;
}




let number = "";
function saveNumber(newNumber){
number = newNumber;
updateView();
}


function randomNumber(){
    if(number == 0) return '';
    else return Math.floor(Math.random() * number);
}