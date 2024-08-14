//Define the make alnum function.
function make_album(artist_name:string ,album_title:string , tracks?:number){

    let album :{artist : string ,title : string , track? : number}={
        artist :artist_name,
        title :album_title,
    
    };
    if(tracks!== undefined){
        album.track=tracks; 
    }
    return album;
}
//calling three functions and creating three variables with different values.
let album1 = make_album("Hamza","Album title 1");
let album2 = make_album("Usman","Album title 2");
//calling a make_album function with third parameters.
let album3 = make_album("Ali","Album title 3",10);
//printing the variable
console.log(album1);
console.log(album2);
console.log(album3);

