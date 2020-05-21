//实现可迭代接口（Iterable）
// const obj = {
//     [Symbol.iterator]() {
//         return {
//             next() {
//                 return {
//                     value: 'qqk',
//                     done: true
//                 }
//             }
//         }
//     }
// }

const obj = {
    store: ['foo', 'bar', 'baz'],
    [Symbol.iterator]() {
        let index = 0;
        let self = this;
        return {
            next() {
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++;
                return result;
            }
        }
    }
}
for (const item of obj) {
    console.log(item)
}