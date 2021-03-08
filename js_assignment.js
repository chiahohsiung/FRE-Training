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


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive 
// integer that is equal to the sum of its proper positive divisors, that is, 
// the sum of its positive divisors excluding thenumber itself (also known as its 
// aliquot sum). Equivalently, a perfect number is a number that ishalf the sum 
// of all of its positive divisors (including itself).Example : The first perfect 
// number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
// ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed bythe perfect numbers 496 and 8128.
console.log("Q12:");
let perfectNum = input => {
    let temp = 0;
    for (let i = 1; i <= input/2; i++){
        if (input % i === 0) {
            temp += i;
        }
    }
    if (temp === input && temp != 0) {
        return "It is a perfect number.";
    } else {
        return "It is not a perfect number.";
    }
}
console.log("28.", perfectNum(28));
console.log("27.", perfectNum(27));
 
 
// 13. Write a JavaScript function to compute the factors of a positive integer. 
console.log("Q13:");
let factors = input=> {
    let factor = [];
    if (input <= 0){
        return "Not a positive integer.";
    }
    for (let i = 1; i <= input; i ++){
        if (input % i === 0){
            factor.push(i);
        } 
    }
    return factor;
}
let q13 = factors(28);
console.log(q13);
 
// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
console.log("Q14:");
let amountTocoins = (num, coins) => {
    if (num === 0){
        return [];
    } else {
        if (num >= coins[0]){
            left = (num - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            coins.shift();
            return amountTocoins(num, coins);
        }
    }
}
 
let q14 = amountTocoins(46, [25, 10, 5, 2, 1]);
console.log(q14);
 
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. 
// Accept b and n from the user and display the result. 
console.log("Q15:");
let ans = (b, n) =>{
    return b ** n;
}
 
let q15 = ans(2,3);
console.log(q15);
 
 
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthe lazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
console.log("Q16");
let unique = input => {
    let output = "";
    let str = input;
    for (let i = 0; i < str.length; i++) {
        if (output.indexOf(str.charAt(i))== -1) {
            output += str[i];
        }
    }
    return output;
}
let q16 = unique("thequickbrownfoxjumpsoverthelazydog");
console.log(q16);
 
 
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
console.log("Q17:");
let charCount = input=> {
    let chars = {};
    input.replace(/\S/g, function(l) {
        chars[l] = (isNaN(chars[l]) ? 1 : chars[l] +1);
    });
    return chars;
}
 
let q17 = charCount("The quick brown fox jumps over the lazy dog");
console.log(q17);
 
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks 
// until it finds the desired value.
console.log("Q18:");
let binarySearch = (array, target) => {
    let left = 0;
    let right = array.length -1;
    while (left <= right) {
        let mid =  Math.floor((left + right)/2);
        if (array[mid] > target) {
            right = mid -1;
        } else if (array[mid] < target){
            left = mid +1;
        } else {
            return mid;
        }
    }
    if (array[left] == target) {
        return left;
    }
    if (array[right] == target) {
        return right;
    }
}
let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
let q18 = binarySearch(myArray, 6);
console.log(q18);
 
 
// 19. Write a JavaScript function that returns array elements larger than a number. 
console.log("Q19:");
let biggerNum = input => {
    return (evalue, index, array) => {
        return (evalue >= input);
    }
}
 
let q19 = [11, 45, 4, 31, 64, 10].filter(biggerNum(10));
console.log(q19);
 
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
console.log("Q20:");
let makeid = input => {
    let text = "";
    let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i< input; i++){
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
let q20 = makeid(8);
console.log(q20);
 
 
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
console.log("Q21:");
let subset = (array, size) => {
    let result_set = [], result;
    for (let i = 0; i < Math.pow(2, array.length); i++) {
        result = [];
        x = array.length -1;
        do {
            if( (i & (1 << x)) !== 0) {
                result.push(array[x]);
            } 
        } while (x--);
        if (result.length >= size){
            result_set.push(result);
        }
    }
    return result_set;
}
 
let q21 = subset([1, 2, 3], 2);
console.log(q21);
 
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the 
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o' Expected output : 3 
console.log("Q22:");
let count = (str, letter) => {
    let count = 0;
    for (let position = 0; position < str.length; position++){
        if (str.charAt(position) == letter) {
            count++;
        }   
    }
    return count;
}

let q22 = count("Count the occurences of the letter", "o");
console.log(q22);
 
 
// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' Expected output : 'e' 
 console.log("Q23: ");
 let firstChar = (str) => {
     let arr1 = str.split('');
     let result = '';
     let ctr = 0;

     for (let i = 0; i < arr1.length; i++) {
         ctr = 0;
         for (let j = 0; j < arr1.length; j++) {
             if (arr1[i] === arr1[j]) {
                 ctr++;
             }
         }
         if (ctr < 2) {
             result = arr1[i];
             break
         }
     }
     return result;
 }

 let q23 = firstChar("abcccaadedd");
 console.log(q23);
 
// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, 
// comparingeach pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 console.log("Q24: ");
 let bubbleSort = (array) => {
     let swap;
     let n = array.length-1;
     let x = array;
     do {
         swap = false;
         for (let j = 0; j< n; j++){
             if (x[j] < x[j+1]){
                 let tmp = x[j];
                 x[j] = x[j+1];
                 x[j+1] = tmp;
                 swap = true;
             }
         }
         n--;
     } while (swap);
     return x;
 }

 let q24 = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
 console.log(q24);
 
// 25. Write a JavaScript function that accept a list of country names as input and returns 
// the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
 console.log("Q25:");
 let countryName = (list) => {
     let index = 0;
     let count = 0;
     for (let i = 0; i < list.length; i++) {
        if (list[i].length > count) {
            count = list[i].length;
            index = i;
        }
     }
     return list[index];
 }

 let q25 = countryName(["Australia", "Germany", "United States of America"]);
 console.log(q25);
 
// 26. Write a JavaScript function to find longest substring in a given a string without 
// repeating characters. 
 console.log("q26");
 let longestSubstr = (input) => {
     let chars = input.split('');
     let curr_char;
     let str = "";
     let longest_string = "";
     let hash = {};
     for (let i = 0; i < chars.length; i++) {
         curr_char = chars[i];
         if (!hash[chars[i]]){
             str += curr_char;
             hash[chars[i]] = {index:i};
         } else {
             if (longest_string.length <= str.length) {
                 longest_string = str;
             }
             let prev_dupeIndex = hash[curr_char].index;
             let str_FromPrevDupe = input.substring(prev_dupeIndex +1,i);
             str = str_FromPrevDupe + curr_char;
             hash = {};
             for (let j = prev_dupeIndex+1; j<=i; j++){
                 hash[input.charAt(i)] = {index:j};
             }
         }
     }
     return longest_string.length > str.length ? longest_string: str;
 }

 q26 = longestSubstr("find the longest substring");
 console.log(q26);

 
// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or 
// longestsymmetric factor problem is the problem of finding a maximum-length contiguous 
// substring of agiven string that is also a palindrome. 
// For example, the longest palindromic substring of"bananas" is "anana". 
// The longest palindromic substring is not guaranteed to be unique; 
// forexample, in the string "abracadabra", there is no palindromic substring with length 
// greater thanthree, but there are two palindromic substrings with length three, namely, 
// "aca" and "ada".In some applications it may be necessary to return all maximal palindromic 
// substrings (that is, allsubstrings that are themselves palindromes and cannot be extended to 
// larger palindromicsubstrings) rather than returning only one substring or returning the 
// maximum length of apalindromic substring.
 console.log("Q27: ");
 let isPalindrome = (str) => {
     let rev = str.split("").reverse().join("");
     return str == rev;
 }

 let longestPalindrome = (str) => {
     let max_length = 0;
     maxp = "";
     for (let i =0; i<str.length; i++){
         let subs = str.substr(i, str.length);
         for (let j=subs.length; j>=0; j--) {
             let sub_sub_str = subs.substr(0,j);
             if (sub_sub_str.length<=1)
             continue;
             if (isPalindrome(sub_sub_str)){
                 if(sub_sub_str.length > max_length) {
                     max_length = sub_sub_str.length;
                     maxp = sub_sub_str;
                 }
             }
         }
     }
     return maxp;
 }

 let q27 = longestPalindrome("abracadabra");
 console.log(q27);
 
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
 console.log("Q28: ");
 let function1 = (id, callback) => {
     callback();
 }

 let function2 = () => {
     console.log("this is the callback function");
 }

 let q28 = function1(1, function2);
 
// 29. Write a JavaScript function to get the function name. 
console.log("Q29: ");
let functionSample = () => {
    console.log(functionSample.name);
}

let q29 = functionSample();
