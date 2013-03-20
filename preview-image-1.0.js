/**
 * preview-image-1.0.js
 * Eric Olson
 *
 * Much of the code was taken from Alen Grakalic (http://cssglobe.com)  I took his already-working
 * code, and modified it to:
 *  - use a 'data-' element rather than requiring a wrapping anchor tag
 *  - include the css for the overlay in script.
 *  - add the options map for easily changing how it works.
 *  - change to use jQuery's 'on' methods so that dynamically added elements also acquire the 
 *    preview behavior.  Also, we don't need to wait for document.ready to 'bind,' therefore no
 *    method call is required to configure the plugin (unless non-default config values should
 *    be used.)
 *
 * Original: http://cssglobe.com/easiest-tooltip-and-image-preview-using-jquery/
 *
 * To use, simply include the script in the head of your page.  If you add an attribute to any
 * element like:
 * <img src="thumbnail-view.jpg" data-preview-image="large-view.jpg" />
 * then when a user hovers the mouse over the image, the larger view will be displayed.
 *
 * Another example:
 * <a href="http://somesite.com/somepage.html" data-preview-image="preview-of-page.jpg"
 *
 * If you don't like the defaults, you can optionally change any or all of them like:
 * $.previewImage(
 *   'xOffset': 10,  // x-offset from cursor
 *   'yOffset': 10,  // y-offset from cursor
 *   'fadeIn': 1000, // delay in ms. to display the preview
 *   'css': {        // the following css will be used when rendering the preview image.
 *      'padding': '20px',
 *      'border': 5px solid black'
 *   }
 * );
 */
(function($) {
	$.previewImage = function(options) {		
		var opts = $.extend({
			/* The following set of options are the ones that should most often be changed by
			   passing an options object into this method.
			*/
			'xOffset': 92, // the x offset from the cursor where the image will be overlayed.
			'yOffset': 20, // the x offset from the cursor where the image will be overlayed.			
			'fadeIn': 'fast',
			'css': {
				'padding': '8px',
				'border': '1px solid gray',
				'background-color': '#fff'
			},
			
			/* The following options should normally not be changed - they are here for cases
			   where this plugin causes problems with other plugins/javascript.
			*/
			'eventSelector': '[data-preview-image]', // the selector for binding mouse events.
			'dataKey': 'previewImage', // the key to the link data, should match the above value.
			'overlayId': 'preview-image-plugin-overlay', // the id of the overlay that will be created.
			'element': $(document) // the element to attach listeners to.
		}, options);
		
		// unbind any previous event listeners:
		$opts.element.off('.previewImage');
			
		$opts.element.on('mouseover.previewImage', opts.eventSelector, function(e) {
			var p = $('<p>').attr('id', opts.overlayId).css('position', 'absolute').css('display', 'none')
				.css(opts.css).append($('<img>').attr('src', $(this).data(opts.dataKey)));
			
			$('body').append(p);
			
			p.css("top", (e.pageY - opts.xOffset) + "px").css("left", (e.pageX + opts.yOffset) + "px").fadeIn(opts.fadeIn);		
		});
		
		$opts.element.on('mouseout.previewImage', opts.eventSelector, function() {
			$('#' + opts.overlayId).remove();
		});
		
		$opts.element.on('mousemove.previewImage', opts.eventSelector, function(e) {
			$('#' + opts.overlayId).css("top", (e.pageY - opts.xOffset) + "px")
				.css("left", (e.pageX + opts.yOffset) + "px");
		});
		
		return this;
	};
	
	// bind with defaults so that the plugin can be used immediately if defaults are taken:
	$.previewImage();
})(jQuery);

