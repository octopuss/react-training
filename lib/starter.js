/**
 * Starter of the application on client environment
 * @type {exports}
 */
var React = require('react');
var Button = require('../components/Button.jsx');
var Buttonicon = require('../components/Buttonicon.jsx');
var CurrentTemperature = require('../components/CurrentTemperature.jsx');
var Constants = require('./Constants');

starter = {
    start: function(data) {
        //not really nice but not important for training
        data[0].buttonType=Constants.BUTTON_FIRST;
        data[1].buttonType=Constants.BUTTON_SECOND;
        React.renderComponent(Button(data[0]), document.getElementById('first-button'));
        React.renderComponent(Button(data[1]), document.getElementById('second-button'));
        React.renderComponent(Buttonicon({icon:'fa-thumbs-o-up'}), document.querySelector('h1 span'));
        React.renderComponent(CurrentTemperature(), document.querySelector('.alert div'));
        console.log('Application started!');
    }
};
module.exports=starter;