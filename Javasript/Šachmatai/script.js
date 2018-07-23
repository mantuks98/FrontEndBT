





//let table=document.getElementById("Table");



function dragStart(event){
    event.dataTransfer.setData("text", event.target.id)
}

function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(){
    event.preventDefault();
}



/*function dragEnd(event){

}*/