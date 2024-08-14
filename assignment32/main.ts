//Array of current users.
let current_users =["Usman","Ali","Areeba","Zain","Usama"]

//Array of new users

let new_users =["Hamza","Ayesha","Ali","Mohad","Areeba"]

//loop through new_users to check for user names availability.

new_users.forEach(new_one_user=>{
    
    //making a condition for us user name already exist and save in our_condition variable.
    let our_condition =current_users.some(current_one_user=>current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else
    {
        console.log(`This user ${new_one_user} is available`)
    }
    })