let dragged;
let draggedParent;
let oldx;
let oldy;
let newx;
let newy;
let over;
let row;
let dist;
let g;
let start;
let overParent;
let place;
let table = document.getElementById('Table');

document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    draggedParent = dragged.parentNode;
    oldy=event.target.parentNode.parentNode.rowIndex;
    oldx=event.target.parentNode.cellIndex;
    if(dragged.className==="white-Pawn" || dragged.className==="white-Tower" || dragged.className==="white-Horse" ||
       dragged.className==="white-Bishop" || dragged.className==="white-King" || dragged.className==="white-Queen"){
         start="white";
    }
    if(dragged.className==="black-Pawn" || dragged.className==="black-Tower" || dragged.className==="black-Horse" ||
       dragged.className==="black-Bishop" || dragged.className==="black-King" || dragged.className==="black-Queen"){
         start="black";
    }
}, false);

document.addEventListener("dragover", function( event ) {
        event.preventDefault();
        newy = event.target.parentNode.rowIndex;
        newx = event.target.cellIndex;
        row = event.target.parentNode.rowIndex;
        over = event.target;
        if(over.className==="white-Pawn" || over.className==="white-Tower" || over.className==="white-Horse" ||
           over.className==="white-Bishop" || over.className==="white-King" || over.className==="white-Queen"){
                 place="white";
                 overParent=over.parentNode;
        }
        else if(over.className==="black-Pawn" || over.className==="black-Tower" || over.className==="black-Horse" ||
           over.className==="black-Bishop" || over.className==="black-King" || over.className==="black-Queen"){
                 place="black";
                 overParent=over.parentNode;
        }
        else{
                 place="empty";
                 overParent=over;
        }
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if(dragged.className === "white-Pawn") {
        if (newx===oldx && newy===oldy-1 && over.innerHTML==="") {
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "black-Pawn"){
        if (newx===oldx && newy===oldy+1 && over.innerHTML==="") {
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-Tower" || dragged.className === "black-Tower"){
        if (newx!==oldx && newy===oldy) {
                if(newx<oldx){
                    dist = oldx-newx;
                    for(let i=1; i<=dist; i++){
                       if(table.rows[oldy].cells[oldx-i].innerHTML===''){
                           g=i;
                       }
                       else{
                           if(table.rows[oldy].cells[oldx-dist].innerHTML!==''){
                               g=i;
                           }
                           else {
                               break;
                           }
                           }
                       }
                    }
                }
                if(newx>oldx){
                    dist = newx-oldx;
                    for(let i=1; i<=dist; i++){
                        if(table.rows[oldy].cells[oldx+i].innerHTML===''){
                            g=i;
                        }
                        else{
                            if(table.rows[oldy].cells[oldx+dist].innerHTML!==''){
                                g=i;
                            }
                            else{
                                break;
                            }
                        }
                    }
                    if(g===dist){
                        event.target.innerHTML='';
                        event.target.appendChild(dragged);
                        draggedParent.innerHTML='';
                    }
                }
        }
        if(newx===oldx && newy!==oldy){
            if(newy<oldy){
                dist = oldy-newy;
                for(let i=1; i<=dist; i++){
                    if(table.rows[oldy-i].cells[oldx].innerHTML===''){
                        g=i;
                    }
                    else{
                        if(table.rows[oldy-dist].cells[oldx].innerHTML!==''){
                            g=i;
                        }
                        else{
                            break;
                        }
                    }
                }
            }
            if(newy>oldy){
                dist = newy-oldy;
                for(let i=1; i<=dist; i++){
                    if(table.rows[oldy+i].cells[oldx].innerHTML===''){
                        g=i;
                    }
                    else
                        if(table.rows[oldy].cells[oldx+dist].innerHTML!==''){
                        g=i;
                    }
                        else{
                            break;
                        }

                }
                if(g===dist){
                    over.innerHTML='';
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML='';
                }
            }
        }

    if(dragged.className === "white-Horse" || dragged.className === "black-Horse"){
        if (newx===oldx-1 && newy===oldy-2 && over.innerHTML==="" || newx===oldx+2 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy-2 && over.innerHTML==="" || newx===oldx-2 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx-2 && newy===oldy+1 && over.innerHTML==="" || newx===oldx-1 && newy===oldy+2 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy+2 && over.innerHTML==="" || newx===oldx+2 && newy===oldy+1 && over.innerHTML==="") {
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-King" || dragged.className === "black-King"){
        if (newx===oldx-1 && newy===oldy && over.innerHTML==="" || newx===oldx-1 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx && newy===oldy-1 && over.innerHTML==="" || newx===oldx+1 && newy===oldy-1 && over.innerHTML==="" ||
            newx===oldx+1 && newy===oldy && over.innerHTML==="" || newx===oldx+1 && newy===oldy+1 && over.innerHTML==="" ||
            newx===oldx && newy===oldy+1 && over.innerHTML==="" || newx===oldx-1 && newy===oldy+1 && over.innerHTML==="") {
            event.target.appendChild(dragged);
            draggedParent.innerHTML='';
        }
    }
    if(dragged.className === "white-Bishop" || dragged.className === "black-Bishop"){
        let moves=[];
        movement(moves);
        let g;
        moves.forEach(function (xd) {
            if (newx !== oldx && newy !== oldy && newy === oldy + xd && newx === oldx + xd && over.innerHTML === "") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy + i].cells[oldx + i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
            }
            if (newx !== oldx && newy !== oldy && newy === oldy - xd && newx === oldx - xd && over.innerHTML === "") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy - i].cells[oldx - i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
            }
              if(newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx+xd && over.innerHTML==="") {
                  dist = xd;
                  for (let i = 1; i < xd + 1; i++) {
                      if (table.rows[oldy-i].cells[oldx+i].innerHTML === '') {
                          g = i;
                      }
                      else {
                          break;
                      }
                  }
                  if (g === dist) {
                      event.target.appendChild(dragged);
                      draggedParent.innerHTML = '';
                  }
              }
              if(newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx-xd && over.innerHTML==="") {
                  dist = xd;
                  for (let i = 1; i < xd + 1; i++) {
                      if (table.rows[oldy+i].cells[oldx-i].innerHTML === '') {
                          g = i;
                      }
                      else {
                          break;
                      }
                  }
                  if (g === dist) {
                      event.target.appendChild(dragged);
                      draggedParent.innerHTML = '';
                  }
            }
        });
}
    if(dragged.className=== "white-Queen" || dragged.className === "black-Queen"){
        let moves=[];
        movement(moves);
        moves.forEach(function (xd){
           if(newx!==oldx && newy===oldy && over.innerHTML===""){
               let g;
               if(newx<oldx){
                   dist = oldx-newx;
                   for(let i=1; i<dist+1; i++){
                       if(table.rows[oldy].cells[oldx-i].innerHTML===''){
                           g=i;
                       }
                       else{
                           break;
                       }
                   }
                   if(g===dist){
                       event.target.appendChild(dragged);
                       draggedParent.innerHTML='';
                   }

               }
               if(newx>oldx){
                   dist = newx-oldx;
                   for(let i=1; i<dist+1; i++){
                       if(table.rows[oldy].cells[oldx+i].innerHTML===''){
                           g=i;
                       }
                       else{
                           break;
                       }
                   }
                   if(g===dist){
                       event.target.appendChild(dragged);
                       draggedParent.innerHTML='';
                   }
               }
           }

           if(newx===oldx && newy!==oldy && over.innerHTML===""){
               let g;
               if(newy<oldy){
                   dist = oldy-newy;
                   for(let i=1; i<dist+1; i++){
                       if(table.rows[oldy-i].cells[oldx].innerHTML===''){
                           g=i;
                       }
                       else{
                           break;
                       }
                   }
                   if(g===dist){
                       event.target.appendChild(dragged);
                       draggedParent.innerHTML='';
                   }
               }
               if(newy>oldy){
                   dist = newy-oldy;
                   for(let i=1; i<dist+1; i++){
                       if(table.rows[oldy+i].cells[oldx].innerHTML===''){
                           g=i;
                       }
                       else{
                           break;
                       }
                   }
                   if(g===dist){
                       event.target.appendChild(dragged);
                       draggedParent.innerHTML='';
                   }
               }
           }
            if (newx !== oldx && newy !== oldy && newy === oldy + xd && newx === oldx + xd && over.innerHTML === "") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy + i].cells[oldx + i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
            }
            if (newx !== oldx && newy !== oldy && newy === oldy - xd && newx === oldx - xd && over.innerHTML === "") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy - i].cells[oldx - i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
            }
            if(newx!==oldx && newy!==oldy && newy===oldy-xd && newx===oldx+xd && over.innerHTML==="") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy-i].cells[oldx+i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
            }
            if(newx!==oldx && newy!==oldy && newy===oldy+xd && newx===oldx-xd && over.innerHTML==="") {
                dist = xd;
                for (let i = 1; i < xd + 1; i++) {
                    if (table.rows[oldy+i].cells[oldx-i].innerHTML === '') {
                        g = i;
                    }
                    else {
                        break;
                    }
                }
                if (g === dist) {
                    event.target.appendChild(dragged);
                    draggedParent.innerHTML = '';
                }
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

