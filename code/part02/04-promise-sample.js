//Promise 基本示例

const promise = new Promise(function (resolve, reject) {
    // resolve(100)
    reject(new Error('promise rejected'))
})

promise.then(function (value) {
    console.log('resolved', value)
}, function (value) {
    console.log('rejected', value)
})

console.log('end')