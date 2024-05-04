function make_album(artist_name, album_titile, tracks) {
    var album = {
        atrist: artist_name,
        titile: album_titile,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions 3 variables with different values.
var album1 = make_album("Khalid Shaikh", "Album titile 1");
var album2 = make_album("Khizar Hayat", "Album titile 2");
var album3 = make_album("Shahid", "Album titile 3", 50);
console.log(album1);
console.log(album2);
console.log(album3);
