
$(window).on('load',function(){
    $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#loading_box").delay(1200).fadeOut('slow');//ローディング画像を1.2秒（1200ms）待機してからフェードアウト
  });



$('.menu-btn').on('click',function(){
    $('.menu-btn').toggleClass('active');
    $('.nav').fadeToggle();
    $('.page-main').fadeToggle();
    $('html,body').animate({scrollTop:0}, 'fast');
    $('.page-nav figure').css('opacity' , '50%');
});
$('.lo01').hover(
    function(){
    $('.pho01 , .pho01-2').css('opacity' , '100%');
    },
    function(){
    $('.pho01 , .pho01-2').css('opacity' , '50%');
});
$('.lo02').hover(
    function(){
    $('.pho02 , .pho02-2').css('opacity' , '100%');
    },
    function(){
    $('.pho02 , .pho02-2').css('opacity' , '50%');
});
$('.lo03').hover(
    function(){
    $('.pho03').css('opacity' , '100%');
    },
    function(){
    $('.pho03').css('opacity' , '50%');
});
$('.lo04').hover(
    function(){
    $('.pho04').css('opacity' , '100%');
    },
    function(){
    $('.pho04').css('opacity' , '50%');
});
$('.lo05 , lo05-2').hover(
    function(){
    $('.pho05').css('opacity' , '100%');
    },
    function(){
    $('.pho05').css('opacity' , '50%');
});


$('.lo01').click(function() {
    $('.pho01 , .pho01-2').css('opacity' , '100%');
});
$('.lo02').click(function() {
    $('.pho02 , .pho02-2').css('opacity' , '100%');
});
$('.lo03').click(function() {
    $('.pho03').css('opacity' , '100%');
});
$('.lo04').click(function() {
    $('.pho04').css('opacity' , '100%');
});
$('.lo05 , lo05-2').click(function() {
    $('.pho05').css('opacity' , '100%');
});


$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});

$('.bk-btn').on('click',function(){
    $('.bk-btn').toggleClass('active');
});
$('.top-btn').on('click',function(){
    $('html,body').animate({scrollTop:0}, 'fast');
});