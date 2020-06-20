

/*
Section 1: Programming Fundamentals
Common programming principles


Answer

Write a ~1 sentence summary for each one
Which ones surprise you (if any)?
Which one is currently giving you the most struggle?


DRY : Don't repeat yourself. This is one the most basic programming principles but at the same time is a powerful one because it forces you not to repeat
  your code. This principle did not surprise me. 

KISS: Keep it simple, stupid. This one really surprised me.I guess it makes sense to make it simple for maintainability purposes. After all who wants
to mess with complicated code that do not make sense or hard to read.

Avoid creating a YAGNI.  This one surprised me too becaue I thought was easier to write functions than putting everything outside of the brackets.

Do the simplest thing that could possibly work: This one surprise me to and I really like because it tells you to write your code
 that can only perform what you want in a simple way. And if it works add more staff or refactor it. It did not surprise me though.

Don't make me think: This principle it did not surprise me but it is very useful because it teaches programmers how to make something more usable.
It did not surprise me. It was self-explanatory.

Write code for the maintainer: This principle basically encourages programmers to write code that is easy to maintain or cleaner so when a new programmer
checks your code is not a nightmare.

Single responsibility principle. This principle talks about using functions only for one single task instead of using them for many things. 
Avoid premature optimization: This principle mentions that if the program is working do not change it or optimize because you can make it worse.
Only modify it absolutely when is necessary. I was not surprise about this principle but I though it was very neat.  I have seen a lot programs that work
perfect and after an update they stop working.

Separation of concerns:  This pricinple is one the most important concepts to my opinion becauses it addresses
 modular programming by encapsulating information or separating it.




//*********************Commenting Code*************************************
//Comment each line of this code and describe what it is doing. 
//Feel free to run this code and add console.logs to help you figure it out:



const f = l => {                        // we are creating a function with one paremeter, l.
    let es = 0, p = 0, c = 1, n = 0     // we are creating variables and initialize them
    while (c <= l) {                    // we are using a while loop to make the code inside to perform a mathematical calculation
      n = c + p;                        // we are adding variable, c and p and assign them to n. 
      [c, p] = [n, c]                   // this one, I'm not sure, but I think it has to do with a set of elements
      es += (c % 2 === 0) ? c : 0       // we are using the conditional ternary operator that takes three operands. First one is a conditiona(thruthy), 
    }                                   // the second one is executed if is falsy. Basically a shorcut of the if statament
    return es                           // returning es. (The code on the previous line was assigned to the variable es)
  }
  
  console.log(f(55))                    // this line of code console.log the function with a parameter. The answers is 44.


  //At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain.
  // Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:



  const f2 = (limit) => {    // we are creating a function that takes a parameter and we are initilizing variables. Then we are creating a while loop

    let evenSum = 0;         // that performs a mathematical calculation by adding numbers and comparing if those numbers are even and adding them up.
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55)) // My final thoughts on both codes is that the first one contains a difficult function and the second is simpler or
                      // A lot easier to understand.

    In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) -
     are there any other variable names or things that would make this code easier to read and understand?
     A more semantic name would be getSumOfEvenNumber

    If you started a new job and your project was to expand the functionality of this function by allowing a second argument and 
    then based on that second argument,returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    The second one, f2 because it is easier to undertand in my opinion.
                      
    Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
     
    I tried to remove the semi-colons and it did not work. So it needed the semicolons unless I'm doing something wrong.


                      
*/
