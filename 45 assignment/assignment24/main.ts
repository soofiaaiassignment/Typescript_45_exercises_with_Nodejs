let apple = "apple";
let uppercaseApple ="APPLE";
let ten:number =10;
let twenty:number =20;
let fruits =["apple","banana","orange"];
//test for equality and inequality with strings.

console.log("Is apple is equal to apple?");
console.log(apple == "apple");


console.log("\n Is apple is not equal to apple.?");
console.log(apple != "apple");

//Test using lowercase function.

console.log("\n Is apple equal to apple after converting to lowercase.?");
console.log(uppercaseApple.toLocaleLowerCase()=="apple");
console.log("\n Is APPLE not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!="apple");

//Numarical test

console.log("\n Is ten equql to twenty?");
console.log(ten == twenty);
console.log("\nIs ten not equal to twenty?");
console.log(ten != 20);

//Greaterthen

console.log("\n Is ten greaterthen 0?");
console.log(10>0);

// lessthen

console.log("Is twenty lessthen 10?");
console.log(twenty<10);

//Greater then or equal to

console.log("Is ten greater then or equalto 5?");
console.log(ten >= 5);

//less tnen or equal to

console.log("twenty is less then or equal to 10");
console.log(twenty <=10);

//test using "and" & :"or" operators


console.log("twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty >10);

//using || (or)


console.log("20 is greater then 5 or twenty is = to 20");
console.log(20 > 50 || 20 == 20);


//test whether an item is include in array.


console.log("Is orange include in array?");
console.log(fruits.includes("orange"));
console.log("Is orange not includein my fruits array?");
console.log(!fruits.includes("orange"));

