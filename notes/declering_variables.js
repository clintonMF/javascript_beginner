//this file shows the various ways of declaring variables
//in javascript.

/* the way method i have used in declaring variables in this
 beginner folder is the old method of declaring variables and 
 has since been replaced due to hoisting a term i would define
 later on */

//  for (var i=0;i<=10;i++){
//      console.log(i)
//     }
// console.log("value of i outside the loop" + i)

/* the value of i outside the loop is 11 even if i is only
defined inside the for loop and should not go beyond 10.
this is due to hoisting, hoisting occurs when an interpreter 
interprets a code as if the variable was defined outside the 
for loop or any loop and this is a problem. */
/* the problem of hoisting is solved by using other keywords to 
define variables*/

for (let i=0;i<=10;i++){
    console.log(i)
   }
console.log("value of i outside the loop" + i)

/* for the lines of code above i cannot be accessed outside 
the for loop for which it was defined.*/ 

//const

/* there is a problem with using let to define a variable; this
is because when let is used we can reassign that variable to 
something else which can sometimes be a problem. on the other 
hand using "const" prevents this problem. */

const brand = "amigoscode"
brand = 10
brand = {}

console.log(brand)

//running the code above would give an error as you cannot reassign
// while using the const keyword. if the const were replaced with a 
// let the output would have been {}

/*Where to use the const and let keywords to define variable
- The recommended practice is to define every variable with 
the const keyword at first. if the need ever comes up for 
reassignment then change to the let keyword. */