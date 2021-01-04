// spread operator replaces call() method

function add(a,b,c){
    console.log(a+b+c);
};


// add(24,24,1);  // normal way

//ES5
//  passing array
// let arr = [1,2,5]
// add.apply(null,arr);

// //ES6
// add(...arr)


// spread operator replaces concatinate

let arr1 = [1,2,5]
let arr2 = [2,5.6]

// //ES5
// arr1 = arr1.concat(arr2);
// console.log(arr1)

// // ES6
// arr1 = [...arr1,...arr2]
// console.log(arr1);

// spread operator also replaces copy method same as conatinate
