var Ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Ordinal_Numbers_1 = Ordinal_Numbers; _i < Ordinal_Numbers_1.length; _i++) {
    var number = Ordinal_Numbers_1[_i];
    var ordinal_Ending = void 0;
    if (number === 1) {
        ordinal_Ending = "st";
    }
    else if (number === 2) {
        ordinal_Ending = "nd";
    }
    else if (number === 3) {
        ordinal_Ending = "rd";
    }
    else {
        ordinal_Ending = "th";
    }
    console.log("".concat(number, " ").concat(ordinal_Ending));
}
