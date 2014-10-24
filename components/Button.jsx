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
          icon:this.props.icon
        };
    },
    /**
     * Overriding React Class lifecycle method
     */
    componentDidMount:function(){
        console.log("Button component was mount to dom");
        Store.addListener(Constants.CHANGE_EVENT,this.onChange);
        Store.addListener(Constants.LOADING_EVENT,this.onLoading);
        Store.addListener(Constants.LOADING_DONE_EVENT,this.onLoadingDone);
    },
    /**
     * Overriding React Class lifecycle method
     */
    componentWillUnmount:function(){
        // cleanup
        Store.removeListener(Constants.CHANGE_EVENT,this.onChange);
        Store.removeListener(Constants.LOADING_EVENT,this.onLoading);
        Store.removeListenner(Constants.LOADING_DONE_EVENT,this.onLoadingDone)
    },
    iAmOrigin:function(){
       var result = Store.getActivebutton()== this.props.buttonType;
       return result;
    },
    /**
     *  Handler of the change caught by listenning
     */
    onChange:function(){
        if(this.iAmOrigin()) {
            this.setState({active:true});
        } else {
            this.setState({active:false});
        }
        console.log("Button " + this.props.buttonType + " state changed to " + this.state.active);
    },
    onLoading:function(){
            var pd  =this.iAmOrigin();
            if(pd) {
                this.setState({icon:"fa-spinner fa-spin"}) // we show loading icon
            }
            this.setState({pending:pd})
    },
    onLoadingDone:function(){
        this.setState({pending:false});
        this.setState({icon:this.props.icon}) // we set icon back to the one set by props
    },
    /**
     * Handler of click event triggered on button
     */
    onClick:function() {
        AppDispatcher.handleViewAction({actionType: Constants.CHANGE_EVENT,
            buttonType:this.props.buttonType}
        );
        console.log("Button " + this.props.buttonType + " clicked");
    },
    /**
     * Renders component into view
     * @returns {XML}
     */
    render: function() {
        return(<Btn bsStyle="primary" bsSize="large" active={this.state.active} disabled={this.state.pending} onClick={this.onClick}>{this.props.icon!=undefined ? <Icon icon={this.state.icon}/> : ''}{this.props.text}</Btn>)
    }
});

module.exports=Button;