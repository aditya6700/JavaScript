// bind() Method

// ->  using this method, we can bind an object to a common function, so that
//      the function gives different results when its need.

const series1 = {
    name: "Marvel",
    content : "Adventure",
}

const series2 = {
    name : "Fast and Furious",
    content : "Action + Adventure"
}

const series3 = {
    name : "Harry Potter",
    content : "fantasy"
}

const series4 = {
    name : "Dark",
    content : "Mystery"
}


function features(rating, support) {
    console.log(`one of the Good movie series are ${this.name} this is packed with
     ${this.content}. I will love to give ${
    rating} star. Please watch only ${support} `);
}

let s1 = features.bind(series1);
s1(5," in 3D");

let s2 = features.bind(series2);
s2(4,"in imax");

let s3 = features.bind(series3);
s3(5,"in theater");

let s4 = features.bind(series4);
s4(4.8,"on NETFLIX")
