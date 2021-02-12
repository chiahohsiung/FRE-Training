//assignment 2
function reverseNum(num){
    var result = '';
    num = num +'';
    for(var i = num.length - 1; i >= 0; i--){
        result += num[i];    
    }

    return +result;
}

function chkPalindrome(str){
    var rev = str.split("").reverse().join('');
    return rev == str;
}

function allComb(string){
    var arr = [];
    for (var i = 0, j = 1; i < string.length; i++, j++){
        arr[i] = string.substring(i,j);
    }

    var res = [];
    var temp = "";
    var count = Math.pow(2, arr.length);

    for(var i = 0; i < count; i++){
        temp= "";
        for (var j=0; j<arr.length; j++) {
            if ((i & Math.pow(2,j))){ 
                temp += arr[j];
            }
        }
        if (temp !== "")
        {
            res.push(temp);
        }
    }
    return res.join(',');
}

function sortAlphabet(str){
    var arr = str.split('');
    arr.sort();
    return arr.join("");
}

function firstLetterToUpper(str){
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join(' ');
}

function findLongest(str){
    var arr = str.split(' ');
    var result = '';
    for(var i = 0; i < arr.length; i++){
        if(result.length < arr[i].length){
            result = arr[i];
        }
    }

    return result;
}

function countVowels(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        var a = str[i].toLowerCase();
        if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u'){
            count += 1;
        }
    }

    return count;
}

function chkPrime(num){
    for(var i = 2; i < num - 1; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

function chkType(arg){
    return typeof arg;
}

function matrix(){
    for (var i=0; i < n; i++){
        for (var j=0; j < n; j++){
            if (i === j){
                console.log('1');
            } else {
                console.log('0');}
            }
            console.log('----------');
    }
}

function findSecond(arr){
    var lowest = 0;
    var secLowest = 0;
    var greatest = 0;
    var secGreatest = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < lowest || lowest == 0){
            secLowest = lowest;
            lowest = arr[i];
        } else{
            if(arr[i] < secLowest || secLowest == 0){
                secLowest = arr[i];
            }
        }

        if(arr[i] > greatest){
            secGreatest = greatest;
            greatest = arr[i];
        }else{
            if(arr[i] > secGreatest){
                secGreatest = arr[i];
            }
        }
    }

    return [secLowest, secGreatest];
}

function chkPerfect(num){
    var sum = 0;
    for(var i = 0; i < num; i++){
        if(num % i == 0){
            sum += i;
        }
    }

    if(num == sum){
        return true;
    }else{
        return false;
    }
}

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function getFactors(num){
    var arr = [];
    for(var i = 0; i <= num; i++){
        if(num % i == 0){
            arr.push(i);
        }
    }

    return arr;
}

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountToCoins(amount, coins){
    var result = [];
    coins.sort(function(a, b) {return b - a}); //sort before the function
    while(amount != 0){
        for(var i = 0; i < coins.length; i++){
            if(amount - coins[i] >= 0){
                result.push(coins[i]);
                amount = amount - coins[i];
                break;
            }
        }
    }
    
    return result;
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function computeExp(b, n){
    var result = 1;
    for(var i = 0; i < n; i++){
        result = result * b;
    }

    return result;
}

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUnique(str){
    var result = '';
    for(var i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result += str[i];
        }
    }

    return result;
}

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function numOfOccur(str){
    var result = {};
    for(var i = 0; i < str.length; i++){
        if(result[str[i]]){
            result[str[i]] += 1;
        }else{
            result[str[i]] = 1;
        }
    }
    return result;
}

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, num){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] == num){
            return middle; //value found
        } else if(arr[middle] < num){
            start = middle + 1;
        } else{
            end = middle - 1;
        }
    }

    return false; //target not found in the array
}

// 19. Write a JavaScript function that returns array elements larger than a number. 
function getLargers(arr, num){
    let result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > num){
            result.push(arr[i]);
        }
    }

    return result;
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function genRandomId(){
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    var length = Math.floor(Math.random() * charList.length);
    var id = '';
    
    for(var i =0; i< length; i++){
        id += charList[Math.floor(Math.random() * charList.length)];
    }

    return id;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function getSubset(arr, len){
    var tmp = [];
    var result = [];
    subsetUtil(arr, len, arr.length, 0, tmp, 0, result);

    return result;
}

function subsetUtil(arr, len, arrLen, index, data, i, result){
    if(index == len){
        var str = [];
        for(var j = 0; j < len; j++){
            str.push(data[j]);
        }
        result[result.length] = str;
        return;
    }
    if(i >= arrLen){
        return;
    }

    data[index] = arr[i]; 

    subsetUtil(arr, len, arrLen, index + 1, data, i + 1, result); 
    subsetUtil(arr, len, arrLen, index, data, i+ 1, result); 
}

console.log(getSubset([10, 20, 30, 40, 50], 3));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countChar(str, char){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(char == str[i]){
            count += 1;
        }
    }

    return count;
}

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function findNotRepeated(str){
    var char = str[0];
    var index = 1;
    var newStr = str.slice(index, str.length);
    
    while(newStr.includes(char)){
        index += 1;
        newStr = str.slice(0, index -1) + str.slice(index, str.length);
        console.log(newStr);
        char = str[index - 1];
        if(index >= str.length){
            break;
        }
    }

    return char;
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr){
    var bool ;
    var end = arr.length - 1;
    
    do{
        bool = false;
        for(var i = 0; i < end; i++){
            var tmp = arr[i];
            if(arr[i] < arr[i + 1]){
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                bool = true;
            }
        }
        end--;
    }while(bool)
    return arr;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestName(arr){
    var longest = '';
    for(var i = 0; i < arr.length; i++){
        if(longest.length < arr[i].length){
            longest = arr[i];
        }
    }

    return longest;
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstr(str){
    var substr = '';
    var longest = '';
    for(var i = 0; i < str.length; i++){
        for(var j = i; j < str.length; j++){
            substr = str.substr(i, j);
            if(!isRepeat(substr) && substr.length > longest.length){
                longest = substr;
            }
        }
    }

    return longest;
}

function isRepeat(str){
    var substr = str.substr(1, str.length);
    for(var i = 0; i < str.length; i++){
        if(substr.includes(str[i])){
            return true;
        }else{
            substr = str.substr(0, i + 1) + str.substr(i + 2, str.length);
        }
    }

    return false;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindrome(str){
    var palin = '';
    for(var i = 0; i < str.length; i++){
        for(var j = str.length; j >= 0; j--){
            var substr = str.substr(i, j);
            if(chkPalindrome(substr) && substr.length > palin.length){
                palin = substr;
            }
        }
    }

    return palin;
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function callBackFunction(a, callBack){
    callBack();
}
function callBack(){
    console.log("this is callback function");
}

// 29. Write a JavaScript function to get the function name. 
function getFunctionName(){
    console.log(arguments.callee.name);
}
