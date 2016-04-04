//var sw is a animation switch
    var sw = false;


//Switch
function myFunction() {
    sw = !sw;
    if(sw)
        $('#switch').html("on");
        //document.getElementById("switch").innerHTML = "On";
    else
        $('#switch').html("off");
        //document.getElementById("switch").innerHTML = "Off";
}

$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);

});

$('body').toggleClass('loaded');