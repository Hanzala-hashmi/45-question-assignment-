// Using ForEach Loop on Array
var usernames = ["Eric", "Iqbal", "Fawad", "Shahid", "Admin"];
usernames.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
});
