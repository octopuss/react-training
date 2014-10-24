/** @jsx React.DOM */
/**
 * Content component
 * @type {exports}
 */
var React = require('react');
var Button = require('../components/Button.jsx');
var Buttonicon = require('../components/Buttonicon.jsx');
var CurrentTemperature = require('../components/CurrentTemperature.jsx');
var Constants = require('../lib/Constants');

var Content = React.createClass({

    render:function(){
       return (<div><div className="alert alert-success my-alert-style">
                   <h1><Buttonicon icon="fa-thumbs-o-up"/> It works!</h1><CurrentTemperature/>
              </div>
              <div id="content">
                <div id="first-button"><Button text="Drink" icon="fa-user" buttonType={Constants.BUTTON_FIRST}/></div>
                <div id="second-button"><Button text="Me" icon="fa-beer" buttonType={Constants.BUTTON_SECOND}/></div>
               </div></div>);

    }
});

module.exports=Content;

