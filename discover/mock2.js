$(document).ready(function() {

	$('.app-hover').hide();
	$('.app-hover2').hide();


	$('.app').hover(
		function() {
			$('.app-hover', this).stop(true,true).fadeIn(200);
			console.log(this);
			
		},
		function() {
			$('.app-hover', this).hide();
		}
	);



	$('.app2').hover(
		function() {
			$('.app-hover2', this).stop(true,true).fadeIn(200);
			console.log(this);
			
		},
		function() {
			$('.app-hover2', this).hide();
		}
	);


})