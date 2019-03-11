"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(studentName) {
        this.studentName = studentName;
    }
    Student.prototype.say = function () {
        return "Hello, my name is " + this.studentName;
    };
    return Student;
}());
exports.Student = Student;
