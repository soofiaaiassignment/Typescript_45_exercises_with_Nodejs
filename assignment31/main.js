var userName = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//userName =[]
if (userName.length === 0) {
    console.log("Your array is empty we need to find some users");
}
else {
    //using foreach loop on array
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ",Would you like to see status report.?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ",Thank you for login in again"));
        }
    });
}
