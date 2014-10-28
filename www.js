#!/usr/bin/env node
var debug = require('debug')('app');
var app = require('./app');

app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
