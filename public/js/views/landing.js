define([
	'jquery',
	'underscore',
	'backbone',
	'lib/SpineView'
	],
	function($, _, Backbone, SpineView){
		
		'use strict';

		var View = SpineView.extend({
		
			el: '#landing',

			events: {
				'click .del': 'deleteItem',
				'submit #addNew': 'addNew',
			},

			deleteItem: function(event) {
				var thisParent = $(event.target).parents('form')[0],
					that = this;

				$.post(thisParent.action, $(thisParent).serialize(), function(json){
					that.renderTemplate(json);
				});

				event.preventDefault();
			},

			addNew: function(event) {
				var that = this;

				if($('#newItemName').val() !== '') {
					$.post(event.target.action,	$(event.target).serialize(), function(json){
						$('#newItemName').val('');
						that.renderTemplate(json);
					});
				}

				event.preventDefault();
			}
		});
		
		return View;
	}
);
