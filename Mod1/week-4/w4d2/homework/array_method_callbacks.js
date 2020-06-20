/*example
const classArray = ['Javascript', 'HTML', 'CSS', 'DATA Analysis']
classArray.sort();

console.log(classArray);



// sort method


const classList = ['tree', 'house', 'car', 'lake']
classList.sort();

//console.log(classList);

const updateClassArray = classList.sort((elem) =>{
return elem; 
});

console.log(updateClassArray);


// filter array method

//The filter() method creates a new array with all elements that pass the test implemented
// by the provided function.

const outdoorActivities = ['camping', 'hiking', 'traveling', 'kayaking', 'destruction', 'cycling'];

const result = outdoorActivities.filter(word => word.length < 8);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

*/



//Homework  Lab  

// Messing with the minions


//const array1 = ['a', 'b', 'c'];                   Example

//array1.forEach(element => console.log(element));  Example
// expected output: "a"
// expected output: "b"
// expected output: "c"



const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl'];

//minions.forEach(element => console.log(element + '' + ' - here'))  // foreach method


const updatedMinionsArray = minions.map ((caps) => {
caps.charAt(0).toUpperCase() + caps.slice((1))

//caps.splice(1).toUpperCase();
return caps;
 
 //.caps.charAt(0);
   

});

console.log(updatedMinionsArray);