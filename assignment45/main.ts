//Define a function to create a car object with options... 

function create_car(manufacturar,model,...options){
    //initialize a car object with manufacturar and model,
    let car={
        manufacturar:manufacturar,
        model:model
};
//Add additional options to the car object.

options.forEach(Option=>{
    let[key,value]=Option.split(":");
    car[key.trim()]=value.trim();
});
return car ;
}
//call the function to create a car object.
let my_car = create_car("Toyota","Corolla","color:Black","Sunroof:True");
//Print the value to ensure all the information is stored correctly in the car object.
console.log(my_car);