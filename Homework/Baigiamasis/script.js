let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");


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
