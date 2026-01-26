let users = fetch("https://jsonplaceholder.typicode.com/users")
              .then(res => res.json());

let posts = fetch("https://jsonplaceholder.typicode.com/posts")
              .then(res => res.json());

let comments = fetch("https://jsonplaceholder.typicode.com/comments")
                 .then(res => res.json());

Promise.all([users, posts, comments])
    .then(([usersData, postsData, commentsData]) => {
        console.log(usersData);
        console.log(postsData);
        console.log(commentsData);
    })
    .catch(err => {
        console.log("One API failed:", err);
    });
