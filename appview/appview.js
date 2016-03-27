$(document).ready(function() {

	// var listElt = $('<div>');
	// var clone = $('#result-template').clone();
	// clone.attr('id', 'wrapper');
	// clone.appendto(listElt);
	// $('#results').append(listElt);



	$('li').click(function(e) {
		console.log(e.target.parentNode.id);
		$('li').removeClass('active');
		$(this).addClass('active');
		// $(id.toString()).addClass('active');
	})


})