var banana = "banana";
var uppercasebanana = "BANANA";
var Nine = 9;
var Ten = 10;
var city = ["Karachi", "Lahore", "Rawalpindi"];
//Test Equality & Inequality of String 
console.log("Is banana is equal to banana");
console.log(banana == "banana");
console.log("Is banana is not to equal to banana");
console.log(banana != "banana");
//Tests using the Lower Case Function
console.log("Is banan is equal to banana after converting to Lower case");
console.log(uppercasebanana.toLowerCase() == "banana");
console.log(uppercasebanana.toLowerCase() != "banana");
//Numerical Tests
//Equal than
console.log("Is is Nine is equal to Ten");
console.log(Nine == Ten);
console.log("Is Nine is not equal to Ten");
console.log(Nine != Ten);
//Greater than
console.log("Is Ten is greater than Zero");
console.log(Ten > 0);
//Less than
console.log("Is Then is less than Nine");
console.log(Ten < Nine);
// Greater than or equal to
console.log("Is Ten is greater than or equal to 5");
console.log(Ten >= 5);
//Less than or equal to
console.log("Is Ten is less or equal than Nine ");
console.log(Ten <= Nine);
//Tests using "and" and "or" operators
//using &&
console.log("Ten is not equal than Nine and Ten is greater than Nine");
console.log(Ten != Nine && Ten > Nine);
console.log("Ten is not equal than Nine and Ten is greater than Twelve");
console.log(Ten != Nine && Ten > 12);
//using || (or)
console.log("Nine is greater than Ten & Ten is equal than Ten");
console.log(Nine > Ten || Ten == Ten);
console.log("Nine is greater than Ten & Ten is not equal than Ten");
console.log(Nine > Ten || Ten != Ten);
//Test whether an item is in a array
console.log("Is Karachi is include in my array?");
console.log(city.includes("Karachi"));
//not include
console.log("Is Karachi not include in my array");
console.log(!city.includes("Karachi"));
