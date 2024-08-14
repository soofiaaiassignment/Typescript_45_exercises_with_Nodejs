//define a function with a parameter the accept items arguments restparameter our sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following item\n");
    items.forEach(function (singleItrm) { return console.log(" " + singleItrm); });
}
//call the function 3 times with 3 different number of arguments.
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "tomato", "Onion", "Lattuce", "Chicken", "Egg");
