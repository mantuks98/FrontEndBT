let div = document.createElement("div");
div.style.backgroundColor="red";
div.style.height="300px";
div.style.width="300px";
div.setAttribute('onclick', 'setTimeout("round()", 1000)');
let body = document.getElementById('body');
body.appendChild(div);
function round(){
    if(div.style.borderRadius!=='50%'){
        div.style.borderRadius='50%';
        div.style.backgroundColor= 'green';
    }
    else{
        div.style.borderRadius='0';
        div.style.backgroundColor= 'red';
    }
}