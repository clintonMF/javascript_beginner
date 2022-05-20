//loops
//for loops keep running until a certain condition is reached
for (var i = 0;i <= 10;i++){
    console.log(i)
}

names = [
    "tanjiro",
    "nezuko",
    "inosuke",
    "zenitsu"
]

console.log()
console.log("for i")
for (var i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log()
console.log("for of")
for (const name of names) {
    console.log(name)   
}

console.log()
console.log("forEach")
names.forEach(function(name){
    console.log(name)
})