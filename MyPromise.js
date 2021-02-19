const getRandomTime = () => {
    return Math.floor(Math.random() * 3)
}
class MyPromise {
    thenCallBackQueue = []
    catchCallBackQueue = []
    currentData
    promisestate = "pending"

    constructor(executor) {
        try {
            executor(this.resolve, this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(data) {
        setTimeout(() => {
            this.promisestate = "fulfilled"
            if (!this.thenCallBackQueue.length) return
            this.currentData = data
            while (this.thenCallBackQueue.length) {
                const cb = this.thenCallBackQueue.shift()

                if (this.currentData instanceof MyPromise) {
                    this.currentData.then((dataFromRes) => {
                        this.currentData = cb(dataFromRes)
                    })
                } else {
                    this.currentData = cb(this.currentData)
                }
            }
        }, 0)
    }
    reject(error) {
        this.promisestate = "rejected"
        setTimeout(() => {
            if (!this.catchCallBackQueue.length) return
            this.currentData = error
            while (this.catchCallBackQueue.length) {
                const cb = this.catchCallBackQueue.shift()

                if (this.currentData instanceof MyPromise) {
                    this.currentData.then((dataFromRes) => {
                        this.currentData = cb(dataFromRes)
                    })
                } else {
                    this.currentData = cb(this.currentData)
                }
            }
        }, 0)
    }
    then(thencallbackfun) {
        this.thenCallBackQueue.push(thencallbackfun)
        return this
    }
    catch(error) {
        if (this.thenCallBackQueue.length) {
            const cb = this.catchCallBackQueue.shift()
            cb(error)
        }
    }

    static all(array) {
        let counter = 0
        const resolveData = new Array(array.length)

        return new MyPromise((res, rej) => {
            array.forEach((ele, i) => {
                if (ele instanceof MyPromise) {
                    ele.then((data) => {
                        counter++
                        resolveData[i] = data
                        if (counter === array.length) res(resolveData)
                    }).catch((err) => rej(err))
                } else {
                    counter++
                    resolveData[i] = ele
                }
            })
        })
    }

    // promise.all
}

// const p = new MyPromise((resolve, reject) => {
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
//     setTimeout(() => {
//         console.log('promise');
//         resolve('hello');
//     }, timer * 1000);
// }).then(data => {
//     console.log(data);
//     return new MyPromise((res, rej) => {
//         res('Dio');
//     });
// }).then(data => console.log(data));

console.log(1)
const p = new Promise((resolve, reject) => {
    resolve(2)
}).then((data) => console.log(data))
console.log(3)

console.log(p)
