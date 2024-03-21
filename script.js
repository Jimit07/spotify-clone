console.log("welcome to spotify")
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myprogressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterPlayName=document.getElementById("masterPlayName");

let songs = [
    { songName: "Chand Sifarish", filePath: "songs/Chand Sifarish.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ainvayi Ainvayi", filePath: "songs/Ainvayi Ainvayi.mp3", coverPath: "covers/2.jpg" },
    { songName: "Apna Bana Le", filePath: "songs/Apna Bana Le.mp3", coverPath: "covers/3.jpg" },
    { songName: "Badmaash Company", filePath: "songs/Badmaash Company.mp3", coverPath: "covers/4.jpg" },
    { songName: "jamal jamal", filePath: "songs/jamal jamal.mp3", coverPath: "covers/5.jpeg" },
    { songName: "Kesariya Brahmastra", filePath: "songs/Kesariya Brahmastra.mp3", coverPath: "covers/6.jpeg" },
    { songName: "Pehle Bhi Main", filePath: "songs/Pehle Bhi Main.mp3", coverPath: "covers/7.jpeg" },
    { songName: "Proper Patola", filePath: "songs/Proper Patola.mp3", coverPath: "covers/8.jpeg" },
    { songName: "Teri Baaton Mein", filePath: "songs/Teri Baaton Mein.mp3", coverPath: "covers/9.jpeg" },
    { songName: "Ve Haaniyaan", filePath: "songs/Ve Haaniyaan.mp3", coverPath: "covers/10.jpg" }
]

// //  set covers of all songs
// songItem.forEach((element, i) => {
//     console.log(element, i);
//     document.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     document.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// });


// Set covers of all songs
songItems.forEach((element, i) => {
    console.log(element, i);
    let coverImage = element.getElementsByTagName("img")[0];
    let songNameElement = element.getElementsByClassName("songName")[0];

    coverImage.src = songs[i].coverPath;
    songNameElement.innerText = songs[i].songName;
    masterPlayName.innerHTML= songs[songIndex].songName;
});
//  audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
      
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
});

// listen to events
// to update the audio bar and audio according to its time
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myprogressBar.value = progress;

});

myprogressBar.addEventListener("change", () => {
    audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
};


// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();

//         let index = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');

//         audioElement.src = `songs/${index}.mp3`;
//         audioElement.currentTime=0;
//         audioElement.play();
      
        

//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');

//     })
// });

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        

        let songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index value
        masterPlayName.innerHTML= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        // update seek bar
        myprogressBar.value=0;

    });
});
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index value
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayName.innerHTML= songs[songIndex].songName;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
});

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 0;
    }
    else{ 
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index value
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayName.innerHTML= songs[songIndex].songName;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
});

// document.getElementsByClassName('songItemPlay').addEventListener('click', (e) => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();

//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.play();
        
//         gif.style.opacity = 1;
//     }
//     else {
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.pause();
//         gif.style.opacity = 0;
//     }
// });
