define(function () {

	"use strict";

	function prefetchTemplates() {
		'use strict';

		var filesToPrefetch = ['views/landing', 'views/about'];

		require(filesToPrefetch, function(){
				// do nothing. Just prefetching.
			}
		);
	}

	function renderTemplate(templateName, json, callback) {
		'use strict';

	    var out;

	    if(typeof EJS!=='undefined') {
	        out = new EJS({url: 'templates/' + templateName + '.ejs'}).render(json);
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
