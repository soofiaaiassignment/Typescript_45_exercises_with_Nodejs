//Define the function to show magicians name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through.map() it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Harry Poter", "Hamza", "Usman"];
//call make_great function to modify magicians names.
var great_magitions = make_great(magicians_name);
// call show_magitions that show modified list of magitions.
show_magicians(great_magitions);
