//define a function with a parameter the accept items arguments restparameter our sandwich.

function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following item\n");
    items.forEach(singleItrm=>console.log(" "+singleItrm));
}

//call the function 3 times with 3 different number of arguments.
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","tomato","Onion","Lattuce","Chicken","Egg");
