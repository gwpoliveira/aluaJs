$(document).ready(function(){
    $('#iniciar').click(function(){
        $('.box').animate({
            width:"300px",
            height:"300px",
            marginLeft:"250px",
            borderWidth:"20px",
            opacity:0.5,
        }, 7000);
    });
    $('#parar').click(function(){
        $('.box').stop();
    });
});

$(document).ready(function(){
    $('.box2').click(function(){
        $('#iniciar2').click(function(){
            $('.box2').animate({width:"300px"});
            $('.box2').animate({height:"300px"});
            $('.box2').animate({marginLeft:"250px"});
            $('.box2').animate({borderWidth:"20px"});
            $('.box2').animate({opacity:0.5});
       
        }, 7000);
    });
    $('#parar2').click(function(){
        $('.box2').stop();
    });
});