
(function($) {
	$.fn.plugin= function(){
	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 300;
	var currentLeftValue = 0;

	leftUIEl.click(function() {
		if (currentLeftValue<900)
		{
		currentLeftValue += 300;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	}
	});

	rightUIEl.click(function() {
		if (currentLeftValue>-900)
		{
		currentLeftValue -= 300;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	}
	});

};

})(jQuery);


