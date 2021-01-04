// Call Method

// -> call() method is a predefined function in jacascript
//      with call() method we can call an object belonging to another object

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

series1.feature.call(series2, 5, "theater");

//  in the above line
// series1.feature is the original object we want to call
// by using "call" we are calling series2
// call(series2, 5, "theater");
// always the first one is the new object which wants to access the existing object
// the next arguments are the  parameters that we want to call using feature fucntion