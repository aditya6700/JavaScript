// use node to run .js files
// or
// link it to html file and view the output

// //es5
// const add = (a,b) => {
//     console.log(a+b);
// };

// // add(5,6);   returns 11 adds a and b
// add(1,5,3,6,8,52,5);   // this passes only first two arguments and the answer will be 6

//  if you want to pass 8 arguments and want to find out the sum 
//  it is difficult to write all the parameters at the function defining
//  this is overcomed using "rest" operator in ES6

// REST operator ---> ... <---
// The rest operator parameter syntax allows us to represent and indefinite
//  number of arguments as an array

//es6

const add = (...arr) => {
    console.log(arr);    // displays as array
    console.log(...arr);  // displays only the data

    let sum=0;

    for ( let i of arr){
        sum+=i
    }
    console.log(sum)
};

add(5,2,5,6,8,52,6);  // now you can pass as many as arguments and the funciton return the sum of all 


//  example 2

const sampleFunc = (a,b, ...c) => {
    console.log(`${a}  ${b}`);   // accesing a and b values
    console.log(c);             // c returns an array
    console.log(c[1]);
    console.log(c.length);
    console.log(c.indexOf('cooking'));
    c.forEach((item) => {
        console.log(item);    // printing all the items in c
    });
};

sampleFunc('Time travel','creating paradoxes','unveiling mystery','movies','cooking','listening songs')