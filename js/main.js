$('#nav-toggle').click(function(e){
    e.stopPropagation();
    $('#nav-menu').toggleClass('is-active');
});
    $('#nav-menu').click(function(e){
    e.stopPropagation();
});
$('body,html').click(function(e){
   $('#nav-menu').removeClass('is-active');
});


//
$('#phone').click(function(e){
    e.stopPropagation();
    $('#phone-m').toggleClass('is-active');
});
$('.modal-close').click(function(e){
   $('#phone-m').removeClass('is-active');
});;
$('body,html').click(function(e){
   $('#phone-m').removeClass('is-active');
});
