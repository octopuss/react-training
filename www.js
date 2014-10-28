#!/usr/bin/env node
var debug = require('debug')('app');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');




var routes = require('./routes');


var app = express();

app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({jsx: {harmony: true},beautify:true}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(__dirname+'/dist'));

app.get('/', routes);
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
