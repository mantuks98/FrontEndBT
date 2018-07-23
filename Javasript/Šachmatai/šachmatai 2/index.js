let dragged;

document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if(dragged.className === "white-Pawn"){
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
    if(dragged.className === "black-Pawn"){
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }

}, false);


        //skirstyt kiek gali eit su cell indexu -->