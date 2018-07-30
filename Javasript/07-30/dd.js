

$('button').click(function()
 {
     let input=document.getElementById("input").value;
    $.get(input,function(data) {
        console.log(data.data[0].municipality);
    });
});


