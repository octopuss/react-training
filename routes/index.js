var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.render('index', { title: 'React training final', js: 'index'});
})

module.exports=router;
