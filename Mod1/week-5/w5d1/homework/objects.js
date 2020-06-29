//Creating Classes


class Hamster{

  
constructor (owner, name, price)

{
  this.owner =owner;
  this.name = name;
  this.price=  15;

}


wheelRun()
{

console.log ('queak squeak');

}


eatFood() 
{
    console.log ('nibble nibble');
 } 


getPrice() 
{
  return this.price;


}

}





class Person {

constructor (name, age, height, weight, mood, hamsters, bankAccount)

{
  this.name = name;
  this.age= age;
  this.height =  height;
  this.weight=  weight;
  this.mood = mood;
  this.hamsters = [];
  this.bankAccount = bankAccount;


}



// methods

getName() 
{
return this.name;
}


getAge()

{

return this.age;

}



getWeight()
{
    
 return this.weight

}


greet() 

{
console.log('Hi my name is ' + this.name)
}


eat() 

{
this.weight+=1;     //increments 
this.mood+=1       // increments
 
}



exercise() 
{
return this.weight --;    // decrease weight b y 1
}




ageUp() 
{
this.age++;
this.height;
this.weight++;
this.mood--; 
bankAccount+=10;

}




buyHamster(hamster)
 {
    
    this.hamsters.push(hamster)
      this.mood += 10;       
      this.bankAccount = this.bankAccount - hamster.price; //this option subract price of the hamster from balance. 
     



}


  

}   


// objects


const wheelRunObj = new Hamster ('')
wheelRunObj.wheelRun('');



 const eatObj = new Hamster ('')
 eatObj.eatFood('');



const greetingPersonName =  new Person ('Roland');
greetingPersonName.greet(greetingPersonName)

const cal = new Person ('Peter', 32, 73, 10, 10, [], 200); 
 
const obj2 = new Hamster ('Mike', 'Junie', 30);


cal.buyHamster(obj2);
console.log(cal);

