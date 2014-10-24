var Jquery = require('jquery');
var Promise = require('promise');
var Constants = require('./Constants');
var Enums = require('./Enums');

var RemoteData = {
    getCurrentTemperature: function(){
        var qs = {};
        console.log("Creating AJAX request");
        var jqPromise = Jquery.ajax({url:Enums[Constants.CURRENT_TEMPERATURE_URL],data:qs,datatype:"jsonp"});
        var promise =  Promise.resolve(jqPromise);
        console.log("...returning promise");
        return promise;
    }
};

module.exports=RemoteData;