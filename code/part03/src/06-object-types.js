/**
 * 对象类型
 * @flow
 */

const obj1: { foo: string, bar: number } = {
    foo: 'sss', bar: 123
}
const obj2: { foo?: string, bar: number } = {
    foo: '4445', bar: 111
}
const obj3: { [string]: string } = {}
obj3.key1 = 'string'
obj3.key2 = 'ssss'