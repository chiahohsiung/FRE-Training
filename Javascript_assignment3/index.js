//JavaScript Assignment
//1. Write a JavaScript function that reverse a number.
//Example x = 32243;
//Expected Output : 34223 
const reverseNumber = (x) => {
let  result = 0, isNeg = false;
if(x < 0) {
    isNeg = true;
    x *= -1;
};
while(x !== 0){
    result = (result * 10) + (x % 10);
    x = Math.floor(x/10);
}
if(isNeg === true) return -1 * result;
return result;
}
console.log(reverseNumber(-123))

//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, 
//e.g.,madam or nurses run.
const checkPalindrome = (str) => {
    let left = 0; right = str.length - 1;
    while(left < right){
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(checkPalindrome("madam"))
console.log(checkPalindrome("mdam"))


