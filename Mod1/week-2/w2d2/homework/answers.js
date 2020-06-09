////////////////Easy Going Answered////////////////////////////////////////////

// write a loop that will long the numbers 1 through 20

/*for ( i = 0; i <= 20; i++)


{
 console.log(i)

}



/////////////////////////////////////////////////////////////////////////////////////



//////////////////////////Get Even///////////////////////////////////////////////////

for (i = 0; i <= 200; i+= 2)


{


  console.log(i)

}

*/
/////////////////////////////////////////////////////////////////////////////////////


/////////////////Fizz Buzz///////////////////////////////////////////////////////////

/* 1 write a loop that count from 0 to 100
   2 write a string 'Fizz' only if i divisible by 3 and it has a remainder of 0. (odd number)
   3 write a string 'Buzz' only if i divisible by 5 and it has a remainder of 0.
   4 console.log 'FizzBuzz' if the number is divisible by 5 and 3.


for(i = 0; i <= 100; i++)


 if  (i % 3 === 0 && i % 5 === 0)
     {
    console.log('Fizz Buzz', i);

     }

 else if ( i % 3 === 0)

 {
 console.log('Fizz', i);

}

else if  ( i % 5 === 0)
    {  
     console.log('Buzz', i);
   
    }

    */

 /////////////////////////////////////////////////////


 ///////////Wild Wild////////////////////////////////////////////////////////////////

// pseudo code
/*Plantee just had her birthday; change Plantee's array to reflect her being a year older.

Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

Give D'Art a second hometown by adding "Hawkins"

Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

 const wolfy = ['Wolfy', 'wolf', 16,  'Yukon Territory']
 const sharky = ['Sharky', 'shark', 20,  'left coast']
 const plantee = ['Plantee', 'plant',5000,  'Mordor']
 const  porgee = ['Porgee', 'Porg', 186,  'Ahch-To']
 const  dart = ['D\'Art', 'Demogorgan Dog', 2,  'Upside Down']

 console.log (plantee);

wolfy [3] = 'Gotham City';
 //console.log (wolfy);

dart.push ("Hawkins");
//console.log(dart);

wolfy.splice (0, 1, 'Gameboy');
// console.log(wolfy);

/* or we can use this option
wolfy [0] = 'Gameboy'
*/

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 ///////////////////////////////////////////////////////////////////////////////////////////////////////
// Yell at the Ninja Turtles


//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

//Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

/*
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for ( const  element of turtles)
{
    console.log(element.toUpperCase())
}

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////Methods, Revisited///////////////////////////////////////////////////////


const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


//console.log(favMovies.indexOf('Titanic'));

//Answers  of questions

//1- use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//console.log(favMovies.sort())

//2-Use the method pop method
//console.log(favMovies.pop());

//3- push "Guardians of the Galaxy" 
//favMovies.push('Guardians of the Galaxy');
//console.log(favMovies);

//4-Reverse the array
//console.log(favMovies.reverse());

//5-Use the shift method to remove "Fast and Furious"
 
//favMovies.shift('Fast and Furious');
//console.log(favMovies);

//6-unshift - what does it return?  
//A: this method adds a new element to an array, at the beginning and unshifts older elements.

//7- splice, "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself
//favMovies.splice(3, 1, "Avatar");

//console.log(favMovies.indexOf('Django Unchained')); // index is  3
// console.log(favMovies);

//8-splice the last half of the array (challenge yourself and try to programmatically determine the middle of the array
// rather than counting it and hard coding it)

//favMovies.splice(8, 8);
//console.log(favMovies)

//9-store the value of your slice in a variable, console.log it 
const results = favMovies.splice(8, 8);

//10- console.log your final results
//console.log(results);

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we 
//get when we look for the index of something that is not in the array?

//console.log(favMovies.indexOf("Fast and Furious")); // I got 10 for the index

//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////Where is Waldo///////////////////////////////////////////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];



//Remove Eggbert (hint look at the slice/splice method(s))

//whereIsWaldo.splice(1,1);
//console.log (whereIsWaldo);


//Change "Neff" to "No One"
//whereIsWaldo [1][2] = "No One"

////console.log (whereIsWaldo);


//Access and console.log "Waldo"
//console.log(whereIsWaldo [2] [0, 1] [1]);



//////////////////////////////////////////////////////////////////////////////////////////////////////////