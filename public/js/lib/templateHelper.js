define(function () {

	"use strict";

	function prefetchTemplates() {
		'use strict';

		var filesToPrefetch = [];

		if(typeof dust!=='undefined') {
			filesToPrefetch = ['../jsdust/landing', 'views/landing', '../jsdust/about', 'views/about'];
		} else if(typeof EJS!=='undefined') {
			filesToPrefetch = ['views/landing', 'views/about'];
		}

		require(filesToPrefetch, function(){
				// do nothing. Just prefetching.
			}
		);
	}

	function renderTemplate(templateName, json, callback) {
		'use strict';

	    var out;

	    if(typeof EJS!=='undefined') {
	        out = new EJS({url: 'templates/ejs/' + templateName + '.ejs'}).render(json);
	        if(callback) {
	            callback(out);
	        }
	    } else if(typeof dust!=='undefined') {

	        dust.render('public/templates/dust/' + templateName + '.dust', json, function(err, output) { 
	            out = output;
	        });

	        if(callback) {
	            callback(out);
	        }
	    }
	}

	return {
		prefetchTemplates: prefetchTemplates,
		renderTemplate: renderTemplate
	};

});
