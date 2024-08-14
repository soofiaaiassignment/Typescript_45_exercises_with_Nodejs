//define a functionto each megician name from an array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containning magician name.
var magician_names = ["Harry Poter", "Hamza", "Usman"];
//call the function to print each magicians name.
show_magicians(magician_names);
