// Get references to the button and audio
const playSongBtn = document.getElementById("play-song-btn");
const happyBirthdaySong = document.getElementById("happy-birthday-song");

// Add a click event listener to the button
playSongBtn.addEventListener("click", function () {
  // Play the Happy Birthday song
  if (happyBirthdaySong.paused) {
    happyBirthdaySong.play();
    playSongBtn.textContent = "Pause Happy Birthday Song 🎶";
  } else {
    happyBirthdaySong.pause();
    playSongBtn.textContent = "Play Happy Birthday Song 🎉";
  }
});
