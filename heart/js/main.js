$( document ).ready(function() {

	$(".button-like").click(function( e ) {
		e.preventDefault();

		if (e.shiftKey) {
			$(this).addClass("slow");
		} else {
			$(this).removeClass("slow");
		}
		
		$(this).toggleClass("liking");
	});

});