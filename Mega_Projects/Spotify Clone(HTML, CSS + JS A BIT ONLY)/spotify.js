const audio = document.getElementById("audio-player");
const miniPlayer = document.getElementById("mini-player");
const songInfo = document.getElementById("song-info");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const playPauseBtn = document.getElementById("play-pause");

const songs = {
    "daytona": "songs/Daytona.mp3",
    "balenci": "songs/Balenci.mp3",
    "jhol": "songs/Jhol.mp3",
    "ravi": "songs/Ravi.mp3",
    "afsos": "songs/Afsos.mp3"
};

document.querySelectorAll(".trends div").forEach(songDiv => {
    songDiv.addEventListener("click", () => {
        const songName = songDiv.querySelector("h3").innerText.toLowerCase();
        if (songs[songName]) {
            audio.src = songs[songName];
            audio.play();
            miniPlayer.style.display = "flex";
            songInfo.innerText = "▶️ " + songDiv.querySelector("h3").innerText;
            playPauseBtn.innerText = "⏸️";
        }
    });
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        time.innerText = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
    }
});

// Allow seeking
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Play/Pause button
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.innerText = "▶️";
    }
});

// Helper function to format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}
