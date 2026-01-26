let promiseCall = function(returnData, massage){
    return function(resolve, reject){
        setTimeout(() => {
            console.log(`The ${massage} promise is resolved`);
            resolve(returnData);
        }, returnData * 100);
    }
};

let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "second"));
let p3 = new Promise(promiseCall(30, "third"));
let p4 = new Promise(promiseCall(function(resolve, reject){
    reject("Error from fourth promise");
}));

var total = 0;
Promise.all([p1, p2, p3, p4]).then((result) => {
    for (var i in result) {
        total += result[i];}

        console.log(`Results: ${result}`);
        console.log(`Total: ${total}`);
        
    }).catch((error) => {
        console.log(`Promise rejected with error: ${error}`);
});