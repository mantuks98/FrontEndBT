window.onload = loadDoc();
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let plan = document.getElementById("Plan");
plan.className+="row";
plan.className+=" center-block";
let web = document.getElementById("progress-web");
let programming = document.getElementById("progress-programming");
let htmlCss = document.getElementById("progress-htmlCss");
let wordpress = document.getElementById("progress-wordpress");
let joomla = document.getElementById("progress-joomla");
let progressTitle = document.querySelectorAll(".progress-title");
let i = 0;
let p = 0;

$(document).ready(function () {
    let yStart = $("#grid").offset();
    let yFinish = $("#skills-bg").offset();
    let y2Start = $("#chose-about-bg").offset();
    let y2Finish = $("#Team").offset();
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > yStart.top && window.pageYOffset < yFinish.top) {
            web.style.width = "80%";
            programming.style.width = "60%";
            htmlCss.style.width = "70%";
            wordpress.style.width = "100%";
            joomla.style.width = "40%";
            while (i === 0) {
                $('.progress-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                        // šito dalyko reikėjo, nes be jo pasibaigus funkcija gražindavo skaičius
                        // iki 1 po to vėl pakildavo iki reikiamų nustaymų ir vėl grįždavo ir t.t
                        done: i = 1
                    });
                });
            }
            progressTitle.forEach(function (a) {
                a.className += " progress-title-animation";
            });
        }
        if (window.pageYOffset > y2Start.top && window.pageYOffset < y2Finish.top) {
            while (p === 0) {
                $('.info-numbers').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                        done: p = 1
                    });
                });
            }
        }
    }, false);

});


$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

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
            obj.forEach(function (a) {
                let block = document.createElement("div");
                let table = document.createElement("table");
                block.appendChild(table);
                table.className += "width-100";
                block.className += "col-md-4";
                block.className += " center-block";
                block.className += " margin-top-100";
                plan.appendChild(block);
                let th = document.createElement("thead");
                if (a.active === true) {
                    th.className += "price-head-active";
                }
                let div = document.createElement("div");
                div.className += "hexagon";
                div.className += " center-block";
                let span2 = document.createElement("span");
                let span = document.createElement("span");
                let monthly = document.createTextNode("MONTHLY");
                span2.appendChild(monthly);
                span.innerHTML = a.users.number;
                span2.className += "monthly-users";
                span.className += "monthly";
                div.appendChild(span);
                if (a.users.monthly === 1) {
                    div.innerHTML += "<br>";
                    div.appendChild(span2);
                }
                th.appendChild(div);
                table.appendChild(th);
                let headRow = th.insertRow();
                let headInfo = headRow.insertCell();
                headInfo.innerHTML = a.title;
                headInfo.appendChild(div);
                headInfo.className += "price-head";
                let tbody = document.createElement("tbody");
                table.appendChild(tbody);
                let benefits = a.benefits;

                benefits.forEach(function (b) {
                    let row = tbody.insertRow();
                    let info = row.insertCell();
                    info.className = "price-info";
                    if (b.status === 1) {
                        info.className += " tru";
                        info.className += " price-plan-color";
                        info.innerHTML = b.name;
                    }
                    if (b.status === 0) {
                        info.className += " fals";
                        info.className += " price-plan-color";
                        info.innerHTML = b.name;
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
