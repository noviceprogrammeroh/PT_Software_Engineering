/*

For each of the following, write which datatypes you would use to represent the data,
 and then give a small example of the data structure:

//A light switch that can be either on or off.

 const switch = true;    //datatype boolean  

A user's email address.
 
const UserEmailAddress = "nyemail@noadd.com" // datatype string

//A spaceship with a hull, laser blasters, tractor beam, and warp drive.

 const spaceship = {
     
    hull, 
    gun: laser blaster,
    device: tractor beam,
    system: warp drive
   }                        // object array

//A list of student names from our class.
 const students = [DAmber, Kimmy, Hector, Bob]; // datatype an array
console.log(students); 

//A list of student names from our class, each with a location. 

const studentNamesLocations = [   
   {name: 'DAmber', location: 'Columbus, OH'},
   {name: 'Kimmy', location: 'Columbus, OH'},
   {name: 'Hector', location: 'Columbus, OH'},
   {name: 'Bob', location: 'Columbus, OH'}]

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);   // this will be considered an array of objects



//A list of student names from our class, each with a location and each with a list of favorite tv

const studentNamesLocations = [ 
 {name: 'DAmber', location: 'Columbus, OH', favTvShows: ['The Simpson', 'Agents of Shield', 'Friends']},
 {name: 'Kimmy', location: 'Columbus, OH', favTvShows: ['Bones', 'Smallville', 'Super Woman']},
 {name: 'Hector', location: 'Columbus, OH', favTvShows: ['The Mentalist', 'Space Force', 'Alone']}, 
 {name: 'Bob', location: 'Columbus, OH', favTvShows: ['The Simpsons', 'Silicon Valley', 'Dark']},]
 
 console.log(studentNames_Locations);  // This will be considerd a datatype: Array of Object with Array//data structure example


*/

////////////////////Take it Easy////////////////////////////////////////////////////////////
/*

//Make an array that holds all of the colors of the rainbow.

const rainbowColors = ['red', 'orange', 'yelow', 'green', 'blue', 'indigo','violet'];
console.log(rainbowColors);

//Write code that will access "blue" from the rainbow array.
const rainbowColors = ['red', 'orange', 'yelow', 'green', 'blue', 'indigo','violet'];
console.log(rainbowColors[4]);

//Make an object that is called your name and holds the information about your favorite food, a hobby, 
the name of the town that you live in currently, and your favorite datatype.

const hector = {
     
   favoriteFood : 'Greek',
   hobby: 'hiking',
   hometown: 'Columbus',
   favoriteDataType: 'objects'
  } ; 

  console.log(hector);

Write code that will access your hobby from the object that you just created.

const hector = {
     
   favoriteFood : 'Greek',
   hobby: 'hiking',
   hometown: 'Columbus',
   favoriteDataType: 'objects'
  } ; 

  console.log(hector.hobby);

*/
/////////////////////////////////////End////////////////////////////////////////////////////


////////////////////////////////////Crazy Object///////////////////////////////////////////

/*

  const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

//Use crazy Object to log the following.
"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

//"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);

//Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');

console.log(crazyObject.larry);

*/
////////////////////////////////////End//////////////////////////////////////////////////////


////////////////////////////////////Object-ception ///////////////////////////////////////////
/*

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
  // Change the value of limbo to null.
 // inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

  console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
  
 */

////////////////////////////////////End //////////////////////////////////////////////////////


/////////////////////////////////////Bond Films//////////////////////////////////////////////
/*
//Array of objects:

const bondFilms = [
   { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
   { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
   { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
   { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
   { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
   { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
   { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
   { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
   { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
   { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
   { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
   { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
   { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
   { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
   { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
   { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
   { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
   { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
   { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
   { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
   { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
   { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
   { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
 ];



 //Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals
 // and methods in order to complete the below:

 //Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

 //Create a new array oddBonds, of only the Bond films released on odd-numbered years.
 
 //Determine the total cumulative gross of the Bond franchise, and console.log the result. hint
To make the grosses into usable numbers, look into the.replace 
Javascript method (there are many ways to do this, however). Look into parseInt also.




//Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.////////
/*
  const bondTitle = []; 
  const bondYear =  [];


 for(let i = 0; i < bondFilms.length; i++) {
  
     bondTitle.push(bondFilms[i].title)   // to get the films in one array
   

  //Create a new array oddBonds, of only the Bond films released on odd-numbered years.

    if (bondFilms[i].year % 2 !== 0)
     {
       bondYear.push(bondFilms[i].year)

     }
  }
  console.log(bondTitle);
  console.log(bondYear);
 */
 /////////////////////////////End///////////////////////////////////////////////////////////

/*


Determine the total cumulative gross of the Bond franchise, and console.log the result.
hint To make the grosses into usable numbers, look into the .replace Javascript method 
(there are many ways to do this, however). Look into parseInt also.




bondGross = [];

let i =0;
for(let i = 0; i < bondFilms.length; i++) 
{

 bondGross.push(bondFilms[i].gross)   // to get the films in one array
 
  

}
 for (let i = 0; i < bondGross.length; i++) // loops through the entire new array and removes a comma
 {
  

  let str = bondGross[i];
  let res = str.replace( /,/g, '');  // I tried to remove the $ but I could. I only removed the comma.
  //console.log(res);
 };
  

 function convert(x, base) {
  const parsed = parseInt(bondGross[i], 10);
  if (isNaN(parsed)) { return 0; }       
 
  return parsed + bondGross.length,i;    // how to add the elements inside of the new array to get the new total?

  
 }

 console.log(convert(bondGross[i]));


*/



/*
 ///////////// Not part of my answer. Experimentin with additional steps to try to solve the problem above.
//console.log(bondFilms.length)  // 23 is the lenght of the array
 //parseInt(bondFilms[i].gross)



//const total = bondFilms[i].gross + bondFilms.length;

//console.log(total);

 //const num0=   parseInt(bondFilms[0].gross)
 //const num1=  parseInt(bondFilms[1].gross)

 
 const num2=  bondFilms[2].gross ;
 const num3=  bondFilms[3].gross ;
 const num4=  bondFilms[4].gross ;
 const num5=  bondFilms[5].gross ;
 const num6=  bondFilms[6].gross ;
 const num7=  bondFilms[7].gross ;
 const num8=  bondFilms[8].gross ;
 const num9=  bondFilms[9].gross ;
 const num10=  bondFilms[10].gross ;
 const num11=  bondFilms[11].gross ;
 const num12=  bondFilms[12].gross ;
 const num13=  bondFilms[13].gross ;
 const num14=  bondFilms[14].gross ;
 const num15=  bondFilms[15].gross ;
 const num16=  bondFilms[16].gross ;
 const num17=  bondFilms[17].gross ;
 const num18=  bondFilms[18].gross ;
 const num19=  bondFilms[19].gross ;
 const num20=  bondFilms[20].gross ;
 const num21=  bondFilms[21].gross ;

//const Totalsum = (num0 + num1 /*+ num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13
  //////            + num14 + num15 + num16 + num17 + num18 + num19 + num20 + num21 + num22 */);

//console.log(Totalsum +' Total' )
//console.log(Totalsum)

*/
 


 

