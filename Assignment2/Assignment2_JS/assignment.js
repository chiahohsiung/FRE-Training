// function 1: Write a JavaScript function that reverse a number.
const reversedNum = (num) => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

// function 2: Write a JavaScript function that checks whether a passed string is palindrome or not?
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

// function 3: Write a JavaScript function that generates all combinations of a string. 
const allCombinaton = (str) => {
    let ans = [];
    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j < str.length; ++j) {
            ans.push(str.slice(i, j));
        }
    }
    return ans;
}

// function 4: Write a JavaScript function that returns a passed string with letters in alphabetical order. 
const order = (str) => {
    return str.split('').sort().join('');
}

// function 5: Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
const Capfirst = (str) => {
    let array = str.split(' ');
    array = array.map((element)=> {
        let first = element.charAt(0);
        let rest = element.slice(1);
        return first.toUpperCase() + rest;
    });
    return array.join(' ');
}

// function 6: Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
const Longest = (str) => {
    return str.split(' ').sort((a, b) => {return b.length - a.length})[0];
}

// function 7: Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. 
const countVowels = (str) => {
    let vowelList = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
        if (vowelList.includes(str.charAt(i))) {
            count++;
        }
    }
    return count;
}

// function 8: Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. 
const isPrime = (num) => {
    if (num <= 1)
        return false;
    for (let i = 2; i <= num / 2; ++i)
        if (!num % i)
            return false;
    return true;
}

// function 9: Write a JavaScript function which accepts an argument and returns the type
const itsType = (i) => {
    return typeof(i);
}

// function 10: Write a JavaScript function which returns the n rows by n columns identity matrix. 
const matrix = (n) => {
    let matrix = [];
    let i = 0, j = 0;
    for (;i < n; ++i) {
        matrix[i] = [];
    }
    i = 0;
    for (;i < n; ++i) {
        for (;j < n; ++j) {
            if (i === j) {
                matrix[i][j] = 1;
            }
            else matrix[i][j] = 0;
        }
    }
    return matrix;
}

// function 11: Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively.
const secondLowestAndGreatest = (arr) => {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

// function 12: Write a JavaScript function which says whether a number is perfect. 

const isPerfectNumber = (n) => {
    let divisors = [];
    for (let i =0;i<n;i++)
        if (!n % i)
            divisors.push(i)
    if(divisors.reduce((ac,n) => ac+n) === n)
        return true
    return false
}

// function 13: Write a JavaScript function to compute the factors of a positive integer. 
const allFactors = (n) => {
    let factors = [];
    for (let i = 0; i < n; i++) {
        if (!n % i) {
            factors.push(i);
        }
    }
    return factors;
}

// function 14: Write a JavaScript function to convert an amount to coins.
const coinsChange = (amount, coins) => {
    let output = [];
    for (let coin of coins) {
        let times = Math.floor(amount / coin);
        if (times > 0)
            for (let i = 0; i < times; i++)
                output.push(coin);
        amount %= coin;
    }
    return output;
}

// function 15: Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result. 
const cal_exponent = (b, n) => {
    if (n === 0)
        return 1;
    else {
        let result = b;
        for (let i = 1; i < n; i++)
            result *= b;
        return result;
    }
}