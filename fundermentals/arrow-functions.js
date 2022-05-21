//arrow functions let us write shorter function syntax

function greeting1(name){
    console.log("good morning " + name.toUpperCase())
}

greeting1('clinton')

greeting2 = function(name){
    console.log("good morning " + name.toUpperCase())
}
greeting2('clinton')
//the syntax for creating both functions above are similar and long 
// a shorter syntax is shown below using arrow functions

greeting3 = (name) =>{
    console.log("good morning " + name.toUpperCase())
}

greeting3('clint')