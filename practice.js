// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

//Solution:
let areYouPlayingBanjo = (name) => name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`


// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const findUniq = (arr) => arr.find(v => arr.indexOf(v) === arr.lastIndexOf(v))


// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }

  // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
  // If you want to know more: http://en.wikipedia.org/wiki/DNA  
  // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
  //Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
  //DNA strand is never empty or there is no DNA at all (again, except for Haskell).
  // More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
  // Example: (input --> output)  
  // "ATTGC" --> "TAACG"
  // "GTAT" --> "CATA"

  let DNAStrand = (dna) => {
    let arr = dna.split("")
    return arr.map(i => {
      if (i === "A"){
        return "T"
      } else if (i === "T"){
        return "A"
      } else if (i === "G"){
        return "C"
      } else {
        return "G"
      }
    }).join("")
  }


// Complete the function power_of_two/powerOfTwo (or equivalent, 
//depending on your language) that determines if a given non-negative integer is a power of two. 
//From the corresponding Wikipedia entry:
//a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation
//with number two as the base and integer n as the exponent.

const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n))

// Complete the function that accepts a string parameter, and reverses each word in the string.
//All spaces in the string should be retained.

const reverseWords = str => {
  let arr = str.split(" ")
  let result = arr.map(i => i.split("").reverse().join(""))
  return result.join(" ")
}

//Given a month as an integer from 1 to 12,
//return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June),
//is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month <= 3){
    return 1
  } else if (month > 3 && month <= 6){
    return 2
  } else if (month > 6 && month <= 9){
    return 3
  } else {
    return 4
  }
}

// Write a function that returns both the minimum and maximum number of the given list/array.

const minMax = (arr) => {
  let sorted = arr.sort((a, b) => a - b)
  let result = [sorted[0], sorted[sorted.length - 1]]
  return result
}

//Write a function that accepts an array of 10 integers (between 0 and 9),
//that returns a string of those numbers in the form of a phone number.

const createPhoneNumber = (numbers) => {
  let areaCode = numbers.splice(0, 3).join("")
  let middle = numbers.splice(0, 3).join("")
  let end = numbers.splice(0, 4).join("")
  
  return `(${areaCode}) ${middle}-${end}`
}

// Write a function to split a string and convert it into an array of words.

const stringToArray = (s) => s.split(" ")

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

const abbrevName = (name) => {
  let arr = name.toUpperCase().split(" ")
  return `${arr[0][0]}.${arr[1][0]}`
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (n) => n.map(i => i*i).reduce((a, c) => a + c, 0)

// In a factory a printer prints labels for boxes. 
//For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. 
//For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a,
//four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced
//e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of
//the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string.
//Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

const printerError = (s) => {
  let result = s.split("").filter(i => i > "m")
  return `${result.length}/${s.length}`
}

// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"

const accum = (s) => s.split("").map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const findShort = (s) => {
  let a = s.split(" ").sort((a, b) => a.length - b.length)
  return a[0].length
}

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"

const camelCase = (s) => s.split("").map(i => i === i.toUpperCase() ? i = ` ${i}` : i).join("")

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

const repeatStr = (n, s) => s.repeat(n)

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const getCount = (s) => s.split("").filter(i => i.toLowerCase() === 'a' || i.toLowerCase() === 'e' || i.toLowerCase() === 'i' || i.toLowerCase() === 'o' || i.toLowerCase() === 'u').length