define([
	'jquery',
	'underscore',
	'backbone',
	'lib/SpineView'
	],
	function($, _, Backbone, SpineView){
		
		'use strict';

		var View = SpineView.extend({
		
			el: '#about'

		});
		
		return View;
	
	}
);
