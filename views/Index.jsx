/** @jsx React.DOM */
var React = require('react');

var Layout = require('./Layout.jsx');
var Content = require('../components/Content.jsx');

var Index = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <Layout title={this.props.title} generated={this.props.generated} js={this.props.js}>
                <Content/>
            </Layout>
            );
    }
});

module.exports = Index;