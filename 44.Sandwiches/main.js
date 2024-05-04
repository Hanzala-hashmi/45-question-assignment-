"use strict";
function make_Sandwich(...items) {
    console.log("\nMaking a sandwich with the following itmes:");
    items.forEach((singleitem) => console.log(singleitem));
    console.log("Now Enjoy your delicious Sandwich");
}
// Call the function three times, using a different number of arguments each time.
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg", "Bread", "Butter");
make_Sandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg");
