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
b=0;
 auto.forEach(function(lol) {
     if(typeof lol !== "undefined" && lol !==null){
         c=lol;
         let row = '<tr>';
         lol.forEach(function(item) {
             if(a===2){
                 row += '<td>' + (item/1000).toFixed(2) +'</td>';
                 b++;
             }
             else if (a===3){
                 row += '<td>' + (item/3600).toFixed(2) +'</td>';
                 b++;
             }
             else {
                 row += '<td>' + item + '</td>';
             }
             a++;
         });
         a=0;
         b=0;
         row += '<td>' + (c[2] / c[3] * 3.6).toFixed(0)+ '</td>';
         row += '</tr>';
         document.getElementById("duomenys").innerHTML += row;
     }

 });



 function CreateTable() {
     let table = document.getElementById("newTable");
     let row = table.insertRow();
     let date = row.insertCell();
     let number = row.insertCell();
     let distance = row.insertCell();
     let time = row.insertCell();
     let speed = row.insertCell();
     autofix.forEach(function (loll) {
         b = loll;
         date.innerHTML = " ";
         number.innerHTML = " ";
         distance.innerHTML =" ";
         time.innerHTML = " ";
         speed.innerHTML = " ";

     });
 }