function fizzBuzz(num) {
    var res =""
    var bool = [false,false]
    if (num % 3 == 0 || num % 10 == 3 || parseInt(num / 10) == 3) {
        //console.log('Fizz')
        res += 'Fizz'
        bool[0] = true
    } if (num % 5 == 0 || num % 10 == 5 || parseInt(num/10 ) == 5) {
        //console.log('Buzz')
        res += 'Buzz'
        bool[1] = true
    } 
    
    if(bool.indexOf(true) == -1){
        res = ""+num
    }

return res
}
module.exports = fizzBuzz 