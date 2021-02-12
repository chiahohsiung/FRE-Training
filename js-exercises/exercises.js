function reverse(num){
    //Num->Str: String(num) || num.toString() || ""+num
    //Str->Num: + num
    return +num.toString().split('').reverse().join('')
    
}
console.log('(1)Reverse:',reverse(12456))

function isPalindrome(str){
    let newStr= str.replaceAll(" ","")
    let revStr= newStr.split('').reverse().join('')
    if (newStr === revStr){
        return `"${str}" is a palindrome`
    }
    else return `"${str}" is not palindrome`

}
console.log('(2):',isPalindrome('nurses run'))

function strCombination(str){
    let result=[]
    for (let i=0; i<str.length; i++){
        for (let j=i+1; j<=str.length; j++){
            result.push(str.substring(i,j))
        }

    }
    return result
}
console.log('(3):', strCombination('dog'))

function sortStr(str){
    return str.split('').sort().join('')
}
console.log('(4):', sortStr('webmaster'))

function capitalizeFirstLetter(str){
    return str.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(" ")
}
console.log('(5):',capitalizeFirstLetter('the quick brown fox'))

function findLongestWord(str){
 return str.split(' ').sort((a,b)=>b.length-a.length)[0]
}
console.log('(6):',findLongestWord('Web Development Tutorial') )

function countTheVowes(str){
    let vowes=['a','e','i','o','u']
    return str.toLowerCase().split('').filter(letter=>vowes.includes(letter)).length
}
console.log('(7):', countTheVowes('The quick brown fox'))

function isPrime(num){

}
console.log('(8):', )

function type(variable){
    return typeof(variable)
}
console.log('(9):', type(65) )

// function matrix(){

// }

function findNumbers(arr){
    //second lowest and second greatest
    arr.sort()
    return [arr[1], arr[arr.length-2]]
}
console.log('(11):', findNumbers([5,3,2,1,4]) )

function isPerfect(num){

}
console.log('(12):', )

function factors(num){
    //compute the factor of a number
}
console.log('(13):',factors(15) )

function amountTocoins(num, array){

}
console.log('(14):', )

//15-19

function compute(base, expo){
    while (expo>=1){
        return base * compute(base, expo-1)
    }

}
console.log('(15):',compute(2,3) )

function extractChar(str){

}

function occurrences (str, letter){

}

function binary(array){

}

function searchElement( arr, num){

}

//20-24

function generateId(char){

}

function subset(array,length){

}

function countLetter(str, letter){

}

function findNotRepeatedLetter(str){

}

function bubbleSort(){

}

//25-27

function longestCountryName(arr){

}

function longestSubstr(str){

}

function longestPalindrome(str){

}

//28 write a JS program to pass a JS function as parameter

//29 write a JS function to get the function name

