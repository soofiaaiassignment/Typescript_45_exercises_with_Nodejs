// clearing an array
var userName = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//using foreach loop on array
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",Would you like to see status report.?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ",Thank you for login in again"));
    }
});
