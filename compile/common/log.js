"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log() {
    }
    Log.prototype.log = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        var l_env = process.env.NODE_ENV || "development";
        if (l_env.trim().toLowerCase() !== 'production')
            console.log.apply(console, obj);
    };
    Log.prototype.trace = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        var l_env = process.env.NODE_ENV || "development";
        if (l_env.trim().toLowerCase() !== 'production')
            console.trace.apply(console, obj);
    };
    return Log;
}());
var Logger = new Log();
exports.default = Logger;
