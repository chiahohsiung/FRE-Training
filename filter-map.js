Array.prototype.myFilter = function (cb) {
    const filter = []
    for (let i = 0; i < this.length; i++) {
        let result = cb(this[i], i, this)
        if (result) filter.push(this[i])
    }
    return filter
}
const arr = [1, 2, 3, 4, 5, 2, 5, 6]
let filt = arr.myFilter((elem) => elem !== 2)
console.log(filt)

Array.prototype.myReduce = function (cb, init) {
    let acc = init
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc
}
