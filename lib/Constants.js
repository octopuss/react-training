/**
 * Constants in application
 * @type {keyMirror|exports}
 */
var keyMirror = require('react/lib/keyMirror'); // makes enumeration from provided field in format below ... e.g. Contstants.LOCALE

var Constants = keyMirror({
    CURRENT_TEMPERATURE_URL:null,
    CHANGE_EVENT:null,
    LOADING_EVENT:null,
    LOADING_DONE_EVENT:null,
    BUTTON_FIRST:null,
    BUTTON_SECOND:null
});
module.exports=Constants;