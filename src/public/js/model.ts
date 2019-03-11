export class Student {

    studentName: string;

    constructor(studentName: string) {
        this.studentName = studentName;
    }

    public say() : string {
        return `Hello, my name is ${this.studentName}`;
    }
}