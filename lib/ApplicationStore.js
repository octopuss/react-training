var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Constants = require('./Constants');
var Data = require('./RemoteData');


var model = {
    activeButton:Constants.BUTTON_FIRST,
    currentTemperature: {}
};


var ApplicationStore = merge(EventEmitter.prototype, {

    getActivebutton:function(){
       return model.activeButton;
    },

    getCurrentTemperature:function(){
        return model.currentTemperature;
    },

    loadCurrentTemperature:function(){
        this.emitEvent(Constants.LOADING_EVENT);
        var promise = Data.getCurrentTemperature();
        promise.then(
            function(res){                              // success
                console.log("success");
                ApplicationStore.setCurrentTemperature(res);
            }).then(undefined, function(err){ //error - more thens, only one error on final ;)
                console.log(err);
            });
    },
    setCurrentTemperature:function(data){
            console.log("data loaded");
            console.log(data);
            model.currentTemperature=data;
            ApplicationStore.emitEvent(Constants.LOADING_DONE_EVENT);
    },


    //-----------------------------------------------
    emitEvent: function (event) {
        console.log("Emitting " + event);
        this.emit(event);
    },
    addListenner: function(eventType, callback) {
        this.on(eventType, callback);
    },
    removeListenner: function(eventType, callback){
        this.removeListener(eventType, callback);
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action;
        console.log("Performed action-->");
        console.log(action);
        switch (action.actionType) {
            case Constants.CHANGE_EVENT:
                //do some business logic
                model.activeButton=action.buttonType;
                if(action.buttonType==Constants.BUTTON_FIRST){
                    ApplicationStore.loadCurrentTemperature();
                }
                // after that emit change so listenners can hear us.
                ApplicationStore.emitEvent(Constants.CHANGE_EVENT);
                break;
        }

        return true; // No errors. Needed by promise in Dispatcher.

    })
});
module.exports=ApplicationStore;
