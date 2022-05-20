//while loops
// these are loops that keep running until a certain
// certain condition is false

names = [
    "tanjiro",
    "nezuko",
    "inosuke",
    "zenitsu"
]

//A while loop that prints hello 5 times
var number= 0
while(number<5){
    console.log("hello")
    number += 1
}

//A while loop to loop through the name in the names array
var num = 0
while(num<names.length){
    console.log(names[num])
    num += 1
}

// there's also "do while loops". They are to be used when 
// you want a certain operation to be carried out at least once 
// regardless of the condition being true or false

do {
   console.log("hello") 
} while (false);