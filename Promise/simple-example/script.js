const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then(result => {
    console.log(result);

    // return another promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received after 3 seconds");
      }, 3000);
    });
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });