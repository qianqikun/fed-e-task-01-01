//迭代器 (iterator)
const s = new Set(['foo','bar','baz'])
const iterator = s[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())