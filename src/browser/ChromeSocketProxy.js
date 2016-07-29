/*
 * aarg hope this will work
 */


var ChromeSocket = {

    create: function () {
        console.log("create called");
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
