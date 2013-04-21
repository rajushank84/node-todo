require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-optamd3-min'
	}
});

require(['views/app','backbone'], function(AppView, Backbone){
	var appView =  new AppView();

	appView.render();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'landing': 'landing',
			'about': 'about',
			'': 'landing'
		},

		about: function() {
			appView.getPage('/about');
		},

		landing: function() {
			appView.getPage('/');
		},

		default: function() {
			Backbone.history.navigate('#landing');
		}
	});

	var appRouter = new AppRouter();
	Backbone.history.start();

}); 

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

prefetchTemplates();

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


