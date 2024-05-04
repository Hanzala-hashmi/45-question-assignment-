var guestlist = ["Waleed", "aman", "faheem", "abrar"];
var guest1 = guestlist[0];
console.log(guest1, "can not come to Dinnar");
guestlist.splice(0, 1, "alam");
console.log("We have found a bigger Dinner Table for Respectable Guests");
guestlist.unshift("jameel");
guestlist.push("jamal");
var middleGuest = Math.floor(guestlist.length / 2);
guestlist.splice(middleGuest, 0, "azam");
console.log("Our new Guests are updated list");
guestlist.forEach(function (guests) { return console.log("Hi ".concat(guests, ", would you like to Dinner with me")); });
console.log("The Dinner Table won't arrive on the time so we can invite only two people");
while (guestlist.length > 2) {
    var removelist = guestlist.pop();
    console.log("Sorry ".concat(removelist, ", you are not invited to Dinner"));
}
console.log("You are still invited to Dinner");
guestlist.forEach(function (guests) { return console.log("Hi ".concat(guests, ", would like to Dinner with me?")); });
guestlist.pop();
guestlist.pop();
console.log("Empty Guest List:", guestlist);
