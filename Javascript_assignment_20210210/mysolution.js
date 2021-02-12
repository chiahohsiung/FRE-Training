/*****************************************************************
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223 
****************************************************************/

function reverseNum(num) {
    return +(num.toString().split("").reverse().join(""));
}

//let x = 23578;
//console.log(reverseNum(x));


/***********************************************************************
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*********************************************************************/

function palindrome(str) {
    if (str.length === 1 || str.length === 0){
        return true;
    }
    let firstChar = str.slice(0, 1);
    let lastChar = str.slice(-1);
    let middle = str.slice(1, -1);
    return (firstChar === lastChar) && palindrome(middle);
    
}

//console.log(palindrome("madam"));


/******************************************************************************
3. Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
***********************************************************************************/

function combinationOfString(str){
    let l = str.length;
    if (l === 1){
        return [str];
    }
    return [... new Set([str].concat(combinationOfString(str.slice(0, -1))).concat(combinationOfString(str.slice(1))))];

}

//console.log(combinationOfString('dog'));

/***********************************************************************************
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
***************************************************************************************/

function sortString(str){
    return str.split('').sort().join('');
}

//console.log(sortString('webmaster'));

/************************************************************************************
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
****************************************************************************************/

function convertUpper (str) {
    let array = str.split(' ');
    array.forEach(function(ele, ind, arr){
        arr[ind] = ele[0].toUpperCase() + ele.slice(1);
    });
    return array.join(' ');
}

//console.log(convertUpper('the quick brown fox'));

/*************************************************************************************
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'
*******************************************************************************************/

function longestWord(str){
    let array = str.split(' ');
    let word = array.reduce(function(a, b){return a.length > b.length ? a:b;});
    return word;
}

//console.log(longestWord('Web Development Tutorial'));

/****************************************************************************************
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5
******************************************************************************************/

function countVowels(str){
    let vowelDict = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    };

    let strLower = str.toLowerCase().split('');
    let count = strLower.reduce(function(accumulator, ele){
        if (ele in vowelDict){
            return accumulator + 1;
        }
        else{
            return accumulator;
        }
    }, 0);
    return count;

}

//console.log(countVowels('The quick brown fox'));


/*****************************************************************************************
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*****************************************************************************************/

function checkPrime(num) {
    if (num <= 2) {
        return true;
    }

    for (let i = 2; i < num; i++) {
        if (num % 2 === 0) {
            return false;
        }
    }

    return true;
}


//console.log(checkPrime(123));


/**************************************************************************************
9. Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
**************************************************************************************/

function checkType(argument) {
    return typeof argument;
}


//console.log(checkType({}));


/**********************************************************************************
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
**************************************************************************************/

function findNum(arr) {
    arr.sort();
    return [arr[1], arr.slice(-2, -1)];
}

/**********************************************************************************
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
******************************************************************************/

function perfectNumber(num){
    if (num === 1){
        return false;
    }
    let acc = 0;
    for (let i = 1; i < num; i++){
        if (num % i === 0){
            acc = acc + i;
        }
    }
    if (acc  === num) {
        return true;
    }
    return false;
}


//console.log(perfectNumber(28));


/*****************************************************************************
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
*******************************************************************************/


function exponent(b, n){
    return Math.pow(b, n);
}


/*******************************************************************************
16. Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
**********************************************************************************/

function uniqueChars(str){
    return [... new Set(str.split(''))].join('');
}


//console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));


/********************************************************************************



