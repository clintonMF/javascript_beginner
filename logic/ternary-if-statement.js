//Ternary if statement
var number = 10

//creating logic to tell if the number is even or odd

if (number % 2 == 0){
    console.log("the number is even")
}else{
    console.log("the number is odd")
}

/* there is a more efficient way to do this in javascript
which is using ternary if statements */
var result = number % 2 == 0 ? "the number is even":
"the number is odd"
console.log(result)
