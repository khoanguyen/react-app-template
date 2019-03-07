"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTP = __importStar(require("http"));
var main_1 = require("./public/scripts/main");
var http = HTTP.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("\n    <html><body>\n      <h1>Hello, world!</h1>\n      You asked for: " + request.url + " - " + main_1.MY_STRING + "\n      <p>\n        Everything good? Lets get going. \n      </p>\n      <p>\n        App was moved, but it's not refreshed.\n        What are you thinking ?\n        Cool, no nead to compile!!!:D\n      </p>\n    </body></html>");
}).listen(3333);
