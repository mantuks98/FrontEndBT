/*let a={
    x1y1:'\u265C', x2y1:'\u265E', x3y1:'\u265D', x4y1:'\u265B', x5y1:'\u265A', x6y1:'\u265D', x7y1:'\u265E', x8y1:'\u265C',
    x1y2:'\u265F', x2y2:'\u265F', x3y2:'\u265F', x4y2:'\u265F', x5y2:'\u265F', x6y2:'\u265F', x7y2:'\u265F', x8y2:'\u265F',
    x1y3:'', x2y3:'', x3y3:'', x4y3:'', x5y3:'', x6y3:'', x7y3:'', x8y3:'',
    x1y4:'', x2y4:'', x3y4:'', x4y4:'', x5y4:'', x6y4:'', x7y4:'', x8y4:'',
    x1y5:'', x2y5:'', x3y5:'', x4y5:'', x5y5:'', x6y5:'', x7y5:'', x8y5:'',
    x1y6:'', x2y6:'', x3y6:'', x4y6:'', x5y6:'', x6y6:'', x7y6:'', x8y6:'',
    x1y7:'\u2659', x2y7:'\u2659', x3y7:'\u2659', x4y7:'\u2659', x5y7:'\u2659', x6y7:'\u2659', x7y7:'\u2659', x8y7:'\u2659',
    x1y8:'\u2656', x2y8:'\u2658', x3y8:'\u2657', x4y8:'\u2655', x5y8:'\u2654', x6y8:'\u2657', x7y8:'\u2658', x8y8:'\u2656'
};*/

let a={
    11:'\u265C', 12:'\u265E', 13:'\u265D', 14:'\u265B', 15:'\u265A', 16:'\u265D', 17:'\u265E', 18:'\u265C',
    21:'\u265F', 22:'\u265F', 23:'\u265F', 24:'\u265F', 25:'\u265F', 26:'\u265F', 27:'\u265F', 28:'\u265F',
    31:'', 32:'', 33:'', 34:'', 35:'', 36:'', 37:'', 38:'',
    41:'', 42:'', 43:'', 44:'', 45:'', 46:'', 47:'', 48:'',
    51:'', 52:'', 53:'', 54:'', 55:'', 56:'', 57:'', 58:'',
    61:'', 62:'', 63:'', 64:'', 65:'', 66:'', 67:'', 68:'',
    71:'\u2659', 72:'\u2659', 73:'\u2659', 74:'\u2659', 75:'\u2659', 76:'\u2659', 77:'\u2659', 78:'\u2659',
    81:'\u2656', 82:'\u2658', 83:'\u2657', 84:'\u2655', 85:'\u2654', 86:'\u2657', 87:'\u2658', 88:'\u2656'
};


let table = document.getElementById("Table");
table.innerHTML="";
let div = document.createElement('input');
div.setAttribute('type', 'button');
div.setAttribute('draggable', 'true');
for(let y=1; y<9; y++){
    let row=table.insertRow();
    for(let x=1; x<9; x++){
        let cell = row.insertCell();
        if(y%2===0){
            if (x%2!==0){
                cell.style.backgroundColor= 'silver';
            }
        }
        else{
            if(x%2===0){
                cell.style.backgroundColor='silver';
            }
        }
        if(y===1){
            if(x===1){
                cell.innerHTML=a[11];
            }
            if(x===2){
                cell.innerText=a[12];
            }
            if(x===3){
                cell.innerText=a[13];
            }
            if(x===4){
                cell.innerText=a[14];
            }
            if(x===5){
                cell.innerText=a[15];
            }
            if(x===6){
                cell.innerText=a[16];
            }
            if(x===7){
                cell.innerText=a[17];
            }
            if(x===8){
                cell.innerText=a[18];
            }

        }
        if(y===2){
            if(x===1){cell.innerText=a[21];}

            if(x===2){cell.innerText=a[22]}

            if(x===3){cell.innerText=a[23];}

            if(x===4){cell.innerText=a[24];}

            if(x===5){cell.innerText=a[25];}

            if(x===6){cell.innerText=a[26];}

            if(x===7){cell.innerText=a[27];}

            if(x===8){cell.innerText=a[28];}

        }
        if(y===7){
            if(x===1){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[71]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===2){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[72]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===3){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[73]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===4){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[74]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===5){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[75]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===6){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[76]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===7){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[77]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }

            if(x===8){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[78]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
        }
        if(y===8){
            if(x===1){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[81]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===2){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[82]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===3){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[83]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===4){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[84]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===5){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[85]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===6){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[86]);
                div.setAttribute('draggable', 'true');
                cell.appendChild(div);
            }
            if(x===7){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[87]);
                div.setAttribute('draggable', 'true');
                div.setAttribute('drag', 'dragStart()');
                div.setAttribute('drop', 'drop()');
                div.setAttribute('dragover' , 'allowDrop()');
                cell.appendChild(div);
            }
            if(x===8){
                let div = document.createElement('input');
                div.setAttribute('type', 'button');
                div.setAttribute('value', a[88]);
                div.setAttribute('draggable', 'true');
                div.setAttribute('drag', 'dragStart()');
                div.setAttribute('drop', 'drop()');
                div.setAttribute('dragover', 'allowDrop()');
                cell.appendChild(div);
            }

        }

    }
}



function dragStart(e){
    e.dataTransfer.setData("button", e.target.id)
}
function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("button");
    e.target.appendChild(document.getElementById(data));
}
function allowDrop(){
    event.preventDefault();
}
