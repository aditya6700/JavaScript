// -> The setInterval() method, repeatedly calls a function or
//     executes a code snippet, with a fixed time delay between each call.

let i = 0;
// creating funciton
let myTime = setInterval(() => {
    console.log(i);
    i++;
    // top stop the interval
    if (i === 11) clearInterval(myTime);
}, 1000);
