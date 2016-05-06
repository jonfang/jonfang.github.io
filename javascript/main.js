//var sw is a animation switch
var sw = false;


//Switch to enter the page

function myFunction() {

    //console.log(sw);
    sw = !sw;
    if(sw){
        $('#switch').html("Welcome");
        $('body').toggleClass('loaded');
    }
}

/*
$(document).ready(function() {

    $('body').addClass('loaded');
    $('h1').css('color','#222222');

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1500);
});
*/

$('body').addClass('loaded');
$('body').toggleClass('loaded');