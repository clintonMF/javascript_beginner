/* 
Functions - a function is a set of instructions that performs a 
task, or calculates a value.
*/

//A function that adds 2 numbers
function addNumbers(num1, num2){
    var num = num1 + num2
    console.log(num)
}

addNumbers(10,3)

//A different way to go about it

function  sumNumbers(num1,num2){
    var addition = num1 + num2
    return addition
}

var result = sumNumbers(10,3)
console.log(result)

//the functions above are called user defined functions as
// they were created by me.

//there are other types of functions that comes with javascript
// they are called built in functions or methods
// some examples are shown below

var name="clinton"

console.log(name.toUpperCase())
console.log(name.toLowerCase())

// both functions  shown above are built in functions
