/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;Expected Output : 34223 
*/
const reverseNumber = (number) => {
    let number_string = number.toString()
    let reversed_string = ""
    for (let i = number_string.length - 1; i >= 0; i--) {
        reversed_string += number_string[i]
    }
    return reversed_string
}

/**
 *
 * 2. Write a JavaScript function that checks whether a passed string
 * is palindrome or not? A palindrome is word, phrase, or sequence that
 * reads the same backward as forward, e.g.,madam or nurses run.
 */
const isPalindrome = (string) => {
    let cleanString = string.split(" ").join("")
    let length = cleanString.length
    if (cleanString[0] !== cleanString[length - 1]) {
        return "Not a palindrome"
    }
    let reversed_string = ""
    for (let i = length - 1; i >= 0; --i) {
        reversed_string += cleanString[i]
    }
    return cleanString === reversed_string
        ? "Palindrome!"
        : "Not a Palindrome"
}

/**
 *
 * 3. Write a JavaScript function that generates all combinations of a string.
 * Example string : 'dog' Expected Output : d,do,dog,o,og,g
 */
const string_combinations = (string, result = []) => {
    let reducer = (start, depth, prefix) => {
        for (let i = start; i < string.length; i++) {
            let next = prefix + string[i]
            if (depth > 0) {
                reducer(i + 1, depth - 1, next)
            } else {
                result.push(next)
            }
        }
    }
    for (let i = 0; i < string.length; i++) {
        reducer(0, i, "")
    }
    return result
}
/**
 *
 * 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 * Example string : 'webmaster' Expected Output : 'abeemrstw'
 * Assume punctuation and numbers symbols are not included in the passed string.
 */
const alphabetize_string = (string) => {
    const sorted = string.split("").sort().join("").trim()
    return sorted
}
/**
 * 5. Write a JavaScript function that accepts a string as a parameter and converts
 * the first letter of each word of the string in upper case.
 * Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '
 */
const cap_each_word = (string) => {
    let string_array = string.trim().split(" ")
    let result = [...string_array]
    for (let i = 0; i < string_array.length; i++) {
        let element = string_array[i]
        result[i] = element.charAt(0).toUpperCase() + element.slice(1)
    }
    return result.join(" ")
}
/**
 * 6. Write a JavaScript function that accepts a string as a parameter
 * and find the longest wordwithin the string.
 * Example string : 'Web Development Tutorial' Expected Output : 'Development'
 */
const longest_word = (string) => {
    let dictionary = {}
    let result = []
    string.split(" ").forEach((element) => {
        dictionary[element] = element.length
    })
    for (const word in dictionary) {
        const word_length = dictionary[word]
        result.push({ word, word_length })
    }
    result.sort((a, b) => b.word_length - a.word_length)
    let longest = result[0].word
    return longest
}
// console.log(longest_word("Web Development Tutorial"))
/**
 * 7. Write a JavaScript function that accepts a string as a parameter
 * and counts the number of vowels within the string.
 * Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as a vowel here.
 * Example string : 'The quick brown fox' Expected Output : 5
 */

const how_many_vowels = (
    string,
    vowels = { a: "a", e: "e", i: "i", o: "o", u: "u", count: 0 }
) => {
    const cleanString = string
        .trim()
        .split(" ")
        .join("")
        .toLowerCase()
    for (let i = 0; i < cleanString.length; i++) {
        const letter = cleanString[i]
        if (vowels[letter]) vowels.count++
    }
    return vowels.count
}
// console.log(how_many_vowels("The quick brown fox"))

/**
 * 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 * Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
 */
const is_prime = (number) => {
    if (number <= 1) return false
    if (number === 2) return true
    for (let i = 3; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}
// console.log(is_prime(13))
/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
 * Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined.
 */
const type_of = (arg) => {
    return typeof arg
}
// console.log(type_of("a"))
/**
 * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
 */

const identity_matrix = (num) => {
    let x, y
    for (x = 0; x < num; x++) {
        for (y = 0; y < num; y++) {
            if (x === y) {
                console.log("1")
            } else {
                console.log("0")
            }
        }
        console.log("----")
    }
}
// identity_matrix(3)

/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Sample array : [1,2,3,4,5] Expected Output : 2,4
 */
const second_greatest_lowest = (arr) => {
    let sorted = arr.sort((a, b) => a - b)
    return [sorted[1], sorted[sorted.length - 2]].join()
}
// console.log(second_greatest_lowest([1, 2, 3, 4, 5]))

/**
 * 12. Write a JavaScript function which says whether a number is perfect.
 * According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. 
 */
const perfect_number = (num) => {
    let temp = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log(temp, i)
            temp += i
        }
    }
    if (temp === num && temp !== 0) {
        return `${num} is a perfect number`
    } else {
        return `${num} is not a perfect numer`
    }
}
// console.log(perfect_number(28))

/**
 * 13. Write a JavaScript function to compute the factors of a positive integer. 

 */
const factor = (num) => {
    let factors = new Set()
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            factors.add(i)
        }
    }
    factors.add(num)
    return factors
}
// console.log(factor(28))
/**
 * 14. Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1
 */
const amount_to_coins = (amount, coins = [25, 10, 5, 1]) => {
    let count = { amount }
    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            amount = amount - coins[i]
            count[coins[i]]
                ? count[coins[i]]++
                : (count[coins[i]] = 1)
            i--
        }
    }
    return count
}
// console.log(amount_to_coins(46))
/**
 * 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
 * Accept b and n from the user and display the result.
 */
const exp = (base, exponent) => {
    return base ** exponent
}
// console.log(exp(4, 0.5))
/**
 * 16. Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
 */
const unique_chars = (string) => {
    let unique = new Set([...string])
    return [...unique].join("")
}
// console.log(unique_chars("thequickbrownfoxjumpsoverthelazydog"))
/**
 * 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

 */
const occurrences = (string) => {
    let a = {}
    let cleanString = string.trim().split(" ").join("")
    for (const char of cleanString) {
        a[char] ? a[char]++ : (a[char] = 1)
    }

    return a
}
// console.log(
//     occurrences("the quick brown fox jumps over the lazy dog")
// )
/**
 * 
18. Write a function for searching JavaScript arrays with a binary search. 
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
 */
const binary_search = (arr, target) => {
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === target) {
            return console.log(target, " was found at index ", middle)
        }
        if (target > arr[middle]) {
            console.log("right side")
            start = middle + 1
        }
        if (target < arr[middle]) {
            console.log("left side")
            end = middle - 1
        } else console.log("not found, looking again")
    }
    console.log(target, "not found after all iterations")
}
// binary_search(
//     [1, 3, 5, 7, 11, 13, 17, 19, 23, 18, 31, 37, 41, 43, 47, 53, 59],
//     59
// )
/**
 *
 * 19. Write a JavaScript function that returns array elements larger than a number.
 */
const larger_than = (arr, num) => {
    let count = []
    for (const number of arr) {
        if (number > num) {
            count.push(number)
        }
    }
    return count
}
// // console.log(
//     larger_than(
//         [
//             1,
//             3,
//             5,
//             7,
//             11,
//             13,
//             17,
//             19,
//             23,
//             18,
//             31,
//             37,
//             41,
//             43,
//             47,
//             53,
//             59,
//         ],
//         18
//     )
// )
/**
 * 
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */
const string_id = (length) => {
    let string = ""
    let charList =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < length; i++) {
        string += charList.charAt(
            Math.floor(Math.random() * charList.length)
        )
    }
    return string
}
// console.log(string_id(7))
