document.getElementById("loadBtn").addEventListener("click", function () {
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let list = document.getElementById("userList");
            list.innerHTML = "";

            data.forEach(user => {
                let li = document.createElement("li");
                li.textContent = user.name + " (" + user.email + ")";
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
});