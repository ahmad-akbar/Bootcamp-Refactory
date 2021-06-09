function palindrome(input) {
  let character = input.length - 1
  let containerOfOutput = ''

  while (character >= 0) {
    containerOfOutput += input[character]
    character--
  }

  if (input.toLowerCase() === containerOfOutput.toLocaleLowerCase()) {
    return ('Palindrome');
  } else {
    return ('Not Palindrome');
  }
}
console.log(palindrome('Balonku ada Lima'), '\n');

function leapYear(startYear, endYear) {
  let result = []

  while (startYear < endYear) {
    startYear += 4
    result.push(startYear)
  }

  return result.join(',')
}
console.log(leapYear(1900, 2020), '\n')

function reverseWord(input) {
  let result = input.split(' ').map((word) => {
    return word.split('').reverse().join('')
  })

  return result.join(' ')
}
console.log(reverseWord('I am A Great human'),'\n');


function fibonacci(inputArr) {
  let sum = inputArr.reduce((a, v) => a + v)

  let fib = [0, 1];
  for (let i = fib.length; i < 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  let BiggerThan = (fib) => {
    return fib > sum
  }
  let arrBiggerElements = fib.filter(BiggerThan);
  
  return arrBiggerElements[0] - sum;
}
console.log(fibonacci([15, 2, 1]), '\n');

function FizzBuzz (input) {
  let result = []
  for (let i = 1; i <= input ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0 ) {
      result.push('Fizz');
    } else {
      result.push(i);
    }
  }

  return result
}
console.log(FizzBuzz(15));