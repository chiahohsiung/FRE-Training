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


// 5. Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter ofeach word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
// =================================================================
const UpperCamelCase = (str) => str.split(' ').map((word) => word.replace(word.charAt(0),word.charAt(0).toUpperCase())).join(' ')
console.log(UpperCamelCase('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter 
// and find the longest wordwithin the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
// =================================================================
const longestWord = (str) => str.split(' ').reduce((longest,word)=> longest.length > word.length ? longest : word,'')
console.log(longestWord('Web Development Tutorial'))


// 7. Write a JavaScript function that accepts a string as a parameter 
// and counts the number ofvowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, 
// we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
// =================================================================
const countVowels = (str) => {
    const vowels = {'a':'a','e': 'e','i': 'i','o': 'o','u' : 'u'}
    return str.toLowerCase().split('').reduce((count,ch)=>{
        return vowels[ch] ? count += 1 : count;
    },0)
}
console.log(countVowels('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter 
// and check the number isprime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 
// that has no positivedivisors other than 1 and itself.
// =================================================================
const primeNumers = (num) => {
if(num === 2 || num === 3) return true;
for(let i = 1; i < Math.floor(num/6 - 1); i++){
    if(Number.isInteger(num/(6*i + 1))  || Number.isInteger(num/(6*i - 1))) return false;
}
return true;
}
console.log(primeNumers(1333))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, 
// function, number,string, and undefined.
// =================================================================
const type = arg => typeof arg;
console.log(type("str"))
console.log(type(123))
console.log(type({}))
console.log(type(undefined))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// =================================================================
const identityMatrix = n => Array(n).fill().map(()=>Array(n).fill(1)); 
console.log(identityMatrix(4))

// 11. Write a JavaScript function which will take an array of numbers sorted 
// and find the secondlowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// =================================================================
const findSecLowAndHigh = arr => [arr[1],arr[arr.length-2]]
console.log(findSecLowAndHigh([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to 
// the sum of its proper positive divisors, that is, the sum of its positive divisors 
// excluding thenumber itself (also known as its aliquot sum). 
// Equivalently, a perfect number is a number that 
// ishalf the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496 and 8128.
// =================================================================
const perfectNumber = num => num > 0 ? 
    Array(Math.floor(num/2)).fill(0).reduce((acc,ele,i)=>
        Number.isInteger(num/(i + 1)) ? acc + (i + 1) : acc
    ,0) === num
: false;

console.log(perfectNumber(28))
console.log(perfectNumber(496))
console.log(perfectNumber(8128))

// 13. Write a JavaScript function to compute the factors of a positive integer.
// =================================================================
const factors = num => {
    const result = [];
    for(let i = 1; i <= num; i++){
        if(Number.isInteger(num/i)) result.push(i);
    }
    return result;
}
console.log(factors(100))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
// =================================================================
const amountToCoins = (amt,coins) => coins.reduce((result,coin)=>{
    while((amt - coin) >= 0) {
        amt = amt - coin;
        result.push(coin);
    }
    return result;
},[])
    
console.log(amountToCoins(46,[25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. 
// Accept b and n from the user and display the result.
// =================================================================
const exponentAndBase = (exponent, base) => base ** exponent;
console.log(exponentAndBase(2,10))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// =================================================================
const uniqueCharacters = str =>  Array.from(new Set([...str])).join('');
console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))


// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
// =================================================================
const charOccurrences = str => str.split('').reduce(
    (charMap,ch) => {
        if(charMap[ch] && ch !== ' ') {
            charMap[ch] += 1;
        }else charMap[ch] = 1;
        return charMap
},{})
// Or
// =================================================================
const charOccurrences1 = str => {
    const result = {}
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) !== '' && result[str.charAt(i)]) result[str.charAt(i)] += 1;
        else result[str.charAt(i)] = 1;
    }
    return result;
}
console.log(charOccurrences("hello"))
console.log(charOccurrences1("hello"))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller 
// and smaller chunks until it findsthe desired value.
// =================================================================
const binarySearch = (arr,target) => {
    arr.sort((a,b)=>a-b)
    
    let left = 0; right = arr.length-1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] > target) right = mid - 1;
        else if(arr[mid] < target) left = mid + 1;
    }
    return right;
}
console.log(binarySearch([2,3,4,5,7],7))

// 19. Write a JavaScript function that returns array elements larger than a number.
// =================================================================
const largerThan = (arr,num) => arr.reduce((acc,ele) => {
    if(ele > num) {
        acc.push(ele);
    }else acc;
    return acc;
},[]);
console.log(largerThan([1,2,3,4,5,6,7,8,9], 2));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// =================================================================
const stringId = (size,str) => {
   var result = '';
   for ( var i = 0; i < size; i++ ) result += str.charAt(Math.ceil(Math.random() * str.length));
   return result;
};
console.log(stringId(50,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will 
// count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
// =================================================================
const noOfOccurrences = (str,char) => [...str].reduce((acc,ch)=>ch === char ? acc+1 : acc,0);
console.log(noOfOccurrences('microsoft.com','o'))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e'
// =================================================================
const firstNoneRepeatingChar = (str) => {
    const obj = [...str].reduce((acc,ch)=>{
        if(acc[ch])acc[ch] += acc[ch];
        else acc[ch] = 1;
        return acc;
    },{})

    for(let i = 0; i < str.length; i++){
        if(obj[str.charAt(i)] === 1) return str.charAt(i);
    }
}
console.log(firstNoneRepeatingChar('abacddbec','e'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, 
// comparingeach pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// =================================================================
const bubbleSort = arr => {
    for(let i = 1; i < arr.length; i++){
        let isSorted = false;
        for(let j = 0;j < arr.length - i; j++){
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSorted = true;
            }
        }
        if(!isSorted) return arr;
    }
}
console.log(bubbleSort([3,4,2,1,8,4,6]))

// 25. Write a JavaScript function that accept a list of country names as input and returns 
// thelongest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// =================================================================
const longestCountryName = countries => countries.reduce((longest,country) => 
country.length > longest.length ? country : longest
,'')

console.log(longestCountryName(["Australia", "Germany", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a given string without repeating characters. 
// =================================================================
const longestNonRepeatingSubstr = str => {
    let long = '';
    for(let i = 0; i < str.length; i++){
    let temp = str.charAt(i);
        for(let j = i+1; j < str.length; j++){
            if(temp.includes(str.charAt(j))) {
                if(temp.length > long.length){
                    long = temp;
                    temp = '';
                }else temp = '';
            temp += str.charAt(j)
            }else temp += str.charAt(j);
        }
        if(temp.length > long.length)
            long = temp;
    }
    return long;
}
console.log(longestNonRepeatingSubstr("google.com"))
console.log(longestNonRepeatingSubstr("example.com"))



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longestsymmetric
// factor problem is the problem of finding a maximum-length contiguous substring of agiven string that is also a 
// palindrome. For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic 
// substring is not guaranteed to be unique; forexample, in the string "abracadabra", there is no palindromic 
// substring with length greater thanthree, but there are two palindromic substrings with length three, namely, 
// "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings 
// (that is, allsubstrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) 
// rather than returning only one substring or returning the maximum length of apalindromic substring.
// =================================================================
const longPalindrome = (str) => {
    let longest = 0;
    const palindomeArr = Array(str.length+1).fill().map(()=>Array());
    for(let i = 0; i <str.length; i++){
        for(let j = str.length; j > i; j--){
            if(str.slice(i,j) === str.slice(i,j).split('').reverse().join('')) {
                if(str.slice(i,j).length >= longest){
                    longest = str.slice(i,j).length;
                    palindomeArr[str.slice(i,j).length].push(str.slice(i,j));
                }
            }
        }
    }
    return palindomeArr[longest]
}
console.log(longPalindrome('abracadabra'))
console.log(longPalindrome('abcdcbagthhtgabcddbca'))
console.log(longPalindrome('bananas')) 

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
// =================================================================
const printingSomething = printSomething => printSomething();
const print = () => console.log("print something");
printingSomething(print);


// 29. Write a JavaScript function to get the function name.
// =================================================================
const returnFunctionName = (fun) => fun.name;
const functionName = function hello(){};
console.log(returnFunctionName(functionName));