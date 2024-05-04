// 'lower case';
let personName = "Babar";
console.log("lower case",personName.toLowerCase());
// upper case;
console.log("upper case",personName.toUpperCase());
// title case;
console.log("title",personName.replace(/\bw/g,c=> c. toUpperCase()));