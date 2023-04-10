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