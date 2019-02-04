const fizzBuzz = require('./fizzBuzz')

test('A number is Fizz if it is divisible by 3 ' , () => {
    expect(fizzBuzz(3)).toBe('Fizz')
})

test('A number is Buzz if it is divisible by 5 ' , () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})


test('A number is Fizz if number has a 3 in it' , () => {
    expect(fizzBuzz(32)).toBe('Fizz')
})

test('A number is Buzz if number has a 5 in it' , () => {
    expect(fizzBuzz(52)).toBe('Buzz')
})


test('A number is Fizz if it is divisible by 3 and  has a 3 in it' , () => {
    expect(fizzBuzz(33)).toBe('Fizz')
})


test('A number is Buzz if it is divisible by 5 and  has a 5 in it' , () => {
    expect(fizzBuzz(55)).toBe('Buzz')
})


test('A number is FizzBuzz if it is divisible by 3 and  has a 5 in it' , () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})


test('A number is FizzBuzz if it is divisible by 3 and divisible by 5' , () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})


test('A number is FizzBuzz if it is divisible by 3 , divisible by 5 and has a 5 in it' , () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})