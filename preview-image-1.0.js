/**
 * preview-image-1.0.js
 * Eric Olson
 * https://github.com/zpalffy/preview-image-jquery
 * 
<<<<<<< HEAD
=======
 * License: MIT - http://opensource.org/licenses/MIT
>>>>>>> updated comments, fixed bug in opts ref, added namespace opt
 * Original: http://cssglobe.com/easiest-tooltip-and-image-preview-using-jquery/ by Alen Grakalic (http://cssglobe.com)
 */
 (function($) {
	$.previewImage = function(options) {		
		var opts = $.extend({
			/* The following set of options are the ones that should most often be changed by
			   passing an options object into this method.
			*/
			'xOffset': 20,    // the x offset from the cursor where the image will be overlayed.
			'yOffset': -20,   // the y offset from the cursor where the image will be overlayed.			
			'fadeIn': 'fast', // speed in ms to fade in, 'fast' and 'slow' also supported.
			'css': {          // css to use, maybe also be set to false.
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
			'element': $(document), // the element to attach listeners to.
			'namespace': '.previewImage' // namespace used for event listeners - local to this plugin.
		}, options);
		
		// unbind any previous event listeners:
<<<<<<< HEAD
		opts.element.off('.previewImage');
			
		opts.element.on('mouseover.previewImage', opts.eventSelector, function(e) {
=======
		opts.element.off(opts.namespace);
			
		opts.element.on('mouseover' + opts.namespace, opts.eventSelector, function(e) {
>>>>>>> updated comments, fixed bug in opts ref, added namespace opt
			var p = $('<p>').attr('id', opts.overlayId).css('position', 'absolute').css('display', 'none')
				.append($('<img>').attr('src', $(this).data(opts.dataKey)));
			if (opts.css) p.css(opts.css);
			
			$('body').append(p);
			
			p.css("top", (e.pageY + opts.yOffset) + "px").css("left", (e.pageX + opts.xOffset) + "px").fadeIn(opts.fadeIn);		
		});
		
<<<<<<< HEAD
		opts.element.on('mouseout.previewImage', opts.eventSelector, function() {
			$('#' + opts.overlayId).remove();
		});
		
		opts.element.on('mousemove.previewImage', opts.eventSelector, function(e) {
			$('#' + opts.overlayId).css("top", (e.pageY - opts.xOffset) + "px")
				.css("left", (e.pageX + opts.yOffset) + "px");
=======
		opts.element.on('mouseout' + opts.namespace, opts.eventSelector, function() {
			$('#' + opts.overlayId).remove();
		});
		
		opts.element.on('mousemove' + opts.namespace, opts.eventSelector, function(e) {
			$('#' + opts.overlayId).css("top", (e.pageY + opts.yOffset) + "px")
				.css("left", (e.pageX + opts.xOffset) + "px");
>>>>>>> updated comments, fixed bug in opts ref, added namespace opt
		});
		
		return this;
	};
	
	// bind with defaults so that the plugin can be used immediately if defaults are taken:
	$.previewImage();
})(jQuery);
