
let wait = ms => new Promise(resolve => { setTimeout(resolve, ms) })
async function foo() {
    await wait(10);
    let a = "hello"
    await wait(10);
    let b = "lagou"
    await wait(10);
    let c = "I love U"
    console.log(`${a} ${b} ${c}`)
}
foo()
