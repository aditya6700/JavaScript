// Reduce Method
// -> The reduce() method executes a reducer function (that you provide)
//       on each element of the array from left to right, resulting in single output value.

// The reducer function takes four arguments:
//      Accumulator
//      Current Value
//      Current Index
//      Source Array

// -> SYNTAX
// arr.reduce(callback( accumulator,
// currentValue, [, index[, array]] )
// [, initialValue])

// Reduce Right Method
// -> The reduceRight() method executes a reducer function (that you provide)
//       on each element of the array from left to right, resulting in single output value.

let myArr = [2, 3, 4, 5, 6];

// let prod = myArr.reduce((acc, ele) => {
//     debugger;
//     return acc * ele;
// }, 10);

// console.log(prod);

let avg = myArr.reduce((acc, curVal, index, array) => {
    debugger;
    let total = (acc += curVal);
    if (index === array.length - 1) return total / array.length;
    return total;
});

console.log(avg);
