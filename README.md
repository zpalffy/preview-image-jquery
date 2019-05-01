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
   'xOffset': 10,  // x-offset from cursor
   'yOffset': 10,  // y-offset from cursor
   'fadeIn': 1000, // delay in ms. to display the preview
   'css': {        // the following css will be used when rendering the preview image.
      'padding': '20px',
      'border': '5px solid black'
   }
});
```

If you have your own css you'd like to use, or just don't want any inserted by the plugin, you can turn it off.  The css id for the overlay is 'preview-image-plugin-overlay' so you could write your own css to target that id if you wanted.
``` javascript
$.previewImage({css: false});
```

History
-------
* **1.0** Initial commit
