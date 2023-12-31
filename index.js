function submitData(userName, userEmail) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/jason",
            "Accept": "application/jason",
        },
        body: JSON.stringify({
            userName: userName,
            email: userEmail
        }),
    })
        .then(res => console.log(res.json()))
        .then(data => console.log(data))
        .catch(error => {
            alert("Bad things!");
            console.log(error);
        })
};

submitData("MHD", "mhd@gmail.com");