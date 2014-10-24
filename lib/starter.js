var React = require('react');
var Button = require('../components/Button.jsx');
var Buttonicon = require('../components/Buttonicon.jsx');

starter = {
    start: function(data) {
        React.renderComponent(Button(data), document.getElementById('content'));
        React.renderComponent(Buttonicon({icon:'fa-thumbs-o-up'}), document.querySelector('h1 span'));
        console.log('Application started!');
    }
};
module.exports=starter;