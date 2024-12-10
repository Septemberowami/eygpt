// Toggle Audio Play/Pause
function toggleAudio() {
    const audio = document.getElementById('bible-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
