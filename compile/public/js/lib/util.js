"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = (function () {
    function Util() {
    }
    Util.prototype.abortEvent = function (evt) {
        evt.preventDefault();
        return false;
    };
    return Util;
}());
var util = new Util();
exports.default = util;
