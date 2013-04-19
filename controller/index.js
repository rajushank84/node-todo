var dataUtils = require('../lib/dataUtils');

module.exports = function(app) {
              
	app.get('/', function(req, res) {
		renderOutput(req, res, 'landing', '');
	});

	app.post('/doAddItem', function(req, res) {
		var data = {};
		data.name = req.body.name;

		dataUtils.saveItem(data, function(){		
			renderOutput(req, res, 'landing', 'Added');
		});
	});

	app.post('/doDeleteItem', function(req, res) {
		var data = {};
		data.name = req.body.name;

		dataUtils.deleteItem(data, function(){		
			renderOutput(req, res, 'landing', 'Deleted');
		});	
	});

	function renderOutput(req, res, viewName, status) {
		var json;

		dataUtils.getAllItems(function(allTheItems){
			json = {
				viewName: viewName,
				status: status,
				baseTemplate: 'base',
				data: {
					items: allTheItems
				}
			};			
	
			if(req.header('X-Requested-With') == 'XMLHttpRequest') {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.write(JSON.stringify(json));
				res.end();
			}

			else {
				res.render("public/templates/" + json.baseTemplate,json);
			}		
		});

	}	
}

