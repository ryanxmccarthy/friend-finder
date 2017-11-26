var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js")
var port = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

apiRoutes(app);
htmlRoutes(app);

app.listen(port, function() {
	console.log('App listening on port ' + port);
});