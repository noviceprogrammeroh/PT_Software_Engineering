 //Pseudo code
//console.log("testing more")

// create a Hero class
//create a constructor method with the  following properties:
// Wealth: initially 100, weapons: with an object
//create an array with phrases
//create methods: talkSass, announcHealth, and fight
//create an object or an instance, Dougie

//create an Enemy class
//create a constructor  with the followin properties, health, and weapons with an object 
// and array
// create methods: talkSmalk, announceHealth and fight
//create an instance of the enemy class, Pizza Rat

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchPhrase = ['I\'m fresher than day old pizza', 'You can\'t count my calories'];
    }
    talkSass() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return this.health;
    }
    

     
            
     fight(enemy)
      {
      //console.log('i\'m ready to rumble');
      let random = Math.round(Math.random());
       if (random == 1)
        {
        enemy.health -= this.weapons.sugarShock;
             return (this.name  + ' -> has used sugar shock')


        } else 
        {
          enemy.health -= this.weapons.sprinkleSpray;
          return (this.name + ' -> has used sprinkle spray')
         }
        }
       }

//Our Enemy
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10};
        this.catchPhrase = ['I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }



announceHealth() 
{
    return this.health;
}




fight(hero) {
    //return 'I\'m gonna flatten you like a slice of pepperoni'
        let random = Math.round(Math.random());
        if (random == 1) {
            hero.health -= this.weapons.pepperoniStars;
            return (this.name +  ' -> has used pepperoni stars')
        } else {
            hero.health -= this.weapons.cheeseGrease;
            return (this.name + ' -> has used cheese grease')
        }



}  

}



//obj for Dougie
const Dougie = new Hero('Dougie');
//console.log(Dougie.talkSass());
//console.log(Dougie.announceHealth());
//console.log(Dougie.fight());

// object or instance of the enemy pizza rat
  const  pizzaRat =  new Enemy ('pizzaRat' );
 // console.log(enemyPizzaRatObj.talkSmack());
 // console.log(enemyPizzaRatObj.announceHealth());
  
  //console.log(Dougie.fight());
  //console.log(Dougie.fight(RatObj));
 // console.log(RatObj.fight(Dougie));



 console.log(pizzaRat);
 console.log(Dougie);
 console.log(Dougie.fight(pizzaRat));
 console.log(pizzaRat.fight(Dougie));
 console.log(pizzaRat);
 console.log(Dougie);