"use strict";
//Define Fucntion create a Car Object.
function createCar(manufacture, modle, optional) {
    return Object.assign({ manufacture,
        modle }, optional);
}
const mycar = createCar("Rolce royce", "Honda city", { color: "yellow", year: 2024 });
console.log(mycar);
