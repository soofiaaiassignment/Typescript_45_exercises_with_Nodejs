//Define the function to show magicians name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through.map() it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Harry Poter", "Hamza", "Usman"];
//make a copy of origional array through slice()function.
var copy_magicians_names = magicians_name.slice();
//modify the copied array to include "The Great" with their names.
var copy_great_magitians = make_great(copy_magicians_names);
//Show both arrays origional and copied.
// origi
console.log("Origional array\n");
show_magicians(magicians_name);
// copied
console.log("\nCopied array\n ");
show_magicians(copy_great_magitians);
