// DESTRUCTURING

// -> The Destructuring assignment syntax is a JavaScript expression that makes it possible
//     to unpack values from arrays, or properties from objects, into distinct variables.


const fullstack = ["html", "css", "bootstrap", "js", "reactjs", "nodejs", "express", "sql"];

//ES5
// var lan1 = fullstack[0];
// var lan2 = fullstack[1];
// var lan3 = fullstack[2];
// var lan4 = fullstack[3];
// var lan5 = fullstack[4];
// var lan6 = fullstack[5];
// var lan7 = fullstack[6];
// var lan8 = fullstack[7];

//ES6
let [lan1,lan2,lan3,lan4,lan5,lan6,lan7,lan8] = fullstack

console.log(`Front End languages are ${lan1} ${lan2} ${lan3} ${lan5}`);
console.log(`Back End languages are ${lan4} ${lan6} ${lan7}`);
console.log(`Database languages are ${lan8}`);

let [,,,,lang5,,,lang8] = fullstack

console.log(lang5,"and", lang8)


