var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countryPlaces = ["Turkey", "south africa", "bangladaish", "oman"];
console.log("Orginal Order:", countryPlaces);
console.log("Alhabetical Order:", __spreadArray([], countryPlaces, true).sort());
console.log("Still in its Orginal Order:", countryPlaces);
console.log("Reverse Alphabetical Order", __spreadArray([], countryPlaces, true).reverse());
console.log("Still in its Orginal Order:", countryPlaces);
console.log("Orginal Array Reversed:", countryPlaces.reverse());
console.log("Back to its Original Order:", countryPlaces.reverse());
console.log("Stored in Alphabetical Order:", countryPlaces.sort());
console.log("Orginal Array Reversed:", countryPlaces.reverse());
