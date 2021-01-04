// The Fetch API.
// -> The Fetch API provides a fetch() method defined on the window object, 
//     which you can use to perform requests.
// -> This method returns a Promise that you can use to retrieve the response of the request.


const covid = (index) => {

    const api = async (index) => {
        try {

            const res = await fetch('http://api.covid19api.com/summary');
            const finalresult = await res.json()
            console.log(finalresult.Countries[index].Country)

        } catch (err) {
            console.log(err)
        }
    };
    api(index);
};

for (let i = 140; i < 150; i++) {
    covid(i);
}
