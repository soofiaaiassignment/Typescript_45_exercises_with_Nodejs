// clearing an array

let userName =["Mahad","Ali","Zeeshan","Admin","Usman"]

//using foreach loop on array

userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser},Would you like to see status report.?`)
    }
    else{
        console.log(`Hello ${oneuser},Thank you for login in again`)
    }
})