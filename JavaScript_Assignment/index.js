// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''), 10)
}

console.log(reverseNumber(123))
console.log(reverseNumber(12300))
console.log(reverseNumber(123.45))
console.log(reverseNumber(123.4500))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z\d]/g, '');
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  }

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function getAllCombinations(str) {
    charArr = str.split('');
    let res=[];
	let auxArr = [];
    function dfs(charArr, curr, k) {
        if(charArr.length === k) {
            res.push(curr); 
        } else {
        dfs(charArr, [...curr, charArr[k]], k+1);
        dfs(charArr, curr, k+1);
        }
    }
    dfs(charArr, auxArr, 0)
    return res
}

console.log(getAllCombinations("dog"))
console.log(getAllCombinations("apple"))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalSort(str) {
    return str.split('').sort().join('')
}

console.log(alphabeticalSort('webmaster'))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function upperInit(str) {
    res = []
    for (let w of str.split(' ')) {
        res.push(w[0].toUpperCase()+w.slice(1))
    }
    return res.join(" ")
}

console.log(upperInit("the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function findLongestWord(str) {
    res = ''
    for (let w of str.split(' ')) {
        if (w.length > res.length) res = w;
    }
    return res
}

console.log(findLongestWord('Web Development Tutorial' ))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function countVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    count = 0;
    for (let ch of str.split('')) {
        if (ch.toLowerCase() in vowels) {
            count++
        }
    }
    return count
}

console.log(countVowel('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}

console.log(isPrime(14))
console.log(isPrime(17))
console.log(isPrime(213))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(argument) {
    res = typeof(argument);
    if (res === 'object') {
        res = argument.constructor.name;
    }
    return res
}

console.log(getType(getType))
console.log(getType('abc'))
console.log(getType(123))
console.log(getType(new String("abc")))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(n) {
    if (n<0) return null;
    res = []
    for (let row=0; row<n; row++) {
        line = []
        for (let col=0; col<n; col++) {
            if (row===col) {
                line.push(1);
            } else {
                line.push(0)
            }
            }
        res.push(line);
        }
    return res
}

console.log(identityMatrix(5))
console.log(identityMatrix(2))


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

getSecond = (arr) => {
    if (arr.length<2) return null;
    return [arr[1], arr[arr.length-2]];}

console.log(getSecond([1]))
console.log(getSecond([1,2,3,4,5]))


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

ifPerfect = (num) => {
    sum = 1
    for (let i=2; i*i<=num; i++) {
        if (num%i===0) {
            if (i*i != num) sum=sum+i+(num/i);
            else sum=sum+i;
    }
    if (sum === num) return true;
    else return false;
}
}

console.log(ifPerfect(6))
console.log(ifPerfect(7))

// 13. Write a JavaScript function to compute the factors of a positive integer. 

getFactors = (num) => {
    const factors = new Set()
    for (let i=2; i*i<=num; i++) {
        if (num%i===0) {
            factors.add(num/i);
            factors.add(i)
        }
    }
    return factors
}

console.log(getFactors(27))
console.log(getFactors(64))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function coinChange(amount, coins) {
    function backtracking(sum, pocket) {
        if (sum === amount) return pocket;
        if (sum > amount) return false
        for (let c of coins) {
            res = (backtracking(sum+c, [...pocket, c]));
            if (res) return res;
        }
    }
    return backtracking(0, []);
}

console.log(coinChange(46, [25, 10, 5, 2, 1]))
console.log(coinChange(93, [25, 10, 5, 2, 1]))


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

power = (b, n) => {
    res = 1;
    for (let i=0; i<n; i++) {
        res = res * b;
    }
    return res;
}

console.log(power(5,3))
console.log(power(10,3))


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

uniqueCharacters = (str) => [...new Set(str.split(""))].join('')

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))
console.log(uniqueCharacters("anappleadaykeepsdoctoraway"))

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

counter = (str) => {
    freq = {}
    for (let ch of str.split('')) {
        if (ch.length === 1 && ch.toLowerCase().match(/[a-z]/i)) {
            if (!(ch in freq)) {
                freq[ch] = 1;
            } else {
                freq[ch]++;
            }
        }
    }
    return freq;
}

console.log(counter("anappleadaykeepsdoctoraway"))
console.log(counter("i am a little little guy in a big big world!"))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

binarySearch = (arr, l, r, x) => {
    if (r >= l) {
        mid = Math.floor((l+r)/2);
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return binarySearch(arr, l, mid-1, x);
        else return binarySearch(arr, mid+1, r, x);
    }
    return null // if not found, return null
}

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

console.log(binarySearch(primes, 0, primes.length-1, 15))
console.log(binarySearch(primes, 0, primes.length-1, 5))

// 19. Write a JavaScript function that returns array elements larger than a number. 

getGreaterElements = (arr, x) => {
    return arr.filter(num => num>x);
}

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
console.log(getGreaterElements(primes, 8))
console.log(getGreaterElements(primes, 24))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

let sampleString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
console.log(guidGenerator(sampleString))
console.log(guidGenerator(sampleString))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function getSubset(arr, t) {
    let res=[];
    function dfs(arr, curr, k) {
        if(arr.length === k) {
            if (curr.length === t) res.push(curr); 
        } else {
        dfs(arr, [...curr, arr[k]], k+1);
        dfs(arr, curr, k+1);
        }
    }
    dfs(arr, [], 0)
    return res
}

testArr = [1,2,3,4]
console.log(getSubset(testArr, 3))
console.log(getSubset(testArr, 4))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

function countOccur(str, letter) {
    reducer = (cnt, char) => {
        if (char === letter) return (cnt + 1);
        else return cnt;
    }
    return str.split('').reduce(reducer, 0)
}

console.log(countOccur('microsoft.com', 'o'))
console.log(countOccur('microsoft.com', 'm'))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

counter = (str) => {
    freq = {}
    for (let ch of str.split('')) {
        if (!(ch in freq)) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
    return freq;
}
    

firstUniqueChar = (str) => {
    var count = counter(str);
    for (let char of str.split('')) {
        if (count[char] === 1) {
            return char
        }
    }
}

console.log(firstUniqueChar('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

bubbleSort = (arr) => {
    n = arr.length;
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            if (arr[j] < arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

longestName = (arr) => {
    var res = ""
    for (let name of arr) {
        if (name.length > res.length) {
            res = name;
        }
    }
    return res;
}

console.log(longestName(["Australia", "Germany", "United States of America"]))
console.log(longestName(["Australia", "Germany", "United States of America", "United Kingdom of Great Britain and North Ireland"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

lengthOfLongestSubstring = (str) => {
    var res = "";
    let i = 0, j =0;
    while (j<str.length) {
        while (str.slice(i, j).includes(str[j])) {
            if (res.length < (j-i)) res = str.slice(i, j);
            i++;
        }
        j++
    }
    if (res.length < (j-i)) res = str.slice(i, j);
    return res;
}

console.log(lengthOfLongestSubstring("afasreqassadasqwdasdasfsaF"))
console.log(lengthOfLongestSubstring("writeaJavaScriptfunctionthatreturnsthelongestpalindromeinagivenstring"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

myRule1 = (char) => String.fromCharCode(char.charCodeAt(0)+1);
myRule2 = (char) => String.fromCharCode(char.charCodeAt(0)-1);

myEncoder = (str, rule) => {
    return str.split('').map(rule).join('');
}

const testString = "Write a JavaScript program to pass a 'JavaScript function' as parameter"
console.log(myEncoder(testString, myRule1))
console.log(myEncoder(testString, myRule2))

// 29. Write a JavaScript function to get the function name. 

getName = (func) => func.name;

console.log(getName(myRule1))