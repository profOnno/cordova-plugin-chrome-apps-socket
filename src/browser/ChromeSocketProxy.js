/*
 * aarg hope this will work
 */


var ChromeSocket = {

    create: function (success, error, options) {
        console.log("create called");
        console.log(JSON.stringify(options));
        // start proxy ws-socket
        // connect to proxy
        var socketInfo = { "socketId": "bliebla" };
        // nextline doesn't seem to work???
//        return success(socketInfo); //run callback
        return success("bliebla"); //run callback
    },

    connect: function (success, error, options) {
        console.log("connect called");
        console.log(JSON.stringify(options));
        return success();
    },

    write: function () {
        console.log("write called");
    },

    read: function () {
        console.log("read called");
    }
};

module.exports = ChromeSocket;
require('cordova/exec/proxy').add('ChromeSocket', ChromeSocket);
