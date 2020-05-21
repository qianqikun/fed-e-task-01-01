// function Person(name) {
//     this.name = name
// }
// Person.prototype.say = function () {
//     console.log(`hi , my name is ${this.name}`)   
// }
// const qqk = new Person("qianqikun")
// qqk.say()

class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`hi , my name is ${this.name}`)
    }
    static create(name){
        return new Person(name);
    }
}
const qqk = Person.create('qianqikun')
qqk.say()