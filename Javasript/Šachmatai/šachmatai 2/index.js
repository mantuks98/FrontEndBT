let dragged;
let oldx;
let oldy;
let newx;
let newy;
let column;

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
    if(dragged.className === "white-Tower" || dragged.className === "black-Tower"){
        if (newx===oldx && newy!==oldy || newx!==oldx && newy===oldy) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }
    if(dragged.className === "white-Horse" || dragged.className === "black-Horse"){
        if (newx===oldx-1 && newy===oldy-2 || newx===oldx+2 && newy===oldy-1 ||
            newx===oldx+1 && newy===oldy-2 || newx===oldx-2 && newy===oldy-1 ||
            newx===oldx-2 && newy===oldy+1 || newx===oldx-1 && newy===oldy+2 ||
            newx===oldx+1 && newy===oldy+2 || newx===oldx+2 && newy===oldy+1) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }
    if(dragged.className === "white-King" || dragged.className === "black-King"){
        if (newx===oldx-1 && newy===oldy || newx===oldx-1 && newy===oldy-1 ||
            newx===oldx && newy===oldy-1 || newx===oldx+1 && newy===oldy-1 ||
            newx===oldx+1 && newy===oldy || newx===oldx+1 && newy===oldy+1 ||
            newx===oldx && newy===oldy+1 || newx===oldx-1 && newy===oldy+1) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }
    if(dragged.className === "white-Bishop" || dragged.className === "black-Bishop"){
        let moves=[];
        bishop(moves);
        moves.forEach(function (xd){
            if(newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx+xd ||
               newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx-xd ||
               newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx-xd ||
               newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx+xd){
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
        });


    }
}, false);



function bishop(moves){
    let x;
    for(let i=1; i<9 ; i++){
        x=i;
        moves.push(x);
    }
    return moves;
}

