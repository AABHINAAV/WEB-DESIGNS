// creating object-array of all song divs-----
let songs = document.querySelectorAll('.song')
// adding event listeners to all divs-----
for (let i = 0; i < songs.length; i++) {
    songs[i].addEventListener('click', playsong);
    songs[i].addEventListener('dblclick', pausesong);
}
// creating object of Audio module-----
let song = new Audio();
// called on single click-----
// plays song
function playsong() {
    // giving source of song on basis of div is clicked-----
    switch (this.classList[0]) {
        case 'a':
            source = './music/a.mp3';
            break;
        case 'b':
            source = './music/b.mp3';
            break;
        case 'c':
            source = './music/c.mp3';
            break;
        case 'd':
            source = './music/d.mp3';
            break;
        case 'e':
            source = './music/e.mp3';
            break;
        case 'f':
            source = './music/f.mp3';
            break;
        case 'g':
            source = './music/g.mp3';
            break;
        case 'h':
            source = './music/h.mp3';
            break;
        case 'i':
            source = './music/i.mp3';
            break;
    }
    // setting source of song to the song object of Audio module-----
    song.src=source;
    // playing song-----
    song.play();
}
// pause song
function pausesong(){
    // stopping the song-----
    song.pause();
}