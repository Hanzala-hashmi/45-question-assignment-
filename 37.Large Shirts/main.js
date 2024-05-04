function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("make a ".concat(size, " size shirt with the ").concat(printMessage, " on that shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small");
