preview-image-jquery
====================

jQuery plugin that adds an image preview mouseover to any element on the page with a data-preview-image attribute.

License
-------
MIT - http://opensource.org/licenses/MIT.

Why?
----
Much of the code was taken from Alen Grakalic (http://cssglobe.com)  I took his already-working code, and modified it to:
  - use a 'data-' element rather than requiring a wrapping anchor tag
  - include the css for the overlay in script.
  - add the options map for easily changing how it works.
  - change to use jQuery's 'on' methods so that dynamically added elements also acquire the preview behavior.  Also, we don't need to wait for document.ready to 'bind,' therefore no method call is required to configure the plugin (unless non-default config values should be used.)

Original: http://cssglobe.com/easiest-tooltip-and-image-preview-using-jquery/

Examples
--------
 - [With default options](http://zpalffy.github.io/example-preview-image-defaults.html) ([source](https://github.com/zpalffy/zpalffy.github.io/blob/master/example-preview-image-defaults.html))
 - [With custom options](http://zpalffy.github.io/example-preview-image-custom-options.html) ([source](https://github.com/zpalffy/zpalffy.github.io/blob/master/example-preview-image-custom-options.html))
 - [No CSS](http://zpalffy.github.io/example-preview-image-no-css.html) ([source](https://github.com/zpalffy/zpalffy.github.io/blob/master/example-preview-image-no-css.html))

Usage
-----
To use, simply include the script in the head of your page.  If you add an attribute to any element like:
``` html
<img src="thumbnail-view.jpg" data-preview-image="large-view.jpg" />
```
then when a user hovers the mouse over the image, the larger view will be displayed.

Another example:
``` html
<a href="http://somesite.com/somepage.html" data-preview-image="preview-of-page.jpg">link</a>
```

If you don't like the defaults, you can optionally change any or all of them like:
``` javascript
$.previewImage({
			/* The following set of options are the ones that should most often be changed
			   by passing an options object into this method.
			*/
			'xOffset': 10,    // the x offset from the cursor where the image will be overlayed.
			'yOffset': 10,   // the y offset from the cursor where the image will be overlayed.
			'fadeIn': 'fast', // speed in ms to fade in, 'fast' and 'slow' also supported.
			'maxHeight': 400,
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
});
```

If you have your own css you'd like to use, or just don't want any inserted by the plugin, you can turn it off.  The css id for the overlay is 'preview-image-plugin-overlay' so you could write your own css to target that id if you wanted.
``` javascript
$.previewImage({css: false});
```

History
-------
* **1.0** Initial commit
* **1.1** Preview won't display image out of window bounds, it's instead rendered to the left and/or top of the mouse cursor, respecting offsets.
