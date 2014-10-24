/** @jsx React.DOM */

var React = require('react');

var ButtonIcon = React.createClass({

    render:function(){


        if(this.props.icon==undefined) {
            return(<i className="fa fa-spinner fa-spin pull-left"/>);
        }else {

            var iconClass="fa pull-left "+this.props.icon;
            return(<i className={iconClass}/>);
        }

    }
});

module.exports=ButtonIcon;