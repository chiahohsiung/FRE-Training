// 1. Write a JavaScript function that reverses a number.
// Example x = 32243; Expected Output: 34223
function reverseNum(x) {
    let str = x.toString();
    let arr = str.split('');
    arr.reverse();
    let reStringified = arr.join('');
    let num = parseInt(reStringified, 10);
    return num;
};

// console.log(reverseNum(32243));
// console.log(reverseNum(123));
// console.log(reverseNum(5959));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {

    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (ele === " ") {
            arr.splice(i, 1); // eliminating empty spaces
        }
    }
    let arrSansSpace = arr.slice(0); // copy of array without empty spaces before being reversed
    //console.log("arrSansSpace:", arrSansSpace);
    arr.reverse(); // reversing the elements in the array
    //console.log("reversedArr: ", arr);
    let strSansSpace = arrSansSpace.join("");
    let reversedStr = arr.join("");
    if (strSansSpace === reversedStr) {
        return "it is a palindrome"; // or return true;
    } else {
        return "it is not a palindrome"; // or return false; 
    }
};

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("foirrof")); // false
console.log(isPalindrome("nurses run")); // true
console.log(isPalindrome("hannah")); // true

// 3. Write a JavaScript function that generates all combinations of a string.Example string: 'dog' Expected Output: d,do, dog, o, og, g 