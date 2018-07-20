
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

a=0;
let l=1;
 auto.forEach(function(lol) {
     if(typeof lol !== "undefined" && lol !==null){
         c=lol;
         let row = '<tr>';
         row += '<td>' + l + '</td>';
         lol.forEach(function(item) {
             if(a===2){
                 row += '<td>' + (item/1000).toFixed(2) +'</td>';
             }
             else if (a===3){
                 row += '<td>' + (item/3600).toFixed(2) +'</td>';
             }
             else {
                 row += '<td>' + item + '</td>';
             }
             a++;
         });
         a=0;
         row += '<td>' + (c[2] / c[3] * 3.6).toFixed(0)+ '</td>';
         row += '<td>' + "<button>Delete</button>" + '</td>';
         row += '</tr>';
         l++;
         document.getElementById("duomenys").innerHTML += row;
     }
 });

function addTable(){
    let h=0;
    let date=document.getElementById("Date").value;
    if(date===""){
        h++;
    }
    date=date.replace("T", " / ");
    let number=document.getElementById("Number").value;
    if(number===""){
        h++;
    }
    let distance=document.getElementById("Distance").value;
    if(distance===""){
        h++;
    }
    let time=document.getElementById("Time").value;
    if(time===""){
        h++;
    }
    if(h>0){
        window.alert("Patikrinkite ar užpildėt visus laukelius!");
        return false;
    }
    let table = document.getElementById("newTable");
    let row = table.insertRow();
    let nr = row.insertCell();
    let newDate = row.insertCell();
    let newNumber = row.insertCell();
    let newDistance = row.insertCell();
    let newTime = row.insertCell();
    let newSpeed = row.insertCell();
        nr.innerHTML = l;
        l++;
        newDate.innerHTML = date;
        newNumber.innerHTML = number;
        newDistance.innerHTML =(distance/1000).toFixed(2);
        newTime.innerHTML = (time/3600).toFixed(2);
        newSpeed.innerHTML =(distance / time * 3.6).toFixed(0);
        return l;
}


/*
function deleteRow(){
    duomenys.deleteRow(this);
}
*/