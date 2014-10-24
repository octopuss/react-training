/** @jsx React.DOM */
/**
 * Current temperature react component
 * @type {exports}
 */
var React = require('react');
var Store = require('../lib/ApplicationStore');
var Constants = require('../lib/Constants');

var CurrentTemperature = React.createClass({
    getInitialState: function(){
        return {value:0,dimension:"(not loaded)"};
    },
    componentDidMount: function(){
        Store.addListenner(Constants.LOADING_DONE_EVENT,this.load);
    },
    componentWillUnmount: function(){
        Store.removeListenner(Constants.LOADING_DONE_EVENT,this.load);
    },
    load: function(){
        console.log("load detected");
        this.setState(Store.getCurrentTemperature());
    },
    render:function(){
        var out = "Temperature is " + this.state.value + " " + this.state.dimension;
        return(<b>{out}</b>);
    }
});

module.exports=CurrentTemperature;