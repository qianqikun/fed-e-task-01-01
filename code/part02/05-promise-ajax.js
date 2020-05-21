//Promise 方式的AJAX
function ajax(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}
ajax("../api/uers.json").then(function (res) {
    console.log('resolved',res)
}, function (err) {
    console.log('rejected',err)
})