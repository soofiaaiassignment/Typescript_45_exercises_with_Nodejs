//Array of current users.
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Usama"];
//Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mohad", "Areeba"];
//loop through new_users to check for user names availability.
new_users.forEach(function (new_one_user) {
    //making a condition for us user name already exist and save in our_condition variable.
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user ".concat(new_one_user, " is available"));
    }
});
