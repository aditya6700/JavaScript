// PROMISE in JS
// Promises are used to handle asynchronous operations in JavaScript. 
// They are easy to manage when dealing with multiple asynchronous operations where callbacks
// can create callback hell leading to unmanageable code.
// A Promise is an object that keep track about whether a certain event has happened already or not.
// Determines what happens after the events has happend.

// A Promise has Three states:
// fulfilled: Action related to the promise succeeded.
// rejected: Action related to the promise failed.
// pending: Promise is still pending i.e not fulfilled or rejected yet.

// Promises can be consumed by registering functions using .then and .catch methods.

// then()
// then() is invoked when a promise is either resolved or rejected.

// catch()
// catch() is invoked when a promise is either rejected or some error has occurred in execution


// A function to be executed by the constructor, during the process of constructing the promise Obj.
// The executor is custom code that ties an outcome to a promise.

//executer
const pm1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll = [1,2,3,4,5];
        resolve(roll)   // calls then()
        // reject('error has occured')  // calls catch()
    },2000);
});


const myData = (roll) => {
    return new Promise((resolve,reject) => {
        setTimeout((roll) => {
            const data = {
                name: "sai",
                age: 20,
            };
            resolve(`my name is ${data.name} age is ${data.age} roll number is ${roll}`);
        },2000,roll)
    });
};


// pm1.then((roll_no) => {
//     console.log(roll_no);

//     myData(roll_no[2]).then((mydata)=>{
//         console.log(mydata)
//     });

// }).catch((err)=>{
//     console.log(err)
// })

// or


pm1.then((roll_no) => {
    console.log(roll_no);
    return myData(roll_no[2])
}).then((mydata)=>{
    console.log(mydata)
}).catch((err)=>{
    console.log(err)
})