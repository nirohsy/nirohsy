$('.menu-btn').on('click',function(){
    $('.menu-btn').toggleClass('active');
    $('.nav').fadeToggle();
    $('.page-main').fadeToggle();
    $('html,body').animate({scrollTop:0}, 'fast');
});
$('.lo01').hover(
    function(){
    $('.pho01 , .pho01-2').css('opacity' , '100%')
    },
    function(){
    $('.pho01 , .pho01-2').css('opacity' , '50%')
});
$('.lo02').hover(
    function(){
    $('.pho02 , .pho02-2').css('opacity' , '100%')
    },
    function(){
    $('.pho02 , .pho02-2').css('opacity' , '50%')
});
$('.lo03').hover(
    function(){
    $('.pho03').css('opacity' , '100%')
    },
    function(){
    $('.pho03').css('opacity' , '50%')
});
$('.lo04').hover(
    function(){
    $('.pho04').css('opacity' , '100%')
    },
    function(){
    $('.pho04').css('opacity' , '50%')
});
$('.lo05 , lo05-2').hover(
    function(){
    $('.pho05').css('opacity' , '100%')
    },
    function(){
    $('.pho05').css('opacity' , '50%')
});
