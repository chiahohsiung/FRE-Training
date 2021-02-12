/*1. Reverse a number*/
function reverseNum(num) {
    return parseFloat(
        num
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(num);
}

console.log(reverseNum(12345));
console.log(reverseNum(-12345));

/*2. Check palindrome*/
function checkPalidrome(str) {
    let lo = 0, hi = str.length - 1;
    while(lo < hi) {
        if(str[lo] !== str[hi])
            return false;
        lo++;
        hi--;  
    }
    return true;
}

console.log(checkPalidrome('abcba'));
console.log(checkPalidrome('hello'));

/*3. All combinations of a string*/
function allCombination(str) {
    
}