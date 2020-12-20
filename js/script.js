$(document).ready(function(){
	$('.parallax').parallax();
	$('.slider').slider();
	$('.sidenav').sidenav();
});

setTimeout(function(){
   $('.hide-video').hide();
   $('.hide-image').show();
}, 6000);
