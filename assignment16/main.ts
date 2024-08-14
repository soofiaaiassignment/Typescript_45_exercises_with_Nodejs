//creating a guest list array.

let guestList: string[] =["Soofia","Fouzia","Maria","Nazish",];

//making variable for those who can`t come.

let dontCome = guestList[0];

//print the name of guest who cant come.

console.log(dontCome,"cannot come");

//add and remove guest from guest list array.

guestList.splice(0 ,1 ,"Mehwish");

//print message for a bigger table.

console.log("Good news we have found a biggwe table for a dinner");

//adding a new guest at starting of array

guestList.unshift("seher");

//adding a new guest at the end of array.

guestList.push("beenish");

//get a middle index of our guest.

let middleIndex:number = Math.floor(guestList.length/2);

//adding a new guest in the middle of array.

guestList.splice(middleIndex,0,"wania");

//print message of updated list.

console.log("updated list of our guest");

//sendin an invitation message to our guest one by one with their name.

guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with us`));





