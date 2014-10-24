var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Constants = require('./Constants');
var Enums = require('./Enums');


var model = {
    activeButton:Constants.BUTTON_FIRST
};


var ApplicationStore = merge(EventEmitter.prototype, {

    getActivebutton:function(){
       return model.activeButton;
    },

    //-----------------------------------------------
    emitChange: function () {
        console.log("Emitting change...");
        this.emit(Constants.CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action;
        console.log("Performed action-->");
        console.log(action);
        switch (action.actionType) {
            case Constants.CHANGE_EVENT:
                //do some business logic
                model.activeButton=action.buttonType;
                // after that emit change so listenners can hear us.
                ApplicationStore.emitChange();
                break;
        }

        return true; // No errors. Needed by promise in Dispatcher.

    })
});
module.exports=ApplicationStore;
