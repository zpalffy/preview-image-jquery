/**
 * preview-image.js
 * version 1.1
 * Eric Olson
 *
 * https://github.com/zpalffy/preview-image-jquery
 *
 * License: MIT - http://opensource.org/licenses/MIT
 * Original: http://cssglobe.com/easiest-tooltip-and-image-preview-using-jquery/
 *     by Alen Grakalic (http://cssglobe.com)
 */
 (function($) {
	$.previewImage = function(options) {
		var element = $(document);
		var namespace = '.previewImage';

		var opts = $.extend({
			/* The following set of options are the ones that should most often be changed
			   by passing an options object into this method.
			*/
			'xOffset': 10,    // the x offset from the cursor where the image will be overlayed.
			'yOffset': 10,    // the y offset from the cursor where the image will be overlayed.
			'fadeIn': 'fast', // speed in ms to fade in, 'fast' and 'slow' also supported.
			'maxHeight': 400, // limit the height of the preview image in pixels
			// css to use, may also be set to false.
			'css': {
				'padding': '8px',
				'border': '1px solid #ccc',
				'background-color': '#fff',
				'z-index': '2000',
			},

			/* The following options should normally not be changed - they are here for
			   cases where this plugin causes problems with other plugins/javascript.
			*/
			'eventSelector': '[data-preview-image]', // the selector for binding mouse events.
			'dataKey': 'previewImage', // the key to the link data, should match the above value.
			'overlayId': 'preview-image-plugin-overlay', // the id of the overlay that will be created.
		}, options);

		// unbind any previous event listeners:
		element.off(namespace);

		element.on('mouseover' + namespace, opts.eventSelector, function(e) {
			var img = $('<img>')
				.attr('src', $(this).data(opts.dataKey))
				.css('max-height', opts.maxHeight || 'initial')

			var p = $('<p>')
				.attr('id', opts.overlayId)
				.css('position', 'absolute')
				.css('display', 'none')
				.append(img);
			if (opts.css) p.css(opts.css);
			$('body').append(p);

			img.on('load', function() {
				var c = getCoordinates(e, this.width, this.height);
				p.data('img', this);
				p.css("left", c.x + "px")
				.css("top", c.y + "px")
				.fadeIn(opts.fadeIn);
			})
		});


		element.on('mouseout' + namespace, opts.eventSelector, function() {
			$('#' + opts.overlayId).remove();
		});

		element.on('mousemove' + namespace, opts.eventSelector, function(e) {
			var p = $('#' + opts.overlayId),
				img = p.data('img');
			if(!img) return;

			var c = getCoordinates(e, img.width, img.height);
			p.css("left", c.x + "px")
			 .css("top", c.y + "px");
		});

		function getCoordinates(e, width, height) {
			var currentX = e.pageX,
				currentY = e.pageY;
			return {
				x: currentX + width + opts.xOffset <= window.innerWidth ?
					currentX + opts.xOffset : currentX - width - opts.xOffset,
				y: currentY + height + opts.yOffset <= window.innerHeight ?
					currentY + opts.yOffset: currentY - height - opts.yOffset
			}
		}

		return this;
	};

	// bind with defaults so that the plugin can be used immediately if defaults are taken:
	$.previewImage();
})(jQuery);
