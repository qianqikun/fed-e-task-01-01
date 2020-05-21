/**
 * 函数对象
 * @flow
 */

function foo(callback: (string, number) => void) {
    callback('string', 100)
}

foo(function (str, num) {
    //str=>'string'
    //num=>100
})