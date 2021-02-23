// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223 


function reverseNumber(number) {
    return parseInt(String(number).split('').reverse().join(''));

}

//console.log(reverseNumber(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]

    }
    if (result === str) {
        console.log(`${str} is palidrome`)
    } else {
        console.log(`${str} is not  palindrome`)
    }

}

//palindrome('madam')

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function combinator(str) {
    let list = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            list.push(str.slice(i, j));
        }
    }
    return list;
}

//console.log(combinator('dog'))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalOrder(str) {
    return str.split('').sort().join('')
}

//console.log(alphabeticalOrder('webmaster'))



// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function replaceFirstLetter(str) {
    let arr1 = str.split(' ');
    let result = (arr1.map(e => e.replace(e[0], e[0].toUpperCase())).join(' '));
    return result
}

//console.log(replaceFirstLetter('the quick brown fox'))


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function longestWord(str) {
    let arr1 = str.split(' ');
    let arr2 = arr1.map(e => e.length);
    console.log(arr2)
    let maxNumber = Math.max(...arr2);
    console.log(maxNumber)
    return arr1[arr2.indexOf(maxNumber)]

}

//console.log(longestWord('Web Development Tutorial'))





// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function vowelCount(str) {
    let vowelList = 'aeiouAEIOU';
    let vcount = 0;

    for (let x = 0; x < str.length; x++) {
        if (vowelList.indexOf(str[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}

//console.log(vowelCount('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}




// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function objectType(arg) {
    //let argType = ['object', 'boolean', 'function', 'number', 'string', 'undefined']
    let result = typeof (arg);
    return result;

}

//console.log(objectType('1233'))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function matrix(n) {

    let i;
    let j;
    let arr = [];
    for (i = 0; i < n; i++) {
        arr.push([])
        for (j = 0; j < n; j++) {
            if (i === j) {
                arr[i][j] = 1;
            }

            else {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}
//console.log(matrix(10));


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function findNumber(arr) {
    let arr1 = arr.sort((a, b) => a - b)
    console.log(arr1)
    let result = arr1.filter(e => (e > arr1[0] && e < arr1[arr1.length - 1]));
    return result

}

//console.log(findNumber([1, 2, 3, 4, 5, 5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum = sum + i;
        }

    }

    if (sum === number) {
        return `the ${number} is perfect`;
    } else {
        return `the ${number} is not perfect`;
    }


}
//console.log(perfectNumber(8128));



// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factorOfNumber(number) {
    let arr = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            arr.push(i)
        }

    }
    return arr;
}

//console.log(factorOfNumber(15));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function amountTocoins(num, arr) {
    let arr1 = [];
    let remainValue = num;
    for (let i = 0; i < arr.length; i++) {
        let divide = (Math.floor(remainValue / arr[i]));
        remainValue = remainValue - divide * arr[i];
        console.log(remainValue)
        if (divide > 0) {
            for (let j = 0; j < divide; j++) {
                arr1.push(arr[i]);
            }
        }

    }
    return arr1;
}

//console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function exp(b, n) {
    let ans = 1;
    for (var i = 1; i <= n; i++) {
        ans = b * ans;
    }
    return ans;
}

function exp(b, n) {
    return b ** n
}




// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueLetter(str) {
    let result = [];
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }

    }

    return result.join('');
}

//console.log(uniqueLetter("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function countLetter(str) {
    let result = {}
    let arr1 = str.split('');
    for (let i = 0; i < arr1.length; i++) {
        if (result[arr1[i]] === undefined) {
            result[arr1[i]] = 1;
        } else (
            result[arr1[i]]++
        )

    }
    return result;

}
//console.log(countLetter('aaaaaaabbbb'))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.


//This one is recursion
function arrayBinarySearch(narray, delement) {
    let mposition = Math.floor(narray.length / 2);

    if (narray[mposition] === delement) {
        return mposition;
    }
    else if (narray.length === 1) {
        return null;
    }
    else if (narray[mposition] < delement) {
        let arr = narray.slice(mposition + 1);
        let res = array_binarySearch(arr, delement);
        if (res === null) {
            return null;
        }
        else {
            return mposition + 1 + res;
        }
    }
    else {
        let arr1 = narray.slice(0, mposition);
        return arrayBinarySearch(arr1, delement);
    }
}




// 19. Write a JavaScript function that returns array elements larger than a number. 

function biggerNumber(array, index) {
    return array.filter(e => e > index)
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function makeid(l) {

    let text = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
        text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
}

//console.log(makeid(10))

//need review(can not work out right)
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function subSet(arr, index) {
    if (arr.length === 1) { return [arr]; }

    else {
        subarr = subSet(arr.slice(1));
        result = subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
        console.log(result);
        //return result.filter(e => e.length >= index)

    }


}

const subset = (arr, len) => {
    const res = [];
    const subArr = [];
    if (!arr.length || len < 1) return null;
    arr.sort((a, b) => a - b);
    helper(subArr, 0, res);
    function helper(subArr, start, res) {
        if (subArr.length === len) {
            res.push([...subArr]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if (arr[i + 1] && arr[i] === arr[i + 1]) continue;
            subArr.push(arr[i]);
            helper(subArr, i + 1, res);
            subArr.pop();
        }
    }
    return res;
};

//console.log(subSet([1, 2, 3]))



// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

function countOccLetter(str, index) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === index) {
            count++
        }
    }
    return count;
}

//console.log(countOccLetter('microsoft.com', 'o'))


//need find better way
// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNotRepeat(str) {
    let arr = str.split('')

    let result = '';
    let count = 0;

    for (let x = 0; x < arr.length; x++) {


        for (let y = 0; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                count += 1;
            }
        }
        if (count < 2) {
            result = arr[x];
            break;
        }
    }
    return result;
}

//console.log(firstNotRepeat('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = arr.length; j < 1; j--) {
            if (parseInt(arr[i - 1]) < parseInt(arr[i])) {
                var temp = arr[i - 1];
                arr[i - 1] = arr[i]
                arr[i] = temp;
            }
        }
    }
    return arr
}

//console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function Longest_Country_Name(countryName) {
    {
        return countryName.reduce(function (lname, country) {
            return lname.length > country.length ? lname : country;
        },
        );


    }
}

//console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
//quite hard no personal solution.........
// function longestSubstring(str) {
//     let resultarr = [];
//     let arr = str.split('')

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] == arr[j]) {
//                 arr[i] = ''
//                 arr[j] = ''

//             }

//         }


//     }

//     return arr.join('')
//     //resultarr = resultarr.reduce(function (cur, next) { return cur.length > next.length ? curr : next; })
//     //return resultarr

// }


const findLongestNRepeat = str => {
    const set = new Set();
    let i = 0;
    while (i < str.length) {
        let j = i;
        const markSet = new Set();
        while (j <= str.length) {
            if (!markSet.has(str[j])) markSet.add(str[j++]);
            else {
                set.add(str.slice(i, j));
                break;
            }
            if (j == str.length - 1 && !markSet.has(str[j])) set.add(str.slice(i, j + 1));
        }
        i++;
    }
    const res = [...set];
    let len = 0;
    let result = "";
    res.forEach(ele => {
        if (ele.length > len) {
            len = ele.length;
            result = ele;
        }
    });
    return result;
};

console.log(findLongestNRepeat("example.com"));




// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

function findLongestPalindrome(sentence) {

    let middleString = sentence.split(' ');
    let result = [];
    for (string of middleString) {
        if (isPalindrome(string)) {
            result.push(string)
        }
    }
    console.log(result)

    let temp = result[0];
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i].length >= result[i + 1].length) {
            temp = result[i]
        } else {
            temp = result[i + 1]
        }

    }
    return temp;

}

function reverseString(string) {
    let backString = string[string.length - 1];
    //console.log(backString);
    for (let i = string.length - 2; i >= 0; i--) {
        backString += string[i];

    }
    return backString

}

function isPalindrome(word) {

    if (word === reverseString(word)) {
        return word;
    }
}



//console.log(reverseString('abcde'))
//console.log(findLongestPalindrome('you are abba  abbccbba'))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function useFunction(arg) {
    arg()
}

function sayHi() {
    console.log('say HI')
}

//useFunction(sayHi)

// 29. Write a JavaScript function to get the function name. 

function functionName() {
    console.log(arguments.callee.name);
}


