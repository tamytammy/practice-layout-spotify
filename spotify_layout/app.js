$('.open-btn').click(function(){
    $('.show-aside').fadeIn(500);
});
$('.closing-btn').click(function(){
    $('.show-aside').fadeOut(400);
});

$('.slide-btn').click(function(e){
    (e).preventDefault();
   $(this).parent().find('.show-content').slideToggle();
});