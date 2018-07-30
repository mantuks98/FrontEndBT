let auto=[];
let tbody = document.getElementById("Tbody");

function New(){
    let number = document.getElementById("Number").value;
    let distance = document.getElementById("Distance").value/1000;
    let time = document.getElementById("Time").value/3600;
    let speed = distance / time;
    let row = tbody.insertRow();
    row.insertCell().innerHTML=date();
    row.insertCell().innerHTML=number;
    row.insertCell().innerHTML=distance.toFixed(2);
    row.insertCell().innerHTML=time.toFixed(2);
    row.insertCell().innerHTML=distance/time;
    row.insertCell().appendChild(createDeleteBtn());
    row.insertCell().appendChild(createFixBtn());

}

function date(){
    let date= new Date();
    let y = date.getFullYear();
    let m = (date.getMonth()+1);
    let day = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    return y+"-0"+m+"-"+day+" "+h+":"+min+":"+s;
}

function createDeleteBtn(){
    let btn=document.createElement('button');
    btn.setAttribute('data-toggle', 'modal');
    btn.setAttribute('data-target', '#ConfirmModal');
    btn.style.width="70px";
    btn.style.height="25px";
    btn.innerText='Naikinti';
    btn.style.textAlign='center';
    return btn;
}

function DeleteRow(){
    tbody.deleteRow(this);
}

function createFixBtn(){
    let btn1=document.createElement('button');
    btn1.setAttribute('data-toggle', 'modal');
    btn1.setAttribute('data-target', '#FixModal');
    let numberInput = document.getElementById("NumberFix");
    let distanceInput = document.getElementById("DistanceFix");
    let timeInput = document.getElementById("TimeFix");
    numberInput.value=document.getElementById("Number").value;
    distanceInput.value=document.getElementById("Distance").value;
    timeInput.value=document.getElementById("Time").value;
    btn1.style.width="70px";
    btn1.style.height="25px";
    btn1.innerText='Taisyti';
    btn1.style.textAlign='center';
    return btn1;
}

function FixSave(){
    let numberInput = document.getElementById("NumberFix").value;
    let distanceInput = document.getElementById("DistanceFix").value;
    let timeInput = document.getElementById("TimeFix").value;
    tbody.rows[this].cells[1].innerHTML=numberInput;
    /*tbody.rows[btn.rowIndex].cells[2].innerHTML=distanceInput;
    tbody.rows[btn.rowIndex].cells[3].innerHTML=timeInput;
*/
}