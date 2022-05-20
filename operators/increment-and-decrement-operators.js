//increment and decrement operators

//postfix
var number = 0
console.log("Postfix")
console.log(number++)
console.log(number)
/* as seen in the output the first number is 0 and second is 1
this is due to the fact that the increment is a post increment
ie the ++ sign comes after the number. Hence the increment is
made to the next time the number is called while the initial 
time remains the same as seen in the output
 */

//prefix
var num = 0 
console.log("prefix")
console.log(++num)
console.log(num)
/*For prefix the increment sign "++" comes before the number.
hence the increment is made to the time the increment symbol 
added. */


