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
const alphabetize_string = (string) => {
    const sorted = string.split("").sort().join("").trim()
    return sorted
}

console.log(string_combinations("dog"))
