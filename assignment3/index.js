var reverseFunc = input =>{
    return input.toString().split("").reverse().join("");
}

console.log(reverseFunc(123));

var validPalindrome = input =>{
    var re = /[\W)]/g;
    var regInput = input.replace(re,"")
    var reverseInput = regInput.split('').reverse().join('')
    return reverseInput === regInput
}

console.log(validPalindrome("aba"))

function combString(str){
    var lenStr = str.length
    var result = []
    // var burr = []
    for( i = 0; i < lenStr; i++ ){
        buff = [str[i]]
        var index = 0
        while(result[index]){
            buff.push(''+result[index] + str[i])
            index ++
        }
        result = result.concat(buff)
        // console.log(buff,result)
    }
    return result
}
console.log(combString('abc'))


function alphabet_order(str){
    return str.split('').sort().join('')
}

console.log(alphabet_order('aufhiuewhb'))
