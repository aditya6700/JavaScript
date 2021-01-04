const arr = [
    {"Temp1": 26, "Hum1": 19},
    {"Temp1": 11, "Hum1": 7},
    {"Temp1": 56, "Hum1": 56},
    {"Temp1": 11, "Hum1": 7},
];

let newarr = arr.map((cname, i) => {
    return ` ${i} : temparature is ${cname.Temp1} and humidity is ${cname.Hum1}` ;
});

console.log(newarr);
