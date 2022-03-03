$('.menu-btn').on('click',function(){
    $('.menu-btn').toggleClass('active');
    $('.nav').fadeToggle();
    $('.page-main').fadeToggle();
});
