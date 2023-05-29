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

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
//(Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//Spaces will be included only when more than one word is present.

const spinWords = (s) => {
  return s.split(" ").map(function (i) {
    return (i.length > 4 ? i.split("").reverse().join("") : i)
  }).join(" ")
}

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

const getRealFloor = (n) => n <= 0  ? n : n < 13 ? n - 1 : n - 2

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
//They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
//In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member.
//Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

const openOrSenior = (data) => data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'))

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = (n) => {
  let result = n.split(" ").sort((a, b) => a - b)
  return `${result[result.length - 1]} ${result[0]}`
 }

//  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

const sumMix = (x) => x.map(i => Number(i)).reduce((a,c) => a + c, 0)

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

const stray = (n) => n.find(i => n.indexOf(i) === n.lastIndexOf(i))

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

const sortByLength = (a) => a.sort((a, b) => a.length - b.length)

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

const pipeFix = (num) =>{
  let result = []
  for (i = num[0]; i <= num[num.length - 1]; i++){
    result.push(i)
  }
  return result
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (n) => n % 2 === 0 ? n*8 : n*9

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer,
//-1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

const examScore = (a1, a2) => {
  result = 0
  for (i = 1; i < a1.length; i++){
    if (a1[i] === a2[i]){
      result += 4
    } else if (a2[i] === ""){
      result += 0
    } else {
      result -= 1
    }
  }
  if (result < 0){
    result = 0
  }
  return result
}

// Write a program that checks if a word can go through the "Green Glass Door"
// Example: You can take the moon, but not the sun.

const stepThroughWith = (s) => s.split("").reduce((a, c, i) => c === s[i+1] ? true : a, false)

// In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

const squareDigits =(n) =>{
  let s = n.toString()
  let a = s.split("").map(i => i*i).join("")
  return +a
}

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

const flattenAndSort = (a) => [].concat(...a).sort((a,b) => a - b)

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let grade = (s1 + s2 + s3) / 3
  if (grade >= 90){
    return 'A'
  } else if (grade >= 80 && grade < 90){
    return 'B'
  } else if (grade >= 70 && grade < 80){
    return 'C'
  } else if (grade >= 60 && grade < 70){
    return 'D'
  } else {
    return 'F'
  }
}

//Examples of Async/Await via Fireship.io

import fetch from 'node-fetch'

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
  .then(res => res.json())
  .then(user => console.log('🥺', user.title))
  .catch(err => console.log('😭', err))

console.log('🥪 Synchronus')

//Async

const getFruit = async(name) => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓'
  }

    return Promise.resolve(fruits[name])
}

getFruit('peach').then(console.log)

//Async and Await

const makeSmoothie = async() => {
  const a = await getFruit('pineapple')
  const b = await getFruit('peach')
  const smoothie = await Promise.all([a,b])

  return smoothie
}

makeSmoothie().then(log)


const badSmoothie = async() => {
  try{
    const a = getFruit('pineapple')
    const b = getFruit('peach')

    const smoothie = await Promise.all([a,b])

    throw 'broken'

    return smoothie
  } catch(err){
    console.log(err)
    //return `😬 We are going to be fine`
    throw `💩 It's broken`
  }
}

// 

const fruits = ['peach', 'pineapple', 'strawberry']

const smoothie = fruits.map(i => getFruit(i))

const fruitLoop = async() => {
  for await(const emoji of smoothie) {
    log(emoji)
  }
}

// 

const fruitInspection = async() => {
  if (await getFruit('peach') === '🍑') {
    console.log('Looks peachy!')
  }
}

// Given an integral number, determine if it's a square number:

const isSquare = function(n){
  return Math.sqrt(n) % 1 === 0
}

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

const diamond = (n) =>{
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (i = 0; i < n; i++){
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += `*`.repeat(n-2*len)
    str += `\n`
  }
  return str
}

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 === 0){
    let sqrt = Math.sqrt(sq) + 1
    return sqrt**2
  } else {
    return -1;
  }
}

// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or"
//(hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true,
//false otherwise.

const xor = (a, b) => {
  if (a === true && b === true || a === false && b === false){
    return false
  } else if (a !== true && b !== true){
    return true
  } else {
    return true
  }
}

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

const sumArray = (a) => a ? a.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0) : 0

// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

const replace = s => (s.split('').map(i => 'aeiou'.includes(i.toLowerCase()) ? '!' : i)).join('');

// Your goal is to return multiplication table for number that is always an integer from 1 to 10

const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) ? true : false

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const findUnique = (a) => a.find(i => a.indexOf(i) === a.lastIndexOf(i))

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const litres = (t) => Math.floor(t * .5)

// Given an array of integers, return a new array with each value doubled.

const doubled = (x) => x.map(i => i*2)

// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
//If there are multiple elements with the same value, remove the one with a lower index.
//If you get an empty array/list, return an empty array/list.

const removeSmallest = (num) => num.filter((n, i) => i !== num.indexOf(Math.min(...num)))

// In this kata you get the start number and the end number of a region and should return the count of all 
// numbers except numbers with a 5 in it. The start and the end number are both inclusive!

const dontGiveMeFive = (start, end) => {
  let result = 0
  for (i = start; i <= end; i++){
    if (!i.toString().includes("5")){
      result++      
    }
  }
  return result
}

// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

const mostLikely = (prob1,prob2) => prob1.split(":").reduce((a, c) => a / c) >= prob2.split(":").reduce((a, c) => a / c) ? true : false

// Write a program that finds the summation of every number from 1 to num.
//The number will always be a positive integer greater than 0.

var summation = function (num) {
  let a = []
  for (i = 1; i <= num; i++){
    a.push(i)
  }
  return a.reduce((a, c) => a + c)
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
//If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// You need to write a function that reverses the words in a given string. A word can also fit an empty string.
//If this is not clear enough, here are some examples:

const reverse = (s) => s.split(" ").reverse().join(" ")

// Implement a function that adds two numbers together and returns their sum in binary.
//The conversion can be done before, or after the addition.

const addBinary = (a,b) => (a + b).toString(2)

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

const remove = (s) => s.endsWith('!') ? s.slice(0, -1) : s

// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  while(n % 10 === 0 && n != 0){
    n /= 10
  }
  return n
}