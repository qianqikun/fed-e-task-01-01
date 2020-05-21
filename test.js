
// let wait = ms => new Promise(resolve => { setTimeout(resolve, ms) })
async function foo() {
    await wait(10);
    let a = "hello"
    await wait(10);
    let b = "lagou"
    await wait(10);
    let c = "I love U"
    console.log(`${a} ${b} ${c}`)
}
// foo()
async function bar() {
    let a = await new Promise(resolve => { setTimeout(() => resolve('hello'), 1000) });
    let b = await new Promise(resolve => { setTimeout(() => resolve('lagou'), 1000) });
    let c = await new Promise(resolve => { setTimeout(() => resolve('I love U'), 1000) });
    console.log(`${a} ${b} ${c}`)
}
bar()