// DESTRUCTURING

// -> The Destructuring assignment syntax is a JavaScript expression that makes it possible
//     to unpack values from arrays, or properties from objects, into distinct variables.

const Bio = {
    name   : "Aditya",
    course : "reactjs",
    age    : 20,
    email  : "masteroot@mailfence.com",
    active : true
}

let {name,course,age,email,active} = Bio;

console.log(`My name is ${name}. \nI am ${age} years old. 
I am learning ${course}. \nMy email is ${email}.`)