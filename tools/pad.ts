import { object } from "prop-types";
import { isFunction } from "util";

class A { }

class B extends A { }

const c = function () {

}
const d = { a: 10 };

console.log((new B()) instanceof A);
console.log(c instanceof object);
console.log(isFunction(c));