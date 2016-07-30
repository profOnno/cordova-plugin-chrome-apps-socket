#!/usr/bin/env node
module.exports = function(context) {
    console.log("starting proxyServerHook");
    console.log(JSON.stringify(context));
};
