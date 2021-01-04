// apply() Method

//    The apply() method is similar to the call() method.

//    The call() method takes arguments separately. 
//    The apply() method takes arguments as an array.

const series1 = {
    name: "Marvel",
    content : "Adventure",
    feature: function(rating, support) {
        console.log(`one of the Good movie series are ${this.name} this is packed with
         ${this.content}. I will love to give ${
        rating} star. Please watch only in ${support} `);
    }
}
series1.feature(5, "theater");   // this is common and very easy


// creating a new series 
const series2 = {
    name : "Fast and Furious",
    content : "Action + Adventure"
}


series1.feature.apply(series2, [5, "theater"]);

//  in the above line
// series1.feature is the original object we want to call
// by using "apply" we are calling series2
// apply(series2, [5, "theater"]);
// always the first one is the new object which wants to access the existing object
// the next argument is array containing the arguments of main function


//  both the output of call and applly are same 
//  here is the best use and example

// let arr = [1,4,5,6]
// let max = Math.max(258,215,5,2);  // dosent support array 
// console.log(max);

let arrMax = Math.max.apply(null,[258,215,5,2,254,43,453]);  // using this we can pass array and find tha max
console.log(arrMax);

// the first argument is null as we are not accesing any object