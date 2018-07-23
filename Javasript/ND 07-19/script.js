
let auto = [
     ['2017-07-06 19:59:45','ABC123',5000,200],
     ['2017-07-06 19:59:45','ABC456',1564,50],
     ['2017-07-06 19:59:45','ABC789',8432,123],
     null,
     ['2017-07-06 19:59:45','ABC159',4568,589],
     ['2017-07-06 19:59:45','ABC753',9852,150],
     ['2017-07-06 19:59:45','ABC147',1234,120],
     undefined,
     ['2017-07-06 19:59:45','ABC258',7894,130],
     ['2017-07-06 19:59:45','ABC369',3578,140],
     ['2017-07-06 19:59:45','ABC854',1598,150]
 ];

let a;
let l=1;
 auto.forEach(function(lol) {
     if(typeof lol !== "undefined" && lol !==null){
             let table = document.getElementById("duomenys");
             let row = table.insertRow();
             let Nr = row.insertCell();
             let Date = row.insertCell();
             let Number = row.insertCell();
             let Distance = row.insertCell();
             let Time = row.insertCell();
             let Speed = row.insertCell();
             let NDelete = row.insertCell();
             Nr.innerHTML = l;
             Date.innerHTML = lol[0];
             Number.innerHTML = lol[1];
             Distance.innerHTML = (lol[2] / 1000).toFixed(2);
             Time.innerHTML = (lol[3] / 3600).toFixed(2);
             Speed.innerHTML = (lol[2] / lol[3] * 3.6).toFixed(0);
             let button = document.createElement('input');
             button.setAttribute('type', 'button');
             button.setAttribute('value','Delete');
             button.setAttribute('onclick', 'removeRow(this)');
             NDelete.appendChild(button);
             row.appendChild(NDelete);
             table.appendChild(row);
             l++;
     }
 });
 let o=l-1;
function addTable() {
    let h = 0;
    let date = document.getElementById("Date").value;
    if (date === "") {
        h++;
    }
    date = date.replace("T", " / ");
    let number = document.getElementById("Number").value;
    if (number === "") {
        h++;
    }
    let distance = document.getElementById("Distance").value;
    if (distance === "") {
        h++;
    }
    let time = document.getElementById("Time").value;
    if (time === "") {
        h++;
    }
    if (h > 0) {
        window.alert("Patikrinkite ar užpildėt visus laukelius!");
        return false;
    }
    let newauto=[];
    newauto.push(date);
    newauto.push(number);
    newauto.push(distance);
    newauto.push(time);
    auto.push(newauto);
        let table = document.getElementById("newTable");
        let row = table.insertRow();
        o++;
        let nr = row.insertCell();
        let newDate = row.insertCell();
        let newNumber = row.insertCell();
        let newDistance = row.insertCell();
        let newTime = row.insertCell();
        let newSpeed = row.insertCell();
        let newDelete = row.insertCell();
        nr.innerHTML = o;
        newDate.innerHTML = date;
        newNumber.innerHTML = number;
        newDistance.innerHTML = (distance / 1000).toFixed(2);
        newTime.innerHTML = (time / 3600).toFixed(2);
        newSpeed.innerHTML = (distance / time * 3.6).toFixed(0);
        let button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value','Delete');
        button.setAttribute('onclick', 'removeRow1(this)');
        newDelete.appendChild(button);
        row.appendChild(newDelete);
        table.appendChild(row);
        l++;
}

function clearInput(){
    document.getElementById("Form").reset();
}

function removeRow(oButton){
    let table = document.getElementById("duomenys");
    table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
function removeRow1(oButton){
    let table = document.getElementById("newTable");
    table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
