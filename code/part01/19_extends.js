
class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`hi , my name is ${this.name}`)
    }
    static create(name) {
        return new Person(name);
    }
}
class Student extends Person {
    constructor(name, number) {
        super(name);
        this.number = number;

    }
    hello() {
        super.say();
        console.log(`my school number is ${this.number}`)
    }
}
const qqk = new Student('qqk', 1)
qqk.hello()