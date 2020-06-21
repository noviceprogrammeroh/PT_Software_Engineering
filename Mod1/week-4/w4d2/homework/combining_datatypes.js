
/************ Section 2 Combining Datatypes Combine objects, arrays, and functions */


/*--------------------------------------------------------------------------------------------*/
// 1- Create an object, called crayonBox, that has a property that is an array. 
//The array should have the names of some crayons. Log one of the elements of that array.


//const crayonBox = {

 //   listOfCrayons: ['indigo', 'red', 'green', 'black', 'brown']
    
  //   }


//console.log(crayonBox.listOfCrayons[2]) // displays color green
/*------------------------------End----------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------*/
//Create an object bottle that has a property that is an object: cap. cap can have properties 
//like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
 cap :
{
 material: 'plastic',
 color : 'blue',

}

}

//console.log (bottle.cap.material) this line of code displays plastic
/*----------------------------End----------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------*/
//Create an array called receipt that has at least one object in it. 
//The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [

 items = { name: 'sales', price : '$3.50'}


]
 //console.log(receipt[0].name) prints out the sales item inside of the object which is inside of the array.
/*-----------------------------End---------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------*/
 //Create an array called apartmentBuilding that has an array as one of its elements, the inner array should 
 // be the names of the tenants. Log one of the elements of the inner array.


 apartmentBuilding = [
  ['Jose', 'Bryan', 'Kimberly', 'Angel', 'Hector']

 ];

//console.log(apartmentBuilding[0][2]); this code diplays tenant Kimberly.
/*----------------------END----------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------*/
//Combine objects, arrays, and functions more than one level deep

// 1- Create a function knit that returns an object that has the following kinds of properties 
//item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {

const obj ={

    item: 'scarf',
    size: '6ft'
}


//console.log(obj.item);    display the element inside of the object
return obj.item

}
knit()
/*----------------------------End-------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------*/
// 2- Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
// Log one of the elements of that array.

const crayonSelector = () => {

    const crayonBox = {

    listOfCrayons: ['indigo', 'red', 'green', 'black', 'brown']

}

//console.log(crayonBox.listOfCrayons[3]); // displays black 

}
crayonSelector();
/*-------------------------------------------------End---------------------------------------------------------------*/



/*------------------------------------------------------------------------------------------------*/

//3-Create a function powerButton that returns a function called 
//options - options should console.log a simple message like select a song. Call that inner function

const options = () =>

{
  //console.log('select a song ')  //display the message when the code runs!

}


const powerButton = () =>

{
  options ()

}

powerButton();

/*-----------------------------------------End-------------------------------------------------------*/



/*------------------------------------------------------------------------------------------------*/

//Model a Vending Machine Model a vending machine////////////////////////////////////////////////



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
            console.log('it aint working')

            
    }
    
    




}





}

//console.log(vendingMachine.vend(2)); // this code displays the  user's selection. Starburts

/* experimenting with new code. 
It is not part of the anwer. I was trying to get the user input

  
 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

    readline.question('Please make your selection : ' , param, vendingMachine => {


        console.log(`You have selected ${param}, ${vendingMachine.vend()}, Thank you for your purchase!`);
        readline.close();
      });

 readline.question()
*/
  
/*----------------------------------------End--------------------------------------------------------*/



/*------------------------------------------------ Callbacks------------------------------------------------- */

//Make a function add that takes two arguments (numbers) and sums them together
//Make a function subtract that takes two arguments (numbers) and subtracts them

//Make a function multiply that takes two arguments and multiplies them

//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.//

//Call calculate 4 times, each time using one of the operation functions you wrote


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



//console.log(calculates(10,10, addNums));
//console.log(calculates(10,5, subtractNums));
//console.log(calculates(10,10, multiplyNums));
//console.log(calculates(10,10, divideNums));

/*------------------------------End-------------------------------------------------------------*/


/*-------------------------------------------------------------------------------------------*/

//Function definition placement
//Clean up this code, so that it works and has function definitions in the correct place




const bar = () => {
    //console.log('bar here');  // the code should work now. It cannot be called unless it's initiliazed first. The function
}                             // call goes afert the function.


//const foo = () => {
    //console.log('foo here');
//}


bar();
//foo();
/*------------------------------------End-------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------*/

//Error reading
//What is meant by the error(s) this produces?
// missing initiliazer in const declaration. It  is missin the assignment operator.

foo();

const foo  ()=>{
    console.log('hi');   
}

/*------------------------------------End-------------------------------------------------------*/