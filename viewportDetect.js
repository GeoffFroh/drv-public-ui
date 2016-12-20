/*!
* Thanks to Jarrin@Jarrin.net (http://jarrin.net/viewportDetect
* viewportDetect Plugin
* v1.0 [jj 13Dec18] 
*
* returns the current viewport ("xs", "sm", "md", or "lg")
* $.viewportDetect() 
*
* create a callback function that is called whenever the viewport changes
* $.viewportDetect(function(currentViewport, previousViewport) { }); 
*/

(function ($) {
	var _currentViewport = "";

	$.viewportDetect = function(onChange) {
		if (arguments.length == 0) {
			return $("#viewportDetect div:visible").data("viewport");
		} 

		// onChange is a function we want to call whenever the viewport changes
		$(window).resize(function () {
			var viewport = $("#viewportDetect div:visible").data("viewport");
			if (_currentViewport == "") _currentViewport = viewport; // the first change is not really a change at all

			if (_currentViewport != viewport) {
				var prevViewport = _currentViewport;
				_currentViewport = viewport;
				onChange(_currentViewport, prevViewport);
			}
		});
	};

})(jQuery);