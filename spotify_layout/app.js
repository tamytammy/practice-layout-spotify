$('.open-btn').click(function(){
    $('.show-aside').slideDown();
});
$('.closing-btn').click(function(){
    $('.show-aside').slideUp(200);
});

$('.slide-btn').click(function(e){
    (e).preventDefault();
   $(this).parent().find('.show-content').slideToggle();
});