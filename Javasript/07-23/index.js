let newauto=[];

function addTable() {
    let date = document.getElementById("Date").value;
    date = date.replace("T", " / ");
    let number = document.getElementById("Number").value;
    let distance = document.getElementById("Distance").value;
    let time = document.getElementById("Time").value;
     a ={
         data1: date,
         numeris1: number,
         atstumas1:distance,
         laikas1:time
     };
    newauto.push(a);
    let elm=document.getElementById("newTable");
    elm.innerHTML="";
    newauto.forEach(function(obj){
    let table = document.getElementById("newTable");
    let row = table.insertRow();
    let nr = row.insertCell();
    let newDate = row.insertCell();
    let newNumber = row.insertCell();
    let newDistance = row.insertCell();
    let newTime = row.insertCell();
    let newSpeed = row.insertCell();
    let newDelete = row.insertCell();
    newDate.innerHTML = obj['data1'];
    newNumber.innerHTML = obj.numeris1;
    newDistance.innerHTML = (obj['atstumas1'] / 1000).toFixed(2);
    newTime.innerHTML = (obj['laikas1'] / 3600).toFixed(2);
    newSpeed.innerHTML = (obj['atstumas1'] / obj['laikas1'] * 3.6).toFixed(0);
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value','Delete');
    button.setAttribute('onclick', 'removeRow(this)');
    newDelete.appendChild(button);
    row.appendChild(newDelete);
    table.appendChild(row);
});
}

function clearInput(){
    document.getElementById("Form").reset();
}

function removeRow(oButton){
    let table = document.getElementById("newTable");
    table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}