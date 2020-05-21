/**
 * 特殊类型
 * @flow
 */

const a: 'foo' = 'foo'

const type: 'success' | 'warning' | 'danger' = 'danger'

type StringOrNumber = string | number

const b: StringOrNumber = 100//100

const gender: ?number = null //100
