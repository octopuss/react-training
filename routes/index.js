var express = require('express');

/* GET home page. */


exports.index = function(req, res){
    res.render('Index', { title: 'React training final', js: 'index'});
};
