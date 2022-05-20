person = {
    firstName: "Nezuko",
    age: 13,
    isFemale : true,
    balance: 100.35,
    dob : new Date(2009, 4, 9).toJSON(),
    address : {
        city : "tokyo",
        country: "japan"
    }

}

console.log(person)
console.log(person.firstName)
console.log(person.age)
console.log(person.address.city)
console.log(Object.keys(person))
console.log(Object.values(person))