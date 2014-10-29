react-training
==============

Part 4
------

*Technologies*
*   Express.js
*   express-react-views
*   Heroku
*   node-jsx

In this part the application is made isomorphic. The `React` components introduced in `part-2` are generated on `node.js` server using `Express.js` application framework and `express-react-views` as view engine. `node-jsx` module is used to find `jsx` modules. On client onlz `React` events are bind to existing layout and application is initialized.

To run application use command below


    node www.js

Application can be also simply deployed using provided `Procfile` on `Heroku`. Final result is deployed [here](http://react-training.herokuapp.com/).