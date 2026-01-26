let cake = Promise.resolve("Cake Ready");
let music = Promise.resolve("Music Ready");
let chairs = Promise.resolve("Chairs Ready");

Promise.all([cake, music, chairs])
    .then(result => {
        console.log("Party Started 🎉");
        console.log(result);
    })
    .catch(err => {
        console.log("Party Cancelled ❌", err);
    });

// if one of the promises fails
// let cake = Promise.reject("Cake shop closed");

// Promise.all([cake, music, chairs])
//     .catch(err => {
//         console.log("Party Cancelled ❌", err);
//     });
