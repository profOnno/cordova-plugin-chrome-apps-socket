/*
 * aarg hope this will work
 */


var ChromeSocket = {

    create: function (success, error) {
        console.log("create called");
        // start proxy ws-socket
        // connect to proxy
        return success(); //run callback
    },

    connect: function () {
        console.log("connect called");
    },

    write: function () {
        console.log("write called");
    },

    read: function () {
        console.log("read called");
    }
}

module.exports = ChromeSocket;
require('cordova/exec/proxy').add('ChromeSocket', ChromeSocket);
