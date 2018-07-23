let PizzaMenu = document.getElementById("PizzaMenu");
let SaladsMenu = document.getElementById("SaladsMenu");
let StarterMenu = document.getElementById("StarterMenu");
window.onload=menu();

function menu(menuChoice){
    switch (menuChoice){
        case 1:
            SaladsMenu.style.display = "none";
            PizzaMenu.style.display = "block";
            StarterMenu.style.display = "none";
            break;

        case 2:
            SaladsMenu.style.display = "block";
            PizzaMenu.style.display = "none";
            StarterMenu.style.display = "none";
            break;

        case 3:
            SaladsMenu.style.display = "none";
            PizzaMenu.style.display = "none";
            StarterMenu.style.display = "block";
            break;

        default:
            PizzaMenu.style.display = "block";
            StarterMenu.style.display = "none";
            SaladsMenu.style.display = "none";
            break;
    }
}



function myMap() {
    let myCenter = new google.maps.LatLng(41.878114, -87.629798);
    let mapCanvas = document.getElementById("map");
    let mapOptions = {center: myCenter, zoom: 12};
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);
}
