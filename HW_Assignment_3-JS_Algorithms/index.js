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


// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. Sample array: [1, 2, 3, 4, 5] Expected Output: 2, 4
function penultimateNums(arr) {
    if (arr.length === 0) {
        console.log("array is empty - contains no numbers!");
        return; // without this return statement, the other console log on line 242 executes producing the message in terminal: Infinity -Infinity
    } else if (arr.length === 1 || arr.length === 2) {
        console.log(...arr);
        return; // ditto
    }
    let lowestNum = Math.min(...arr);
    let indexLowestNum = arr.indexOf(lowestNum);
    arr.splice(indexLowestNum, 1);
    let highestNum = Math.max(...arr);
    let indexHighestNum = arr.indexOf(highestNum);
    arr.splice(indexHighestNum, 1);
    let penultimateLowest = Math.min(...arr);
    let penultimateHighest = Math.max(...arr);
    console.log(penultimateLowest, penultimateHighest);
    return;
}

//penultimateNums([1, 2, 3, 4, 5]); // no console.log needed since nothing is being returned in the function / return statements purely to exit the function.
// penultimateNums([]);
// penultimateNums([1]);
// penultimateNums([1, 2]);
// penultimateNums([56, 51, 57, 59, 58, 52]); // 52, 58
// penultimateNums([3, 6, 8, 19, 34, 21, 6, 908, 45, 333]); // 6, 333

// 12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself). Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const isPerfect = num => {
    let factors = []; // not 'divisors' since divisors can have remainders, but 'factors' cannot!
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    let sum = factors.reduce((accum, ele, i, array) => {
        return accum + ele;
    });
    // console.log(sum);
    // console.log(typeof sum);

    if (sum === num) {
        // console.log(true);
        // console.log((sum + num) / 2);
        if ((sum + num) / 2 === num) {
            //console.log(true);
            return `${num} is a perfect number!`;
        } else {
            return `${num} is NOT a perfect number! It's imperfect.`;
        }
    } else {
        return `${num} is NOT a perfect number! It's imperfect.`;
    }
};

// console.log(isPerfect(0)); // TypeError: Reduce of empty array with no initial value // since 0 is less than i (for loop condition), so nothing gets pushed in the array
// console.log(isPerfect(1)); // TypeError: Reduce of empty array with no initial value // since 1 is not less than i but equal to it, so nothing gets pushed in the array, but besides for 1 if it did pass the for loop condition, it would not pass the if-statement condition and nothing would get pushed into the array
// reduce method requires an initial value if array is empty or a non-empty array.
// console.log(isPerfect(2));
// console.log(isPerfect(3));
// console.log(isPerfect(4));
// console.log(isPerfect(5));
// console.log(isPerfect(6)); // is perfect
// console.log(isPerfect(9));
// console.log(isPerfect(11));
// console.log(isPerfect(28)); // is perfect
// console.log(isPerfect(100));
// console.log(isPerfect(496)); // is perfect
// console.log(isPerfect(8128)); // is perfect
// console.log(isPerfect(23489));


// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    };
    return factors;
};

// console.log(factors(6));
// console.log(factors(15));
// console.log(factors(28));

// 14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) Here 46 is the amount and 25, 10, 5, 2, 1 are coins. Output: 25, 10, 10, 1
function amountToCoins(amt, coins) {
    // counters:
    // let quarter = 0;
    // let dime = 0;
    // let nickel = 0;
    // let twoCentPiece = 0;
    // let penny = 0;
    let change = [];
    while (amt - coins[0] >= 0) {
        amt -= coins[0];
        change.push(25);
        //quarter++;
        //console.log("after quarters: ", amt);
    }
    //console.log("quarters: ", quarter);
    while (amt - coins[1] >= 0) {
        amt -= coins[1];
        change.push(10);
        //dime++;
        //console.log("after dimes: ", amt);
    }
    //console.log("dimes: ", dime);
    while (amt - coins[2] >= 0) {
        amt -= coins[2];
        change.push(5);
        //nickel++;
        //console.log("after nickels: ", amt);
    }
    //console.log("nickels: ", nickel);
    while (amt - coins[3] >= 0) {
        amt -= coins[3];
        change.push(2);
        //twoCentPiece++;
        //console.log("after two-cent piece: ", amt);
    }
    //console.log("two-cent pieces: ", twoCentPiece);
    while (amt - coins[4] >= 0) {
        amt -= coins[4];
        change.push(1);
        //penny++;
        //console.log("after pennies: ", amt);
    }
    //console.log("pennies: ", penny);
    return change;
};

// console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // 25, 10, 10, 1
// console.log(amountToCoins(66, [25, 10, 5, 2, 1])); // [ 25, 25, 10, 5, 1 ]
// console.log(amountToCoins(236, [25, 10, 5, 2, 1])); // $2.36 = 9 quarters, 1 dime, 1 penny

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base.Accept b and n from the user and display the result.
const exponentiation = (b, n) => {
    return Math.pow(b, n);
    // return b ** n; // new in ES6, same result
};

// console.log(exponentiation(2, 4)); // base = 2, exponent = 4, power/product = 16
// console.log(exponentiation(5, 2)); // 25
// console.log(exponentiation(3, 3)); // 27

// 16. Write a JavaScript function to extract unique characters from a string. Example string: "thequickbrownfoxjumpsoverthelazydog" Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueChars(str) {
    //let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //console.log([...alphabet]); // produces a neat alphabetical array for each character
    let array = str.split("");
    //let uniqueCollection = new Set(array);
    //console.log(uniqueCollection); // output: Set {'t','h','e','q','u','i','c','k', to the end...}

    //let newArr = [...uniqueCollection];
    //let uniqueStr = newArr.join("");
    //return uniqueStr;
    return [... new Set(array)].join(""); // refactored all-in-one shot:
};

// console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog")); // "thequickbrownfxjmpsvlazydg"
// console.log(uniqueChars("Al-Ghazzali")); // Al-Ghazi

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

// 18. Write a function for searching JavaScript arrays with a binary search.Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.

// 19.Write a JavaScript function that returns array elements larger than a number. 

// 20. Write a JavaScript function that generates a string id(specified length) of random characters.Samplecharacterlist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

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

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string. Sample arguments: 'microsoft.com', 'o' Expected output: 3

// 23. Write a JavaScript function to find the first not repeated character.Sample arguments: 'abacddbec' Expected output: 'e' 

// 24. Write a JavaScript function to apply Bubble Sort algorithm.Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order".Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output.Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output: "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters. 

// 27. Write a JavaScript function that returns the longest palindrome in a given string.Note: According to Wikipedia "In computer science, the longest palindromic substring or longestsymmetric factor problem is the problem of finding a maximum-length contiguous substring of agiven string that is also a palindrome. For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; forexample, in the string "abracadabra", there is no palindromic substring with length greater thanthree, but there are two palindromic substrings with length three, namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings (that is, allsubstrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) rather than returning only one substring or returning the maximum length of apalindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// 29. Write a JavaScript function to get the function name.