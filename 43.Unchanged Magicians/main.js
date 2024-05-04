"use strict";
//Define a Function to console magician names
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
//Define a Function to console magician names wth "The great"
function make_great(magicians) {
    return magicians.map((name) => `The great ${name}`);
}
//Define an Array to console magician names
let magician_Names = ["Ahmed", "Babar", "Jamal", "Shahid"];
let copy_magician_names = magician_Names.slice();
let copy_great_magicians = make_great(copy_magician_names);
console.log("Orginal Array\n");
show_magicians(magician_Names);
console.log("Coppied Array\n");
show_magicians(copy_great_magicians);
