var MetaSetter = {

	// Default Tags
	defaults: {
		'title': document.title
	},

	// Initialize the object with defaults.
	//
	// var MetaSetter = require('meta-setter').init({
	// 	'title': 'Some Default Title',
	// 	'og:title': 'Some Default Open Graph Title',
	// 	'og:description': 'Some Default long description that will show up on facebook.'
	// });
	init: function(spec) {
		var spec = spec || {};
		var defaults = this.defaults || {};

		// Create tag defaults
		for(var key in spec) {
			defaults[key] = spec[key];
		}

		return this;
	},

	// Update Document Meta tags defined through a spec object
	// {
	// 	'title': 'Some Title',
	// 	'og:title': 'Some Open Graph Title',
	// 	'og:description': 'Some long description that will show up on facebook.'
	// }
	//
	// var MetaSetter = require('meta-setter');
	//
	// MetaSetter.updateMetaTags({
	// 	'title': 'Some Title',
	// 	'og:title': 'Some Open Graph Title',
	// 	'og:description': 'Some long description that will show up on facebook.'
	// });
	//
	updateMetaTags: function(spec) {
		for(var key in spec) {
			var metaEl = (document.querySelector("meta[name='" + key + "']")) ? document.querySelector("meta[name='" + key + "']") : document.querySelector("meta[property='" + key + "']");

			// Update Document Title
			document.title = (spec.title) ? spec.title : this.defaults.title;

			// If Meta Tag Exists, update its content attribute
			if(metaEl !== null) {
				(spec[key] !== '') ? metaEl.setAttribute('content', spec[key]) : metaEl.setAttribute('content', this.defaults[key]);
			}
		} // end for
	},

	// Reset All Meta Tags back to original defaults
	//
	// var MetaSetter = require('meta-setter');
	//
	// somewhere in the app
	// MetaSetter.reset();
	//
	reset: function() {
		var defaults = this.defaults;

		for(var key in defaults) {
			var metaEl = (document.querySelector("meta[name='" + key + "']")) ? document.querySelector("meta[name='" + key + "']") : document.querySelector("meta[property='" + key + "']");

			// Update Document Title
			document.title = (defaults.title) ? defaults.title : '';

			// If Meta Tag Exists, update its content attribute
			if(metaEl !== null) {
				(defaults[key] !== '') ? metaEl.setAttribute('content', defaults[key]) : metaEl.setAttribute('content', '');
			}
		}
	}


}; // end MetaSetter

// Exports
module.exports = MetaSetter;
