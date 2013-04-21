require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-optamd3-min',
		templateHelper: 'lib/templateHelper'
	}
});

require(['views/app','backbone'], function(AppView, Backbone, TemplateHelper){
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

TemplateHelper.prefetchTemplates();
