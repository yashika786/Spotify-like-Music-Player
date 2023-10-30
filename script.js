console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  { songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg" },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  { songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg" },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "8.mp3",
    coverPath: "8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "9.mp3",
    coverPath: "9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "10.mp3",
    coverPath: "10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("input", () => {
  audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element, index) => {
    element.addEventListener("click", () => {
      makeAllPlays();
      songIndex = index;
      element.classList.remove("fa-play-circle");
      element.classList.add("fa-pause-circle");
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
