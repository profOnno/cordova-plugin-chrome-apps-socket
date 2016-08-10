/*
 * aarg hope this will work
 */

var ws = null;
var ChromeSocket = {

    create: function (success, error, options) {
       /* 
        function postit(callback) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) { 
                    callback(xhttp.responseText);
                }
            };

            xhttp.open("POST", "http://localhost:8001/", true); // TODO add cors for 127.0.0.1?
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({ action: "create" }));
        };
        */

        console.log("create called");
        console.log(JSON.stringify(options));
    //    postit(function (res){
            return success("aargh");
     //   });

            // start proxy ws-socket
            // connect to proxy
            //var socketInfo = { "socketId": "bliebla" };
            // nextline doesn't seem to work???
    //        return success(socketInfo); //run callback

        }

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
