//////////////////////////////enums//////////////////////////////////////
var myFunc;
myFunc = function (length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
};
console.log(myFunc(5, 'x'));
