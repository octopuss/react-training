var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var routes = require('./routes');


var app = express();


app.engine('jsx', require('express-react-views').createEngine({jsx: {harmony: true},beautify:true}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(__dirname+'/dist'));

app.get('/', routes);


module.exports = app;
