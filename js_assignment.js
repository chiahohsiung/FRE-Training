// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
console.log("Q1:");
function reverseNum(num){
    let original = num;
    let sign = -1;
    let result = 0;
    if (num < 0){
        num *= sign;
    }
    while (num > 0){
        result = result * 10 + num % 10;
        num = Math.floor(num/10);
    }
    if (original < 0) {
        result *= sign;
    }
    return result;
}
console.log("num = 1234");
let reversedNum = reverseNum(1234);
console.log('reverse number =',reversedNum);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, 
// e.g.,madam or nurses run.
console.log("Q2:");
let palidrome = input => {
    let word = input.replace(/[^0-9a-zA-Z]/g, "");
    word = word.toLowerCase();
    return word === word.split("").reverse().join("");
}

let q2 = palidrome("study javaScript");
let q2_2 = palidrome("nurses run");
console.log("study javacript is palindrome:", q2);
console.log("nurses run is panlindrome:", q2_2);

// 3. Write a JavaScript function that generates all combinations of a string.
//  Example string : 'dog' 
//  Expected Output : d,do,dog,o,og,g
console.log("Q3:");
let combination = input => {
    let set = [];
    for (let i = 0; i < input.length; i++){
        for (let j = i+1 ; j < input.length+1; j++) {
            set.push(input.slice(i,j));
        }
    }
    return set.join(",");
}

let q3 = combination("dog");
console.log(q3);

//  4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//  Example string : 'webmaster' 
//  Expected Output : 'abeemrstw'
//  Assume punctuation and numbers symbols are not included in the passed string.
console.log("Q4:");
let sortString = input => {
    return input.split("").sort().join("");
}

let q4 = sortString('webmaster');
console.log(q4);


//  5. Write a JavaScript function that accepts a string as a parameter and converts the first 
//  letter of each word of the string in upper case. 
//  Example string : 'the quick brown fox' 
//  Expected Output : 'The Quick Brown Fox'
console.log("Q5:");
let convertUpperCase = input => {
    let string = input.split(" ");
    let result = []
    for (let i = 0; i < string.length; i++){       
        result.push(string[i].charAt(0).toUpperCase()+ string[i].slice(1));
    }
    return result.join(" ");
}

let q5 = convertUpperCase('the quick brown fox');
console.log(q5);


// 6. Write a JavaScript function that accepts a string as a parameter and 
// find the longest wordwithin the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
console.log("Q6:");
let longestString = input => {
    let string = input.split(" ");
    let longest = string[0];
    for (let i = 0; i < string.length; i++) {
        if (string[i].length > longest.length) {
            longest = string[i];
        }
    }
    return longest;
}

let q6 = longestString('Web Development Tutorial');
console.log(q6);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the 
// number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, 
// we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
console.log("Q7:");
let countVowel = input => {
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if (input.charAt(i).match(/[aeiou]/g)) {
            count++;
        }
    }
    return count;
}

let q7 = countVowel('The quick brown fox');
console.log(q7);

// 8. Write a JavaScript function that accepts a number as a parameter and check the 
// number isprime or not. Note : A prime number (or a prime) is a natural number greater 
// than 1 that has no positive divisors other than 1 and itself.
console.log("Q8:");
let checkPrime = input => {
    if (input === 1) {
        return false;
    } else if (input === 2){
        return true;
    } else {
        for (let i = 2; i < input; i++) {
            if (input % i === 0) {
                return false;
            }
        }
        return true;
    }
}
let q8 = checkPrime(53);
console.log(q8);


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, 
// function, number,string, and undefined.
console.log("Q9:");
let type = input => {
    return typeof(input);
}
const cars = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus'};
let q9 = type(cars);
let q9_1 = type(12);
let q9_2 = type(true);
console.log(q9);
console.log(q9_1);
console.log(q9_2);


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
console.log("Q10:");
let matrix = input => {
    let i;
    let j;
    let result = [];
    for (i = 0; i < input; i++){
        let temp = [];
        for (j = 0; j < input; j++) {
            if (i === j){
                temp.push('1');
            } else {
               temp.push("0");
            }
        } result.push(temp);
        temp = [];
    }
    return result;
}

let q10 = matrix(5);
console.log(q10);


// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest 
// and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
console.log("Q11:");

let sortArray = input => {
    let newArray = input.sort();
    return newArray[1] + "," + newArray.slice(-2,-1);
}

let q11 = sortArray([7,6,5,4,3,2,1]);
console.log(q11);