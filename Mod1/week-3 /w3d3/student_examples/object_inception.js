
/*
const adventurer = {

name: "Timothy",
hitpoints: 10,
belongings: ['arrow', 'bucket of water', 'torch'],

companion : {

      name: "velma",
      type: 'Bat',

companion2 :
{
   name : "insect"

}


}

}
adventurer.companion.name = "Susan",
console.log(adventurer.companion.name);

console.log(adventurer);

adventurer.companion3 = {

    name : "Ronan",
    type: "Alien",
}
console.log(adventurer)
*/


// object key-value
/*
const movie = {

title: "Eraserhead",
head : 'David Lynch',
year : '1978',

}
*/
// prinst the keys
/*for(key in movie)
{
    console.log(key)
}
*/


// prints the values
/*for(key in movie)
{
    console.log(movie[key]);
}
*/

const movies =

[


{title : 'L\'Avventura', director: 'MichelAngelo Antioni', year: 1960},
{title : 'Eraserhead', director: 'David Lynch', year: 1978},
{title : 'Dayereh', director: 'jafar Panahi', year: 2000},
{title : 'Dayereh', director: 'jafar Panahi', year: 2000},

]

const  moviesObj = movies;


for(key in moviesObj)
{
    console.log(moviesObj[key]);
}


