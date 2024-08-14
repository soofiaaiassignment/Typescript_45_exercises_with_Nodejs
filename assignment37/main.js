"use strict";
//Makinh a function.
function make_shirt(size = "large", printMessage = "I love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//calling a function with the by default value.
make_shirt();
//calling a function now with medium size and default message.
make_shirt("Medium");
//calling a function now with small and defferent print message.
make_shirt("small", "I love Javascript");
