$(document).ready(function() {

	// var listElt = $('<div>');
	// var clone = $('#result-template').clone();
	// clone.attr('id', 'wrapper');
	// clone.appendto(listElt);
	// $('#results').append(listElt);

	$('.app-hover').hide();

	$('.app').hover(
		function() {
			$('.app-hover', this).stop(true,true).fadeIn(200);
			// console.log(this);
			
		},
		function() {
			$('.app-hover', this).hide();
		}
	);

	$('li').click(function(e) {
		console.log(e.target.parentNode.id);
		$('li').removeClass('active');
		$(this).addClass('active');
		// $(id.toString()).addClass('active');
	})


})