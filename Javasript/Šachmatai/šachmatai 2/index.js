let dragged;
let oldx;
let oldy;
let newx;
let newy;

document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    oldy=event.target.parentNode.parentNode.rowIndex+1;
    oldx=event.target.parentNode.cellIndex+1;
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
    newy=event.target.parentNode.rowIndex+1;
    newx=event.target.cellIndex+1;
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if(dragged.className === "white-Pawn") {
        if (newx===oldx && newy===oldy-1) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }
    if(dragged.className === "black-Pawn"){
        if (newx===oldx && newy===oldy+1) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }

}, false);