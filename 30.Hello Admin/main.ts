// Using ForEach Loop on Array
let usernames = ["Eric", "Iqbal", "Fawad", "Shahid", "Adnan"];
usernames.forEach(user => {
    if (user === "Adnan") {
        console.log(`Hello ${user}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})


