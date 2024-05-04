//Define a Function to console magician names

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//Define a Function to console magician names wth "The great"
function make_great(magicians: string[]) {
  return magicians.map((name) => `The great ${name}`);
}

//Define an Array to console magician names
let magician_Names = ["Saim", "Babar", "usman", "Rizwan"];

let great_magicians = make_great(magician_Names);

show_magicians(great_magicians);
