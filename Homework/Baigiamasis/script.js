window.onload=loadDoc();
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let plan = document.getElementById("Plan");
plan.setAttribute("class", "row");

function fix() {
    a1.removeAttribute("id");
    a2.removeAttribute("id");
    a3.removeAttribute("id");
}


function myMap() {
    let myCenter1 = new google.maps.LatLng(-12.043333, -77.028333);
    let myCenter2 = new google.maps.LatLng(-12.043553, -77.029333);
    let myCenter3 = new google.maps.LatLng(-12.043993, -77.027333);
    let mapCanvas = document.getElementById("Map");
    let mapOptions = {center: myCenter1, zoom: 16};
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let icon1 = 'test_images/robbery.png';
    let icon2 = 'test_images/robbery-light.png';
    let marker1 = new google.maps.Marker({
        position: myCenter1,
        icon: icon2,
        map: map,
        title: "Nupyzdinau kodą axaxax",
    });
    let marker2 = new google.maps.Marker({
        position: myCenter2,
        icon: icon1,
        map: map,
        title: "Nupyzdinau kodą xaxaxa"
    });
    let marker3 = new google.maps.Marker({
        position: myCenter3,
        icon: icon1,
        map: map,
        title: "Nupyzdinau kodą axxaxax"
    });
    let info = new google.maps.InfoWindow({
        content: "Pornografija kenkia akim :)"
    });
    marker1.addListener("click", function () {
        info.open(map, marker1);

    });

    marker2.addListener("click", function () {
        info.open(map, marker2);
    });

    marker3.addListener("click", function () {
        info.open(map, marker3);
    });
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
}

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Pricing-plans.txt", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let obj = JSON.parse(xhttp.responseText);
            obj.forEach(function(a){
                let length = obj[0].benefits.length;
                let table = document.createElement("table");
                table.className += "col-md-4";
                table.className += " margin-top-100";
                plan.appendChild(table);
                let th = document.createElement("thead");
                if(a.active===true){
                    th.className+= "price-head-active";
                }
                let div = document.createElement("div");
                div.className+="hexagon";
                div.className+=" center-block";
                th.appendChild(div);
                table.appendChild(th);
                let headRow = th.insertRow();
                let headInfo = headRow.insertCell();
                headInfo.innerHTML=a.title;
                headInfo.appendChild(div);
                headInfo.className += "price-head";
                let tbody = document.createElement("tbody");
                table.appendChild(tbody);
                let benefits = a.benefits;
                benefits.forEach(function(b){
                    let row = tbody.insertRow();
                    let info = row.insertCell();
                    info.className="price-info";
                    if (b.status === 1){
                        info.className += " tru";
                        info.className += " price-plan-color";
                        info.innerHTML=b.name;
                    }
                    if (b.status === 0){
                        info.className += " fals";
                        info.className += " price-plan-color";
                        info.innerHTML=b.name;
                    }
                });
                let row = tbody.insertRow();
                let info = row.insertCell();
                info.setAttribute("class", "price-info");
                let btn = document.createElement("button");
                btn.setAttribute("class", "price-btn");
                let img = document.createElement("span");
                img.className += "price-btn-icon ";
                img.className += "fas ";
                img.className += "fa-shopping-cart";
                btn.appendChild(img);
                let txt = document.createTextNode("  Order Now");
                btn.appendChild(txt);
                info.appendChild(btn);
            });
        }
    };
        xhttp.send();
}
