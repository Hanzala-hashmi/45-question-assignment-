let guestList = ["asad", "azam", "jameel","noman"];
let guest1 = guestList[0];
console.log(guest1, "can not come to dinner today.");
guestList.splice(0,1,"saim");
guestList.forEach(guests =>console.log(`Hi ${guests}, would you like to dinner today?`))