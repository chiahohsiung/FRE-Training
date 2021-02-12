//JavaScript Assignment
//1. Write a JavaScript function that reverse a number.
//Example x = 32243;
//Expected Output : 34223 
const reverseNumber = (x) => {
let  res = 0, isNeg = false;
if(x < 0) {
    isNeg = true;
    x *= -1;
};
while(x !== 0){
res = (res * 10) + (x % 10);
x = Math.floor(x/10);
}
if(isNeg === true) return -1 * res;
return res;
}
console.log(reverseNumber(-123))