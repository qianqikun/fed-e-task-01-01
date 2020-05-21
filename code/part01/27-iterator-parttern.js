//迭代器设计模式

//场景：你我协同开发一个任务清单应用

//我的代码========================


const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '英语'],
    work: ['喝茶'],
    each: function (callback) {
        const all = [].concat(this.life, this.learn, this.work)
        for (const item of all) {
            callback(item)
        }
    },
    [Symbol.iterator]: function () {
        const all = [...this.life, ...this.learn, ...this.work]
        let index = 0;
        return {
            next: function () {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}



//你的代码========================

// todos.each(function (item) {
//     console.log(item)
// })

for (const item of todos) {
    console.log(item)
}