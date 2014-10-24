/** @jsx React.DOM */
    /*
    Button
     */
//dependencies
var Btn = require('react-bootstrap/Button');
var Icon = require('./Buttonicon.jsx');
var React = require('react');

//business code
var Button = React.createClass({
    getInitialState:function(){
        return {
          pending:false,
          active : false
        };
    },
    componentDidMount:function(){
        console.log("Button component was mount to dom");
    },
    render: function() {
        return(<Btn bsStyle="primary" bsSize="large" active={this.state.active}>{this.props.icon!=undefined ? <Icon icon={this.props.icon}/> : ''}{this.props.text}</Btn>)
    }
});

module.exports=Button;