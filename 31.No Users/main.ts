let usernames = ["Adnan", "Eric", "Iqbal", "Fawad", "Shahid"];
usernames = []
if (usernames.length === 0) {
    console.log(" We need to find some users!");

}else{
    usernames.forEach(user=>{
        if(user === "Adnan"){
            console.log(`Hello ${user}, would you like to see a status ;;report?`);
        }else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    })
}
