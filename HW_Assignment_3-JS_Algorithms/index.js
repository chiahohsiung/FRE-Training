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

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("foirrof")); // false
// console.log(isPalindrome("nurses run")); // true
// console.log(isPalindrome("hannah")); // true

// 3. Write a JavaScript function that generates all combinations of a string. Example string: 'dog' Expected Output: d,do, dog, o, og, g

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.Example string: 'webmaster' Expected Output: 'abeemrstw'. Assume punctuation and numbers symbols are not included in the passed string.
const alphabetizeString = str => {

    let array = str.split("");
    array.sort();
    let sortedString = array.join("");
    return sortedString;
};

// console.log(alphabetizeString("webmaster"));
// console.log(alphabetizeString("bza"));
// console.log(alphabetizeString("zsrmigc"));

// 5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Example string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'

const capitalizeStr = function (string) {
    let array = string.split(" ");
    let capitalizedArray = [];
    // let newString = ""; // this works too
    array.forEach(function (ele, i, array) {

        capitalizedArray.push(ele[0].toUpperCase() + ele.slice(1));
        // the below version works too:
        // newString = newString + ele[0].toUpperCase() + ele.slice(1) + " "

    });
    let capitalizedString = capitalizedArray.join(" ");
    // return newString; // this works too
    return capitalizedString;
};

// console.log(capitalizeStr("the quick brown fox"));
// console.log(capitalizeStr("don't judge the truth by people, judge people by the truth."));
// console.log(capitalizeStr("the republic by plato"));
// console.log(capitalizeStr("tao te ching by lao tzu"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Example string: 'Web Development Tutorial' Expected Output: 'Development'

function longestWord(str) {
    let array = str.split(" ");
    let longestWrd = "";

    for (let i = array.length - 1; i >= 0; i--) {
        let ele = array[i];
        if (longestWrd.length > ele.length) {
            continue;
        } else {
            longestWrd = ele;
        }
    }
    return longestWrd;
};

// console.log(longestWord("Web Development Tutorial"));
// console.log(longestWord("Abdullah Ahmad Wafy"));
// console.log(longestWord("max maxer maxest maximus"));
// console.log(longestWord("bigger biggest big"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as a vowel here. Example string: 'The quick brown fox' Expected Output: 5
const vowelCount = string => {
    //let vowels = "AEOUIaeoui"; // this works too without lowercasing below
    let vowels = "aeoui";
    let array = string.split("");
    let vowelCount = 0;
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (vowels.includes(ele.toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount;
};

// console.log(vowelCount("The quick brown fox"));
// console.log(vowelCount("The Analects of Confucius"));
// console.log(vowelCount("abcdefghijklmnopqrstuvwxyz"));


// 8. Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// this brute-force my-solution works below:
function isPrime(num) {
    const primeSingleDigits = "23 5 7";
    if (num <= 1) {
        return `${num} is NOT a prime number`; // or return false;
    }
    if (primeSingleDigits.includes(num)) { // JS implicit data-type coercion occurs here
        return `${num} is a prime number`; // or return true;
    }
    if (num % 2 !== 0 &&
        num % 3 !== 0 &&
        num % 4 !== 0 &&
        num % 5 !== 0 &&
        num % 6 !== 0 &&
        num % 7 !== 0 &&
        num % 8 !== 0 &&
        num % 9 !== 0
    ) {
        return `${num} is a prime number` // or return true;
    } else {
        return `${num} is NOT a prime number`; // or return false;
    }
};
// not prime numbers tests:
// console.log("should NOT be prime numbers: ")
// console.log(isPrime(-1));
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log("---")
// prime numbers test cases:
// console.log("should be prime numbers: ")
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(11));
// console.log(isPrime(13));
// console.log(isPrime(17));
// console.log(isPrime(19));
// console.log(isPrime(23));
// console.log(isPrime(29));
// console.log(isPrime(31));
// console.log(isPrime(37));
// console.log(isPrime(41));
// console.log(isPrime(43));
// console.log(isPrime(47));
// console.log(isPrime(53));
// console.log(isPrime(59));
// console.log(isPrime(61));
// console.log(isPrime(67));
// console.log("3 digit prime numbers: ")
// console.log(isPrime(113));
// console.log(isPrime(241));
// console.log(isPrime(457));
// console.log(isPrime(719));
// console.log(isPrime(1129));
// console.log(isPrime(3989));
// console.log("---")
// not prime numbers test cases:
// console.log("should NOT be prime numbers: ")
// console.log(isPrime(25));
// console.log(isPrime(36));
// console.log(isPrime(18));
// console.log(isPrime(15));
// console.log(isPrime(14));
// console.log(isPrime(20));
// console.log(isPrime(22));
// console.log(isPrime(42));
// console.log(isPrime(45));
// console.log(isPrime(54));
// console.log(isPrime(1025));
// console.log(isPrime(524));
// console.log(isPrime(630));
// console.log("---")

// 9.Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function dataType(x) {
    // this below works too:
    // const dataType = typeof x;
    // return `${x} is a ${dataType}`;
    // console.log(typeof NaN); // output: object
    // console.log(typeof null); // output: number
    return typeof x;
};

// console.log(dataType(3));
// console.log(dataType("3"));
// console.log(dataType(undefined));
// console.log(dataType("chow mein"));
// console.log(dataType(() => console.log("I am a function!")));
// console.log(dataType(true));
// console.log(dataType({}));
// console.log(dataType(dataType));
// console.log(dataType(["hello", 78, false]));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.


// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively.Sample array: [1, 2, 3, 4, 5]Expected Output: 2, 4

// 21. Write a JavaScript function to get all possible subset with a fixed length(for example 2)combinations in an array.Sample array: [1, 2, 3] and subset length is 2 Expected output: [[2, 1], [3, 1], [3, 2], [3, 2, 1]]. This question is a subset question. 
// For example:
// input：[1, 2, 3]
// length: 2 < --------- the length for sub arr
// output: [[1, 2], [1, 3], [2, 3]] < --------no duplicate sub arr like[2, 1][3, 2]
// example 2~
//     input: [4, 6, 5, 4, 2]
// length: 3
// output: [[2, 4, 5], [2, 4, 6], [2, 5, 6], [4, 5, 6]]
// 11: 18
// example 3~
//     input: [4, 6, 5, 4, 2]
// length: 2
// output: [[2, 4], [2, 5], [2, 6], [4, 5], [4, 6], [5, 6]]