// CALLBACK IN JAVASCRIPT
// -> Callbacks are just the name of a convention for using JavaScript functions.
// -> There isn't a special thing called a 'callback in the JavaScript language, it's just a convention. 
//      Instead of immediately returning some result like most functions, 
// -> Functions that use callbacks take some time to produce a result.
// -> The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, 
//      not right now'. 
// -> Usually callbacks are only used when doing I/O, e.g. downloading things, reading files,
//      talking to databases, etc.

const getData = () => {
    setTimeout(() => {
        console.log("hello");
        let roll = [1,2,3,4,5,6];
        console.log(roll);

        setTimeout((roll_no) => {
            const data = {
                name: "sai",
                age: 20
            };
            console.log(`my name is ${data.name} age is ${data.age} roll number is ${roll_no}`);

            setTimeout((name) => {
                data.gender = "male"
                console.log(`my name is ${data.name} age is ${data.age} roll number is ${roll_no} and I am ${data.gender}`);
            },2000,data.name)

        },2000,roll[2])
    },2000)
};

getData();