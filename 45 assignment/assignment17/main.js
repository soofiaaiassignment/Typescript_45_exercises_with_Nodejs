//creating a guest list array.
var guestList = ["Soofia", "Fouzia", "Maria", "Nazish",];
//making variable for those who can`t come.
var dontCome = guestList[0];
//print the name of guest who cant come.
console.log(dontCome, "cannot come");
//add and remove guest from guest list array.
guestList.splice(0, 1, "Mehwish");
//print message for a bigger table.
console.log("Good news we have found a biggwe table for a dinner");
//adding a new guest at starting of array
guestList.unshift("seher");
//adding a new guest at the end of array.
guestList.push("beenish");
//get a middle index of our guest.
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest in the middle of array.
guestList.splice(middleIndex, 0, "wania");
//print message of updated list.
console.log("updated list of our guest");
//sendin an invitation message to our guest one by one with their name.
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with us")); });
//inform that only two guest invited for dinner.
console.log("unfortunatly the new dinner table won`t arrive on time,so i can only invite only two guest to dinner with me.");
//using while loop to remove  while two name remove.  
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("sorry,".concat(removedguest, " I cant invite you for dinner"));
}
//sending an invitationto the last 2 guest.
console.log("invitation to the last two guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",you are invited for dinner")); });
//removing last two guest from the list.
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
