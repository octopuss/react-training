/** @jsx React.DOM */
/**
 * Button react component
 * @type {Button|exports}
 */
//dependencies
var Btn = require('react-bootstrap/Button');
var Icon = require('./Buttonicon.jsx');
var React = require('react');
var Store = require('../lib/ApplicationStore');
var AppDispatcher = require('../lib/AppDispatcher');
var Constants = require('../lib/Constants');


//business code
var Button = React.createClass({

    /**
     * Overriding React Class lifecycle method
     * @returns {{pending: boolean, active: boolean}}
     */
    getInitialState:function(){
        return {
          pending:false,
          active : false,
        };
    },
    /**
     * Overriding React Class lifecycle method
     */
    componentDidMount:function(){
        console.log("Button component was mount to dom");
        Store.addChangeListener(this.onChange);
    },
    /**
     * Overriding React Class lifecycle method
     */
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange);
    },
    /**
     *  Handler of the change caught by listenning
     */
    onChange:function(){
        if(Store.getActivebutton()==this.props.buttonType) {
            this.setState({active:true});
        } else {
            this.setState({active:false});
        }
        console.log("Button " + this.props.buttonType + " state changed to " + this.state.active);
    },
    /**
     * Handler of click event triggered on button
     */
    onClick:function() {
        AppDispatcher.handleViewAction({actionType: Constants.CHANGE_EVENT,
            buttonType:this.props.buttonType}
        );
        console.log("Button" + this.props.buttonType + " clicked");
    },
    /**
     * Renders component into view
     * @returns {XML}
     */
    render: function() {
        return(<Btn bsStyle="primary" bsSize="large" active={this.state.active} onClick={this.onClick}>{this.props.icon!=undefined ? <Icon icon={this.props.icon}/> : ''}{this.props.text}</Btn>)
    }
});

module.exports=Button;