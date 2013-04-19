define([
	'jquery', 
	'underscore', 
	'backbone',
	'../../jsdust/landing'
	], 
	function($, _, Backbone, template){
	
		var View = Backbone.View.extend({
		
			el: '#landing',
		
			events: {
	    		'click .del': 'deleteItem',
	    		'submit #addNew': 'addNew',
			},

			deleteItem: function(event) {
				var thisParent = $(event.target).parents('form')[0];

				$.post(thisParent.action, $(thisParent).serialize(), function(json){
	        		thisParent.parentNode.parentNode.removeChild(thisParent.parentNode);
				});				

				event.preventDefault();
			},

			addNew: function(event) {
				var parentView = this.options.parent;

				if($('#newItemName').val() !== '') {
					$.post(event.target.action,	$(event.target).serialize(), function(json){
						$('#items').html(($('#items').html()) + '<li class="item"> <form method="POST" action="/doDeleteItem"><span class="name">' +  $('#newItemName').val() + '</span><span class="del">&#10005; </span></form></li>');
						$('#newItemName').val('');
						$('#addNew input[type=submit]').focus();
						//parentView.showPage(json)
					});				
				}
				
				event.preventDefault();
			}

		});
		
		return View;
	}
);
