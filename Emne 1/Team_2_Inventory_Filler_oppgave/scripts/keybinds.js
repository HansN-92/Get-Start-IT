/* 
ondrop="dropHandler(event)"   ondragover="dragoverHandler(event)" <- skrives inn i target div
draggable="true" ondragstart="dragstartHandler(event)" <- draggable element

draggable="true"
*/

function dragstartHandler(ev){
    ev.dataTransfer.setData("text", ev.target.id)
}
function dragoverHandler(ev){
    ev.preventDefault();
}
function dropHandler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))
}