
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
 auto.forEach(function(lol) {
     if(typeof lol !== "undefined" && lol !==null){
         c=lol;
         let row = '<tr>';
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
         row += '</tr>';
         document.getElementById("duomenys").innerHTML += row;
     }
 });

function addTable(){
    let Data=[];
    let date=document.getElementById("Date").value;
    date=date.replace("T", " / ");
    Data.push(date);
    let number=document.getElementById("Number").value;
    Data.push(number);
    let distance=document.getElementById("Distance").value;
    Data.push(distance);
    let time=document.getElementById("Time").value;
    Data.push(time);
    let table = document.getElementById("newTable");
    let row = table.insertRow();
    let newDate = row.insertCell();
    let newNumber = row.insertCell();
    let newDistance = row.insertCell();
    let newTime = row.insertCell();
    let newSpeed = row.insertCell();
        newDate.innerHTML = Data[0];
        newNumber.innerHTML = Data[1];
        newDistance.innerHTML =(Data[2]/1000).toFixed(2);
        newTime.innerHTML = (Data[3]/3600).toFixed(2);
        newSpeed.innerHTML =(Data[2] / Data[3] * 3.6).toFixed(0);
}