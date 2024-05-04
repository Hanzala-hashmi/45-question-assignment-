var usernames = ["Admin", "Eric", "Iqbal", "Fawad", "Shahid"];
usernames = [];
if (usernames.length === 0) {
    console.log(" We need to find some users!");
}
else {
    usernames.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello ".concat(user, ", would you like to see a status ;;report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    });
}
