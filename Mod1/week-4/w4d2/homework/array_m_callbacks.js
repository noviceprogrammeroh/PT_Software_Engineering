/*Section 3 Array Methods with Callbacks
A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it
 and returns a new arrays.But what should it do? Multiply everything by 5? Capitalize everything?
If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible. By allowing a callback to determine 
what happens to each array element we get a lot of flexibility and we can do some really powerful things. */


//Two arrays to work with

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

//const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

/*
 Every
 Determine if every number is greater than or equal to 0

 const checkValueOfNumbers = (currentValue) => currentValue >= 0;
 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
 console.log(nums.every(checkValueOfNumbers)); // the output is true

 Every
 determine if every word shorter than 8 characters

 const checkCharactersSize = (currentValue) => currentValue < 8;
 const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
 console.log(panagram.every(checkCharactersSize)); // the output is false

*/


/*
Filter
filter the array for numbers less than 4

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const newArr = nums.filter(num => num < 4);

console.log(newArr);


filter words that have an even length

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const checkArr = panagram.filter(word => word.length % 2 === 0);

console.log(checkArr); // answer  are over and lazy
*/


/*
Find
Find the first value divisible by 5//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const found = nums.find(element => element % 5 === 0);

console.log(found); // returns 5

Find
find the first word that is longer than 5 characters

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const foundWord = panagram.find(word => word.length > 5);

console.log(foundWord); // I get an undefined answer.

*/



/*******************************Find Index*******************************************************/
/*
find the index of the first number that is divisible by 3


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const indexNum = nums.findIndex(elem => elem % 3 === 0);
console.log(indexNum); // the first number 3 so the index of the first number is element 2.



find the index of the first word that is less than 2 characters long

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
let wordIndex2 = panagram.findIndex(word => word.length < 2);
console.log(wordIndex2); // return -1 that indicates that no element passed the test.
*/

/*******************************END*******************************************************/



/*******************************For**Each*******************************************************/

//For Each
//console.log each value of the nums array multiplied by 3

//The forEach() method executes a provided function once for each array element.

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

 //nums.forEach(element => console.log(element * 3));


 //console.log each word with an exclamation point at the end of it

 //const newArr = [];
 //const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//panagram.forEach(element => console.log(element + '!'));


/*******************************END*************************************************************/



/*******************************Map*******************************************************/
/*
Map
make a new array of each number multiplied by 100
make a new array of all the words in all uppercase


make a new array of each number multiplied by 100
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const newArray = nums.map(elem => elem * 100);

console.log(newArray);



make a new array of all the words in all uppercase
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const newArrayOfWords = panagram.map(word => word.toUpperCase());
console.log(newArrayOfWords);


/*******************************End*******************************************************/




/*******************************Map*******************************************************/


//Find out if some numbers are divisible by 7
//const array = [1, 2, 3, 4, 5];

// checks whether an element is even
//const even = (element) => element % 2 === 0;

//console.log(array.some(even));
// expected output: true

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
//const calcNum = (element) => element % 7 === 0;
//console.log(nums.some(calcNum));  // the answer is true


//Find out if some words have the letter a in them. I tried different ways to do it and I get the same answer false.
// It 'a' is part of a word it will display false, if 'a' is just by itself it will display true.

/*const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const checkLetter = (panagram, letter) => {

return panagram.some(arrVal => letter === arrVal)
}

checkLetter(panagram,'a')

console.log(checkLetter(panagram));
*/
//const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// checks whether an element is even
/*
const checkLetter = (element) => element === 'a';

console.log(panagram.some(checkLetter));
*/


/*
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


function checkLetter(ltr) {
  return ltr === 'a';
}

function myFunction() {
console.log(panagram.some(checkLetter)); // it only checks if a is a single character but if a is part of word, it will skip it. So it is false.
                                    
}
myFunction();

*/



/*******************************END*******************************************************/