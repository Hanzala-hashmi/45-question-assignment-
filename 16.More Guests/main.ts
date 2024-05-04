let guestlist = ["saad", "Ahmed", "Naeem", "Jameel"];
let Guest1 = guestlist[0];
guestlist.splice(0, 1, "Saim");
console.log("We have found a bigger Dinner Table for Respectable Guests")
guestlist.unshift("Naeem");
guestlist.push("Alam");
let middleGuest: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleGuest, 0, "kamran");
console.log("Our new Guests are updated list");
console.log(Guest1, "can not come to Dinner today.");
guestlist.forEach(guests=>console.log(`Hi ${guests}, would like to Dinner with me?`));