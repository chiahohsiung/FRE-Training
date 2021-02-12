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
    vowels = { a: "a", e: "e", i: "i", o: "o", u: "u" }
) => {
    const cleanString = string
        .trim()
        .split(" ")
        .join("")
        .toLowerCase()
    let count = 0
    for (let i = 0; i < cleanString.length; i++) {
        const letter = cleanString[i]
        if (vowels[letter]) count++
    }
    return count
}
console.log(how_many_vowels("The quick brown fox"))
