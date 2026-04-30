updateView();
function updateView(){
    console.log(model)
    let html = model.app.currentPage
    if (html == "home")
        model.app.app.innerHTML = /*HTML*/ `
    <button>Under 18</button> 
    <button>over 18</button>
    <button onclick=register()>Register</button>
    <input type="text" placeholder="Navn" oninput=setName()>
    <input type="number" placeholder="Alder" oninput=setAge()>
    
    `
}