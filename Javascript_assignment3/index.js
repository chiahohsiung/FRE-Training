//JavaScript Assignment
//1. Write a JavaScript function that reverse a number.
//Example x = 32243;
//Expected Output : 34223 

// =================================================================
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

// OR
// =================================================================
const reverseNumber1 = (num) => {
    return  num >= 0 ? parseInt([...num+''].reverse().join("")) : -1 * parseInt([...num+''].reverse().join(""))
}
console.log(reverseNumber(-123))
console.log(reverseNumber1(-123))


//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, 
//e.g.,madam or nurses run.
// =================================================================
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

// Or
// =================================================================
const checkPalindrome1 = (str) => str === str.reverse()

console.log(checkPalindrome("madam"))
console.log(checkPalindrome("mdam"))


//3. Write a JavaScript function that generates all combinations of a string. 
//Example string : 'dog' 
//Expected Output : d,do,dog,o,og,g
const strCombinations = (str) => {
    const result = [];
    for(let i = 0; i < str.length; i++){
        result.push(str.charAt(i))
        for(let j = i+1; j < str.length; j++){
            result.push(result[result.length - 1] + str[j]);
        }
    }
    return result;
}
console.log(strCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'Assume punctuation and numbers symbols are not included in the passed string.
// =================================================================
const punctuateStrings = (str) => str.split('').sort().join('');
//Or 
// =================================================================
const punctuateStrings1 = (str) => {
    let result = '', arr = Array(122).fill(0);
    str.split('').forEach((ch) => arr[ch.charCodeAt(0)] += 1);
    arr.forEach((ele,i)=>{ 
            while(ele > 0){
                result += String.fromCharCode(i);
                ele--;
            }
    });
    return result;
}
console.log(punctuateStrings("webmaster"))
console.log(punctuateStrings1("webmaster"))


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

