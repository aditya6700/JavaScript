// Synchronous
// A synchronous request blocks the client until operation completes
// i.e. browser is unresponsive.
// In such case, javascript engine of the browser is blocked.


// Asynchronous
// (AJAX Web-Application Model)
// An asynchronous request doesn't block the client
// i.e. browser is responsive.
// At that time, user can perform another operations also.
// In such case, javascript engine of the browser is not blocked.



// Synchronous
const func2 = () => {
    // console.log("func2 started");
    let start = new Date().getTime();
    while(new Date().getTime() - start < 2000);
    console.log("func2 started");
}

const func1 = () => {
    console.log("func1 started");
    func2();
    console.log("func1 ended");
}

// func1();


// Asynchronous
// setTimeout is async function
const func4 = () => {
    setTimeout(()=> {    
        console.log("func4 started");
    },3000);
}

const func3 = () => {
    console.log("func3 started");
    func4();
    console.log("func3 ended");
}

func3();