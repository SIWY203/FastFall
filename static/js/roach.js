// zwiększanie głośności audio
var audio = document.getElementById('roach-audio');
audio.volume = 0;

var interval = setInterval(function() {
    if (audio.volume < 0.2) {
        audio.volume = Math.min(audio.volume + 0.05, 0.2);
    } else {
        clearInterval(interval);
    }
}, 1000);
