Trainer notes
=============

Part 0
------
1.  Introduce project structure, say something about `package.json`, `bower.json`
2.  Delete `dist` folder contents
3.  Say something about `index.html`, `lib/starter.js`
4.  Talk about `gulpfile.js`
5.  Change something in `public/scss.scss`
6.  Run `gulpfile.js`
7.  Check `dist` folder
8.  Open `index.html` in browser

Part 1
------

1.  Create `Button.jsx` component in `components` folder
    - require `react-bootstrap/Button`
    - `componentDidMount` - log something
    - `getInitialState` - pending, active
    - render -> set active, style `{this.props.text}`
2.  Create `Buttonicon.jsx`
    - render `i` if `this.props.icon==undefined` -> fa-spinner, else `this.props.icon`
3.  Remove components from `index.html` ->prepare placeholders
    - h1 -> span for icon
    - div#content -> empty
    - add `{text:"Hello everybody", icon:"fa-thumbs-o-up"}` into `starter.start`
4.  change `starter.js`
    - relatively require .jsx components, require react
    - `React.renderComponent` into placeholders in `index.html`
        - h1 span `querySelector` - `Buttonicon({icon:'fa-thumbs-o-up'})`
        - `getElementById` #content - `Button(data)`
    - starter without var!

Part 2
------

1. change `index.html`
    - add `<div id="first-button"></div><div id="second-button"></div>` into div#content
    - change `starter.start` data to


    [
        {text:"Drink", icon:"fa-user"},
        {text:"Me", icon:"fa-beer"}
    ]
2.  Copy `lib/AppDispatcher.js` (and say something about it)
3.  Prepare `lib/Constants.js`
    - require `var keyMirror = require('react/lib/keyMirror');`
    - BUTTON_FIRST, BUTTON_SECOND
4.  Prepare `lib/Enums.js`
    - `var Enums =[];`
    - require `./Constants`
5.  `lib/ApplicationStore.js`
    - require .AppDispatcher, `var EventEmitter = require('events').EventEmitter;`
        `var merge = require('react/lib/merge');`
    - var model - activeButton BUTTON_FIRST
    - `var ApplicationStore = merge(EventEmitter.prototype, {`
    - `dispatcherIndex: AppDispatcher.register(function (payload) {`
    - add and remove some listenners, emitChange (
    - CHANGE_EVENT -> access model and change its value
    - getActiveButton
6.  Let the fun begin - `components/Button.jsx`
    - Reqire AppStore, Constants, AppDispatcher
    - `componentDidMount` - addListenner
    - `componentWillUnmount` - removeListenner
    - `onClick` - add to button when rendering
        - Dispatcher ->handleViewAction ->`this.props.buttonType`
    - `onChange` - if getActiveState -> this.setState
7. dirty add button type
        data[0].buttonType=Constants.BUTTON_FIRST;
        data[1].buttonType=Constants.BUTTON_SECOND;
    render components - two buttons

Part 3
------

1. `lib/Constants.js` - add temperature url, `lib/Enums.js` add value to apiary, explain apiary
2. `lib/AppStore.js`
    - refactor listenners and emiter
    - add `currentTemperature: {}` to model
    - add current temperature getter into store
3. Create `lib/RemoteData.js`
    - require `jqurey`, `promise`
    - `getCurrentTemperature method` -> `Promise.resolve` -> `return promise;`
4. `lib/AppStore.js`
    - `loadCurrentTemperature` -> emit loading, call promise from `libs/RemoteData.js`
    - explain then, (undefined, function...), call `setCurrentTemperature`
    - `setCurrentTemperature` -> set in model, emit loading done
5. `components/Button.jsx`
    - add loading and loadingDone listenners and handlers
    - helper
            iAmOrigin:function(){
            return Store.getActivebutton()== this.props.buttonType;
            },
    -disabled is dependend on pending
6. Create `components/CurrentTemperature.jsx`
    - initial state - value , dimension
    - listenner to loadingDone event
    - `this.setState` - from `Store.getCurrentTemperature()`
7. `lib/starter.js` add rendering of currentTemperature component
    -`React.renderComponent(CurrentTemperature(), document.querySelector('.alert div'));`

Part 4
------

1. `gulpfile.js`
    -change webpack config - `index-starter.js`, `filename : "[name].js"`
2. `package.json` - add express dependencies - list from branch, just tell.
3. create `views/Layout.jsx`
    - layout of page - watch attributes explain their names.
    - `{this.props.children}`
    - `dangerouslySetInnerHTML`
4. create `views/Content.jsx`
    - copy index.html content into render of this component
5. create `views/Index.jsx`
    - render content into layout with parameters
6.  explain `routes/index.js`
7.  explain `app.js`
8.  explain `www.js`
9.  run ;node www.js`


THE END... QUESTIONS ?