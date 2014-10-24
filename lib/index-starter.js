/**
 * Starter of the application on client environment
 * @type {exports}
 */
var React = require('react');
var Content = require('../components/Content.jsx');


starter = {
    start: function() {
        React.renderComponent(Content(),document.querySelector('body'));
        console.log('Application started!');
    }
};
module.exports=starter;