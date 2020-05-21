//ECMAScript 2017
// const obj = {
//     foo: 'value1',
//     bar: 'value2'
// }

// Object.values---------------------------

// console.log(Object.values(obj))

// Object.entries--------------------------

// console.log(Object.entries(obj))
// for (const [key, value] of Object.entries(obj)) {
//     console.log(value)
// }

// Object.getOwnPropertyDescriptor---------

const p1 = {
    firstName: 'Lei',
    lastName: 'Wang',
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
// console.log(p1.fullName)

// const p2 = Object.assign({}, p1)
// p2.firstName = 'qikun'
// console.log(p2)
const descriptors = Object.getOwnPropertyDescriptors(p1)
console.log(descriptors)
const p2 = Object.defineProperties({}, descriptors)

console.log(p2)
p2.firstName = 'qikun'
console.log(p2.fullName)