// An IIFE is a JavaScript function that runs as soon as it is defined.

// IIFE --- Immediately Invoked Function Expression

// It is a design pattern which is also known as a Self-Executing Anonymous
// Function and contains two major parts.

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator
// (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

// The second part creates the immediately invoked function expression () through which the
// JavaScript engină will directly interpret the function.

(( ) => {
    var a = 10;
    console.log(a)
})();