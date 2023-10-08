$('.normal-btn').click(function(){
    $('nav ul .normal-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.buyout-btn').click(function(){
    $('nav ul .buyout-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});