/********************Implementation of Array.forEach ********************************/

const arr = [1, 2, 3];



Array.prototype.myForEach = function (callBackFn) {
    for (let i = 0; i < this.length; i++) {
        callBackFn(this[i], i, this);
    }
}

arr.myForEach((ele, index, arr) => {
    arr[index] = ele * 2;
});
console.log(arr);

arr.forEach((ele, index, arr) => {
    arr[index] = ele * 2;
});
console.log(arr);


/********************Implementation of Array.map ********************************/




const arr = [1, 2, 3];

Array.prototype.myMap = function (callBackFn) {
    const map = [];
    for (let i = 0; i < this.length; i++) {
        map.push(callBackFn(this[i], i, this));
    }
    return map;
}

console.log(arr.myMap(ele => ele * 2));
console.log(arr.map(ele => ele * 2));


/********************Implementation of Array.filter ********************************/





Array.prototype.myFilter = function (callBackFn) {
    const filter_arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callBackFn(this[i], i, this)) {
            filter_arr.push(this[i]);
        }
    }
    return filter_arr;
}

const arr = [1, 2, 3, 2, 2];

console.log(arr.myFilter(ele => ele === 2));
console.log(arr.filter(ele => ele === 2));


/********************Implementation of Array.reduce ********************************/


Array.prototype.myReduce = function (callBackFn, initVal) {
    let acc = initVal;
    if (acc === undefined) {
        acc = this[0];
        for (let i = 1; i < this.length; i++) {
            acc = callBackFn(acc, this[i], i, this);
        }
    } else{
        for (let i = 0; i < this.length; i++) {
            acc = callBackFn(acc, this[i], i, this);
        }
    }
    return acc;
}

const arr = [1, 2, 3, 2, 2];
console.log(arr);
console.log(arr.myReduce((acc, cur) => acc + cur, 3));
console.log(arr.reduce((acc, cur) => acc + cur, 3));

/********************Implementation of Array.some ********************************/

Array.prototype.mySome = function (callBackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callBackFn(this[i])) {
            return true;
        }
    }
    return false;
}




/********************Implementation of Array.every ********************************/

Array.prototype.myEvery = function (callBackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callBackFn(this[i])) {
            return false;
        }
    }
    return true;
}