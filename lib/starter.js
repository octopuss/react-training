var React = require('react');
var Button = require('../components/Button.jsx');

starter = {
    start: function(data) {
        React.renderComponent(Button(data), document.getElementById('content'));
        console.log('Application started!');
    }
};
module.exports=starter;