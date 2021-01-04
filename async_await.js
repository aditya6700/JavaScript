// Async/await
// -> There's a special syntax to work with promises in a more comfortable fashion,
//     called "async/await”. It's surprisingly easy to understand and use.
// -> The word “async" before a function means one simple thing: a function always
//     returns a promise.
// -> so the async keyword is added to functions to tell them to return a promise rather
//     than directly returning the value
// -> we can use await when calling any function that returns a Promise, including
//     web API functions.
// -> The keyword await makes JavaScript wait until that promise settles and returns
//     its result.

// executer
const pm1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll = [1,2,3,4,5];
        resolve(roll); 
        // reject('error has occured'); 
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
        },2000,roll);
    });
};


const getData = async () => {
    try {
        res = await pm1;
        console.log(res);
        
        resu = await myData(res[3]);
        console.log(resu);

        return resu;
    } catch (err) {
        console.log(err);
    }
};

const result = getData();
console.log(result)