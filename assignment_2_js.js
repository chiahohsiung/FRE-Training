// Reverse a number function
const reverseNumber = num => {
    let strNum = num.toString()
    // if empty string, or one digit number
    if(strNum.length <= 1){
        return num
    } else if (typeof(num) === "number"){
        console.log(+strNum.split("").reverse().join(""))
        return +strNum.split("").reverse().join("")
    }
    console.log("can only reverse the 'number' type")
}
    // reverseNumber(1000002)
// check if string is a palindrome
const isPalindrome = str => {
    // if argument is string then turn into an array, reverse it and join it back to a string, then compare
    if(typeof(str) === "string"){
        let reversed = str.split("").reverse().join("")
        return reversed === str? true : false
    } else {
        console.log("input must be string")
    }
}
    // console.log(isPalindrome(12))
// Generate all combinations of a string
const generateCombinations = str => {
    let results = []
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length + 1; j++){
            results.push(str.slice(i,j))
        }
    }
    return results.join(",")
}
    // console.log(generateCombinations("dog"));
   
// return string in alphabetical order
const sortString = str => {
    let lowerCase = str.toLowerCase()
    let sorted = lowerCase.split("").sort()
    return sorted.join("")
}
    // console.log(sortString("Ananya"))

// capitalize every word of a sentence
const capitalizeStr = str =>{
    let arr = str.split(" ")
    let result = arr.map(word => word[0].toUpperCase() + word.slice(1))
    return result.join(" ")
}

// find longest word of string
const findLongestWord = str => {
    let arr = str.split(" "),
        longest = ''
    arr.forEach(word => {
        if(word.length > longest.length){
            longest = word
        }
    })
    return longest
}
    // console.log(findLongestWord('Web Development Tutorial'))
    
// count vowel quantity in string
const findVowelQty = str => {
    let qty = 0
    let dictionary = {a:1, e:1, i:1, o:1, u:1}
    str.split("").forEach(letter => {
        dictionary[`${letter}`]? qty++ : null
    })
    return qty
}
    // console.log(findVowelQty("The quick brown fox"));
    
const isPrime = num => {
    if(num < 1) return false
    for(let i=2 ; i < num; i++){
        // if num divided by the counter gives you a whole number, then it's not prime
        if(num%i === 0) return false
    }
    return true
}
    // console.log(isPrime(7))

// return type of input
const whatsTheType = input => {
    return typeof(input)
}
    console.log(whatsTheType({}))