/**
 * 函数对象
 * 
 */
function foo(callback) {
  callback('string', 100);
}

foo(function (str, num) {
  return 100;
});