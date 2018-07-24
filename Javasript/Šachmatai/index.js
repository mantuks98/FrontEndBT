let dragged;
let draggedParent;
let oldx;
let oldy;
let newx;
let newy;
let over;
document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    draggedParent = dragged.parentNode;
    oldy=event.target.parentNode.parentNode.rowIndex+1;
    oldx=event.target.parentNode.cellIndex+1;
}, false);

document.addEventListener("dragover", function( event ) {
        event.preventDefault();
        newy = event.target.parentNode.rowIndex + 1;
        newx = event.target.cellIndex + 1;
        over = event.target;
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if(dragged.className === "white-Pawn") {
        if (newx===oldx && newy===oldy-1 && over.innerHTML==="") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "black-Pawn"){
        if (newx===oldx && newy===oldy+1 && over.innerHTML==="") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-Tower" || dragged.className === "black-Tower"){
        if (newx===oldx && newy!==oldy && over.innerHTML==="" || newx!==oldx && newy===oldy && over.innerHTML==="") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-Horse" || dragged.className === "black-Horse"){
        if (newx===oldx-1 && newy===oldy-2 && over.innerHTML==="" || newx===oldx+2 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy-2 && over.innerHTML==="" || newx===oldx-2 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx-2 && newy===oldy+1 && over.innerHTML==="" || newx===oldx-1 && newy===oldy+2 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy+2 && over.innerHTML==="" || newx===oldx+2 && newy===oldy+1 && over.innerHTML==="") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-King" || dragged.className === "black-King"){
        if (newx===oldx-1 && newy===oldy && over.innerHTML==="" || newx===oldx-1 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx && newy===oldy-1 && over.innerHTML==="" || newx===oldx+1 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy && over.innerHTML==="" || newx===oldx+1 && newy===oldy+1 && over.innerHTML==="" ||
            newx===oldx && newy===oldy+1 && over.innerHTML==="" || newx===oldx-1 && newy===oldy+1 && over.innerHTML==="") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-Bishop" || dragged.className === "black-Bishop"){
        let moves=[];
        movement(moves);
        moves.forEach(function (xd){
            if(newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx+xd && over.innerHTML==="" ||
               newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx-xd && over.innerHTML==="" ||
               newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx-xd && over.innerHTML==="" ||
               newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx+xd && over.innerHTML===""){
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                draggedParent.innerHTML='';
            }
        });
    }
    if(dragged.className=== "white-Queen" || dragged.className === "black-Queen"){
        let moves=[];
        movement(moves);
        moves.forEach(function (xd){
           if(newx===oldx && newy!==oldy && over.innerHTML==="" || newx!==oldx && newy===oldy && over.innerHTML==="" ||
              newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx+xd && over.innerHTML==="" ||
              newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx-xd && over.innerHTML==="" ||
              newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx-xd && over.innerHTML==="" ||
              newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx+xd && over.innerHTML===""){
               dragged.parentNode.removeChild(dragged);
               event.target.appendChild(dragged);
               draggedParent.innerHTML='';
           }
        });
    }
}, false);



function movement(moves){
    let x;
    for(let i=1; i<9 ; i++){
        x=i;
        moves.push(x);
    }
    return moves;
}

