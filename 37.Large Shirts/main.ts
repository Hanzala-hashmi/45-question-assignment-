function make_shirt(
  size: string = "Large",
  printMessage: string = "I love to do Typescript"
) {
  console.log(
    `Make a ${size} size shirt with the ${printMessage} on that shirt`
  );
}
make_shirt();

make_shirt("Large");

make_shirt ("Medium");