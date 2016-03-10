$(document).ready(function() {

	$('.app-hover').hide();

	$('.app').hover(
		function() {
			$('.app-hover', this).stop(true,true).fadeIn(200);
			console.log(this);
			
		},
		function() {
			$('.app-hover', this).hide();
		}
	);



})