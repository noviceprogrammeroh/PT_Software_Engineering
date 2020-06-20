
/*
Section 1: Programming Fundamentals

DRY
KISS
Avoid creating a YAGNI
Do the simplest thing that could possibly work
Don't make me think
Write code for the maintainer
Single responsibility principle
Avoid premature optimization
Separation of concerns

*/









//Combine objects, arrays, and functions more than one level deep


//Create a function crayonSelector that returns an object that has an array 
//(you can reuse your crayonBox object). Log one of the elements of that array.

//Create a function crayonSelector that returns an object that has an array 
//(you can reuse your crayonBox object). Log one of the elements of that array.



const crayonBox = {

    listOfCrayons: ['indigo', 'red', 'green', 'black', 'brown']
    
     }

const crayonSelector = () =>
{

 return crayonBox

}

crayonSelector();

//console.log(crayonBox.listOfCrayons[0])


//Create an object bottle that has a property that is an object: cap. cap can have properties 
//like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
 cap :
{
 material: 'plastic',
 color : 'blue',

}

}

//console.log (bottle.cap.material)


//Create an array called receipt that has at least one object in it. 
//The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = []







const knit = () => {

const obj ={

    item: 'scarf',
    size: '6ft'
}


console.log(obj.item);
return obj.item

}
knit()



//3-Create a function powerButton that returns a function called 
//options - options should console.log a simple message like select a song. Call that inner function

const options = () =>

{
  console.log('select a song ')

}


const powerButton = () =>

{
  options ()

}

powerButton();

/////////////////////////////////////////////////////////////////////////////////////////////////


//Model a Vending Machine Model a vending machine////////////////////////////////////////////////

//Make a function add that takes two arguments (numbers) and sums them together
//Make a function subtract that takes two arguments (numbers) and subtracts them

//Make a function multiply that takes two arguments and multiplies them

//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.//

//Call calculate 4 times, each time using one of the operation functions you wrote

const vendingMachine = {
snacks: [
    {
 name: 'snickers',
 price: 1,
    },

    {
 name: 'twix',
 price: 2,
    },

   {
 name: 'starburts',
 price: 3,
  }

],



vend: function vend(userInput){
    switch(userInput) {
        case 0:
            console.log(vendingMachine.snacks[userInput])
            break;
        case 1:
            console.log(vendingMachine.snacks[userInput])
            break;
        case 2:
            console.log(vendingMachine.snacks[userInput])
            break;    
        case 3:
            console.log(vendingMachine.snacks[userInput])
            break;
        default:
            console.log('i aint working')
    }
}
}
console.log(vendingMachine.vend(1))


/* Callbacks


const addNums = (num, num2) => {

return num + num2;

}


const subtractNums = (num, num2) => {

return num - num2;

}

const multiplyNums = (num, num2) => {

return num * num2;

}

const divideNums = (num, num2) => {

return num / num2;
}



const calculates = (num, num2, operates) => {
 
    return operates (num, num2);

}



console.log(calculates(10,10, addNums));
console.log(calculates(10,5, subtractNums));
console.log(calculates(10,10, multiplyNums));
console.log(calculates(10,10, divideNums));


/*

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}

*/