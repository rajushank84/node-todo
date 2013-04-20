define([
	'jquery', 
	'underscore', 
	'backbone',
	'../../jsdust/landing',
	'lib/SpineView'
	], 
	function($, _, Backbone, template, SpineView){
	
		var View = SpineView.extend({
		
			el: '#landing',

			$el: $(this.el),
		
			events: {
				'click .del': 'deleteItem',
				'submit #addNew': 'addNew',
			},

			deleteItem: function(event) {
				/*var thisParent = $(event.target).parents('form')[0];

				$.post(thisParent.action, $(thisParent).serialize(), function(json){
					thisParent.parentNode.parentNode.removeChild(thisParent.parentNode);
				});

				event.preventDefault();*/
				alert('deleting');
			},

			addNew: function(event) {
				/*var parentView = this.options.parent;

				if($('#newItemName').val() !== '') {
					$.post(event.target.action,	$(event.target).serialize(), function(json){
						$('#newItemName').val('');
						parentView.showPage(json)
					});
				}*/
				alert('adding');

				event.preventDefault();
			}

		});
		
		return View;
	}
);
