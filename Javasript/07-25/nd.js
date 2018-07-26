let Alert = document.getElementById("div");


function pass(){
    let naujas= document.getElementById("Naujas").value;
    let naujas2= document.getElementById("Naujas2").value;
    let g=0;
    if(naujas==='' || naujas2===''){
        alert("Įvesk ką nors nx");
        g=1;
    }
    if (naujas === naujas2 && g!==1){
        Alert.style.display='block';
        setInterval(color, 1000);
    }
    if(naujas!==naujas2){
        alert("Slaptažodžiai nesutampa");
    }
}

function color(){
    if(Alert.style.borderColor==='green') {
        setInterval(Alert.style.borderColor ="red", 1000);
    }
   else {
        setInterval(Alert.style.borderColor = 'green', 1000);
    }

}