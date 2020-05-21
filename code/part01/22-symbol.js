//Symbol 数据类型

// //share.js============================
// const cache = {}
// //a.js ===============================
// cache['foo'] = Math.random()
// //b.js ===============================
// cache['foo'] = '123'
// console.log(cache)

// const s = Symbol();

// console.log(s)
// console.log(Symbol()===Symbol())

// const obj = {};
// obj[Symbol()] = "123"
// obj[Symbol()] = "456"
// console.log(obj)

// const obj = {
//     [Symbol()]: 123
// }
// console.log(obj)


//a.js=============================

const name = Symbol();
const person = {
    [name]: 'qqk',
    say() {
        console.log(this[name])
    }
}
person.say()


console.log(Object.getOwnPropertySymbols(person))
