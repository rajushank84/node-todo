define([
	'jquery', 
	'underscore', 
	'backbone',
	'../../jsdust/about'
	], 
	function($, _, Backbone, template){
	
		var View = Backbone.View.extend({
		
			el: '#about'
		
		});
		
		return View;
	
	}
);
