//Q1: reverse a number
const reverseString = (str) => (str + "").split('').reverse().join('');

// let s = 32243;
// console.log(reverseString(s));

//Q2: palindrome 
const isPalindrome = (str) => reverseString(str) === str;

// let s = "uuussssuuu";
// if (isPalindrome(s)) console.log("it is palindrome");
// else console.log("it is not palindrome");

//Q3: generates all combinations of a string
const getCombinations = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let s = str[i] + '';
        arr.push(s);
        for (let j = i + 1; j < str.length; j++) {
            s += str[j];
            arr.push(s);
        }
    }
    return arr;
}

// let s = 'dog';
// console.log(getCombinations(s));

//Q4: return alphabetical ordered string
const alphabeticalSort = (str) => {
    let arr = str.split('');
    arr.sort();
    return arr.join('');
}
// let s = 'webmaster';
// console.log(alphabeticalSort(s));

//Q5: converts the first letter of each word of the string in upper case
const firstToUpper = (str) => {
    let arr = str.split(' ');
    let res = '';
    for (let a of arr) {
        a = a.charAt(0).toUpperCase() + a.slice(1);
        res += " " + a;
    }
    return res.slice(1);
}

// let s = 'the quick brown fox';
// console.log(firstToUpper(s));

//Q6: find the longest word within the string
const longestWord = (str) => {
    let maxLen = 0, arr = str.split(' '), res = '';
    for (let a of arr) {
        if (a.length > maxLen) {
            res = a;
            maxLen = a.length;
        }
    }
    return res;
}

// let s = 'Web Development Tutorial';
// console.log(longestWord(s));

//Q7: counts the number of vowels within the string
const countVowels = (str) => {
    const st = new Set(['a', 'e', 'i', 'o', 'u']);
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (st.has(str[i])) res++;
    }
    return res;
}

// let s = 'The quick brown fox';
// console.log(countVowels(s));

//Q8: check the number is prime or not.

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// let num = 8;
// if (isPrime(num)) console.log(`${num} is a prime number!`);
// else console.log(`${num} is not a prime number!`);

//Q9: return type
const myTypeOf = (param) => {
    //const types = ["object", "boolean", "function", "number", "string", "undefined"];

    return typeof param;
}
// var undeclaredVariable;
// console.log(myTypeOf(12));
// console.log(myTypeOf('jshdiaehdfl'));
// console.log(myTypeOf(isPrime));
// console.log(myTypeOf(undeclaredVariable));
// console.log(myTypeOf(false));
// console.log(myTypeOf({ a: 1 }));


//Q10: n*m identity matrix

const identityMatrix = (m, n) => {
    const arr = Array(m).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) arr[i][j] = 1;
        }
    }
    return arr;
}
// console.log(identityMatrix(3, 3));

//Q11: find the second lowest and second greatest numbers
const second = (arr) => {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

// console.log(second([1, 5, 3, 7, 2, 9, 24, 674]));

//Q12: whether a number is perfect( positive integer +  equal to the sum of its proper positive divisors

const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return num > 0 && sum === num;
}
// console.log(isPerfect(99));
// console.log(isPerfect(496));

//Q13: compute the factors of a positive integer
const getFactor = (num) => {
    const arr = new Array();
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
            if (i !== num / i) arr.push(num / i);
        }
    }
    return arr;
}
// console.log(getFactor(99));
// console.log(getFactor(16));

//Q14:  convert an amount to coins
const amountTocoins = (num, arr) => {
    if (num === 0) return [];
    let res = new Array();
    if (num < arr[0]) {
        arr.shift();
        return amountTocoins(num, arr);
    }
    if (num - arr[0] >= 0) {
        res.push(arr[0]);
        return res.concat(amountTocoins(num - arr[0], arr))
    }
}

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
//Q15: compute the value of bn where n is the exponent and b is the bases
const myPow = (b, n) => {
    if (n === 0) return 1;
    if (n < 0) b = 1 / b;
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= b;
    }
    return res;
}
// console.log(myPow(2, 9));

//Q16: extract unique characters from a string
const unique = (str) => {
    const uniqueSet = new Set();
    for (let i = 0; i < str.length; i++) {
        if (uniqueSet.has(str[i])) continue;
        uniqueSet.add(str[i]);
    }

    return [...uniqueSet].join('');
}

// console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

//Q17: get the number of occurrences of each letter

const numberOfOccurrences = (str) => {
    const obj = {}
    str.replace(/\S/g, function (l) { obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1); })
    return obj;
}
// console.log(numberOfOccurrences("Write a JavaScript function"));

//Q18: binary search
const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    arr.sort((a, b) => { a - b });
    while (left < right) {
        let mid = left + ((left + right) / 2 >> 0);
        if (arr[mid] === target) return true;
        else if (arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}

// console.log(binarySearch([1, 4, 3, 7, 9, 40, 33, 46, 88, 664], 4));

//Q19: returns array elements larger than a number
const biggerElement = (arr, num) => {
    const res = new Array();
    for (let a of arr) {
        if (a > num) res.push(a);
    }
    return res;
}
// console.log(biggerElement([1, 4, 3, 7, 9, 40, 33, 46, 88, 664], 10));

//Q20: generates a string id (specified length) of random characters
const randomID = (len) => {
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = '', n = list.length;
    for (let i = 0; i < len; i++) {
        let j = Math.floor(Math.random() * n);
        res += list[j];
    }
    return res;
}

// console.log(randomID(5));

//Q21:  get all possible subset with a fixed length
const fixedLengthSubset = (arr, len) => {
    const res = new Array();
    for (let i = 0; i < Math.pow(2, arr.length); i++) {
        const tmp = new Array();
        n = arr.length - 1;
        do {
            if ((i & (1 << n)) !== 0) {
                tmp.push(arr[n]);
            }
        } while (n--);

        if (tmp.length === len) {
            res.push(tmp);
        }
    }
    return res;
}
// console.log(fixedLengthSubset([1, 2, 3], 2));

//Q22:count the number of occurrences of the specified letter within the string.

const countOccurrences = (str, a) => {
    let res = 0;
    for (let s of str) {
        if (s === a) res++;
    }
    return res;
}
// console.log(countOccurrences('microsoft.com', 'o'));

//Q23: the first not repeated character
const firstNotRepeatedEle = (str) => {
    const arr = str.split('');
    const obj = {};
    for (let a of arr) {
        if (isNaN(obj[a])) {
            obj[a] = 1;
        } else {
            obj[a]++;
        }
    }
    for (let a of arr) {
        if (obj[a] === 1) return a;
    }
}

// console.log(firstNotRepeatedEle('abacddbec'));

//Q24: Bubble Sort 
const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (j < n - 1 && arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([1, 5, 3, 4, 2, 6, 9, 10, 7, 8]));

//Q25: returns the longest country name
const Longest_Country_Name = (arr) => {
    let len = 0, res = "";
    for (let a of arr) {
        if (a.length > len) {
            len = a.length;
            res = a;
        }
    }
    return res;
}
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//Q26:find longest substring in a given a string without repeating characters
const UniqueSubstring = (str) => {
    let n = str.length, left = -1, res = 0, s = "";
    let mp = new Map();
    for (let i = 0; i < n; i++) {
        if (mp.has(str[i])) left = Math.max(left, mp.get(str[i]));
        else s += str[i];
        mp.set(str[i], i);
        if ((i - left) > res) {
            s = left == -1 ? str.substring(0, i + 1) : str.substring(left + 1, i + 1);
            res = i - left;
        }
    }
    return s;
}

// console.log(UniqueSubstring("returns the longest palindrome"));

//Q27:  returns the longest palindrome
const longestPalindrome = (str) => {
    let n = str.length;
    for (let j = n - 1; j >= 0; j--) {
        let i = 0, k = j;
        while (k < n) {
            let substr = str.substring(i, k + 1);
            if (isPalindrome(substr)) return substr;
            i++, k++;
        }
    }
}

// console.log(longestPalindrome("babad"));



//Q28: Write a JavaScript program to pass a 'JavaScript function' as parameter.
const aMeaninglessFnc = (cnt, callbackfnc) => {
    for (let i = 0; i < cnt; i++) {
        callbackfnc(i);
    }
}
const print = (i) => {
    console.log(i);
}
// aMeaninglessFnc(4, print);

//Q29:Write a JavaScript function to get the function name. 
const getName = function myName() {
    return arguments.callee.name;
}
// console.log(getName());

//On class exercise
Array.prototype.myFilter = function (callbackfnc) {
    const map = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackfnc(this[i], i, this)) map.push(this[i]);
    }
    return map;
}
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const result = words.myFilter(word => word.length < 8);
// console.log(result);

Array.prototype.myReduce = function (callbackfnc, initVal) {
    let res = initVal || 0;
    for (let i = 0; i < this.length; i++) {
        res = callbackfnc(res, this[i], i, this);
    }
    return res;
}

// const total = [1, 2, 3, 4, 5].myReduce(function (previous, current, index) {
//     const val = previous + current;
//     console.log("The previous value is " + previous +
//         "; the current value is " + current +
//         ", and the current iteration is " + (index + 1));
//     return val;
// }, 0);
// // console.log("The loop is done, and the final value is " + total + ".");
