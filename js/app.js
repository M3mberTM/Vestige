import { initCanvas } from "./canvas.js";

initCanvas();
const fileInput = document.getElementById("videoInput");
const video = document.getElementById("video");
const colorInput = document.getElementById("colorPicker");

// video controls
const playPauseBtn = document.getElementById("playPause");
const seekerSlider = document.getElementById("seeker");
const volumeSlider = document.getElementById("volumeSlider");
const prevFrameBtn = document.getElementById("prevFrame");
const nextFrameBtn = document.getElementById("nextFrame");


let videoFps = -1;

function setVideoSize() {
    let displayWidth = video.videoWidth;
    let displayHeight = video.videoHeight;

    if (displayWidth < 1000) {
        displayWidth *= 2;
        displayHeight *= 2;
    }

    const maxWidth = window.innerWidth * 0.97;

    if (displayWidth > maxWidth) {
        const scale = maxWidth / displayWidth;
        displayWidth *= scale;
        displayHeight *= scale;
    }

    video.style.width = displayWidth + "px";
    video.style.height = displayHeight + "px";
}


// EVENT HANDLERS
colorInput.onchange = () => {
    const color = colorInput.value;
    ctx.strokeStyle = color;
};

prevFrameBtn.onclick = () => {
    if (video.currentTime > 0) {
        video.currentTime -= 1 / videoFps;
        getFrameStrokes();
    }
};

nextFrameBtn.onclick = () => {
    if (video.currentTime < video.duration) {
        video.currentTime += 1 / videoFps;
        getFrameStrokes();
    }
};

playPauseBtn.onclick = () => {
    if (!video.src) return;
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
        video.pause();
        playPauseBtn.textContent = "Play";
    }
};

video.addEventListener("timeupdate", () => {
    seekerSlider.value = Math.round(video.currentTime * videoFps);
    getFrameStrokes();
});

seekerSlider.addEventListener("input", () => {
    video.currentTime = seekerSlider.value / videoFps;
    getFrameStrokes();
});

video.addEventListener("ended", () => {
    playPauseBtn.textContent = "Play";
});

volumeSlider.addEventListener("input", () => {
    if (!video.src) return;
    video.volume = volumeSlider.value / 1000;
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    if (video.src) {
        URL.revokeObjectURL(video.src);
    }

    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();

    // all this just to get the framerate of the video
    const mp4boxFile = MP4Box.createFile();

    mp4boxFile.onReady = (info) => {
        const track = info.videoTracks[0];
        const fps = (track.nb_samples * track.timescale) / track.duration;
        videoFps = fps;
        seekerSlider.max = track.nb_samples - 1;
    };

    const reader = new FileReader();

    reader.onload = (e) => {
        const buffer = e.target.result;

        // MP4Box requires this property for some reason
        buffer.fileStart = 0;

        mp4boxFile.appendBuffer(buffer);
        mp4boxFile.flush();
    };

    reader.readAsArrayBuffer(file);
});

video.addEventListener("loadedmetadata", () => {
    setVideoSize();
    seekerSlider.value = 0;
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canDraw = true;
    canvas.style.width = video.clientWidth + "px";
    canvas.style.height = video.clientHeight + "px";
    ctx.strokeStyle = colorInput.value;
});
