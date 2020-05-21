// const person = {
//     name: 'qqk',
//     age: '20'
// }
// const personProxy = new Proxy(person, {
//     deleteProperty(target, property) {
//         console.log("delete", property)
//         delete target[property]

//     },
//     get(target, property) {
//         return property in target ? target[property] : undefined
//         // console.log(target, property)
//         // return 100
//     },
//     set(target, property, value) {
//         console.log(target, property, value)
//         if (property === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`)
//             }

//         }
//         target[property] = value
//     }
// })
// personProxy.age = 111
// personProxy.gender = true
// delete personProxy.age
// console.log(personProxy)


const list = [];
const listProxy = new Proxy(list, {
    set(target, property, value) {
        console.log('set', property, value);
        target[property] = value;
        return true
    }
})
listProxy.push(100);
listProxy.push(100);
