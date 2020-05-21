//Set 数据结构
const s = new Set();
s.add(1).add(4).add(3).add(2)
console.log(s)
// s.forEach(i => console.log(i))
// for (let i of s){
//     console.log(i)
// }
console.log(s.delete(1))
console.log(s.size)
console.log(s.has(100))
const arr = [1, 2, 3, 4, 5, 2, 1, 3]
const result = Array.from(new Set(arr));
console.log(result)