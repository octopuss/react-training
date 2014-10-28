/**
 * @jsx React.DOM
 */

var React = require('react');

var Layout = React.createClass({
    render: function () {
        var generated = this.props.generated;
        var script = 'starter.start()';
        var js = 'js/'+this.props.js+'.js';
        var starter = 'js/'+this.props.js+'-starter.js';
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>{this.props.title}</title>
                    <link href="css/main.css" rel="stylesheet" />
                </head>
                <body>
                     {this.props.children}
                    <script src={starter}></script>
                    <script src={js}></script>
                    <script dangerouslySetInnerHTML={{__html: script}} />
                </body>
            </html>
            );
    }
});
module.exports=Layout;