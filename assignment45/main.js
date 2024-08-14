//Define a function to create a car object with options... 
function create_car(manufacturar, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturar and model,
    var car = {
        manufacturar: manufacturar,
        model: model
    };
    //Add additional options to the car object.
    options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car object.
var my_car = create_car("Toyota", "Corolla", "color:Black", "Sunroof:True");
//Print the value to ensure all the information is stored correctly in the car object.
console.log(my_car);
