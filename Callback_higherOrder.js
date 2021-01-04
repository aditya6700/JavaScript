// Higher Order Function
// -> A higher-order function is a function that takes another function(s) as an argument(s)
//      and/or returns a function to its callers.
// -> Function which takes another function as an arguments is called HOF.

// Callback Function
// -> A callback function is a function that is passed to another function with the expectation 
//     that the other function will call it.
// -> Fucntion which get passed as an argument to another funciton is called CBF.

// Conclusion
// -> So a callback is not necessarily itself a higher-order function, 
//     but a function that receives a callback is as an argument.

const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return Math.abs(a-b);
};

const mul = (a,b) => {
    return a*b;
};

const div = (a,b) => {
    return  a/b;
};


const calc = (a,b,operator) => {
    return operator(a,b);
};

console.log(calc(2,3,sub));


// here "calc" is 'HOF' and "sub" is 'CBF'.