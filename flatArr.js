// converting multidimensional array into 1D array

// Method - 1  only 2D array  into 1D array

const arr1 = [
    ["arr1", "arr2"],
    ["arr3", "arr4"],
    ["arr5", "arr6"]
];

const arr1d = arr1.reduce((acc,cur) => {
    return acc.concat(cur);
});

console.log(`using reduce and concat method`, arr1d);

// Method - 2  
// flat()  -- new operator in ECMA2020
//     The flat() mehtjod creates a new array with all sub-array elements concatenated into it recursively
// upto specified depth

// syntax:
//     arr1.flat([depth]);
//     default depth is 1
//     if you don't know the depth use Infinity

const arr2d = arr1.flat();
console.log(`using flat method  2D`, arr2d);

const arr2 = [
    ["arr1", "arr2"],
    ["arr3", "arr4"],
    ["arr5", ["arrs5", "arrs6"]]
];

const arr3d = arr2.flat(2);
console.log(`using flat method  3D`, arr3d);

// Method - 3
// using recursive reduce and concat

const arr3 = [
    ["arr1", "arr2"],
    ["arr3", "arr4"],
    ["arr5", ["arrs5", ["arrss5", "arrss6"]]]
];

const flatArr = (arr, d = 1) => {
    debugger;
    return (d > 0) ? arr.reduce((acc,curr) => {
            return acc.concat((Array.isArray(curr)) ? flatArr(curr, d-1) : curr )
    },[]) : arr.slice();
};

console.log('using recursive reduce method ', flatArr(arr3,Infinity));
