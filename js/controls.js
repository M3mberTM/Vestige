/**@import {RangeInput, PlaybackButton} from "./types" */
import canvas from "./canvas.js";
import video from "./video.js";
import {PLAYBACK_BUTTON} from "./types.js";

/** @type {HTMLInputElement} */
let fileInput;
/** @type {HTMLInputElement} */
let colorInput;

// video controls
/** @type {HTMLButtonElement} */
let playPauseBtn;
/** @type {RangeInput} */
let seekerSlider;
/** @type {RangeInput} */
let volumeSlider;
/** @type {HTMLButtonElement} */
let prevFrameBtn;
/** @type {HTMLButtonElement} */
let nextFrameBtn;

function init() {
    // @ts-ignore
    fileInput = document.getElementById("videoInput");
    // @ts-ignore
    colorInput = document.getElementById("colorPicker");
    // @ts-ignore
    playPauseBtn = document.getElementById("playPause");
    // @ts-ignore
    seekerSlider = document.getElementById("seeker");
    // @ts-ignore
    volumeSlider = document.getElementById("volumeSlider");
    // @ts-ignore
    prevFrameBtn = document.getElementById("prevFrame");
    // @ts-ignore
    nextFrameBtn = document.getElementById("nextFrame");

    colorInput.onchange = () => {
        canvas.setColor(colorInput.value);
    };

    prevFrameBtn.onclick = onPrevBtnClick;

    nextFrameBtn.onclick = onNextBtnClick;

    playPauseBtn.onclick = onPlayBtnClick;

    seekerSlider.addEventListener("input",  onSeekerSliderInput);

    volumeSlider.addEventListener("input", onVolumeSliderInput);

    fileInput.addEventListener("change", onFileInput);
}

function onSeekerSliderInput() {
    if (!video.isVideoLoaded()) return;
    video.seekToTime(seekerSlider.valueAsNumber / video.getFps());
    canvas.redrawFrameCanvas(video.getCurrentFrame());
}

function onVolumeSliderInput() {
    if (!video.isVideoLoaded()) return;
    video.setVolume(volumeSlider.valueAsNumber / 1000);
}

function onNextBtnClick() {
    if (video.nextFrame()) {
        canvas.redrawFrameCanvas(video.getCurrentFrame());
    }
}

function onPrevBtnClick() {
    if (video.previousFrame()) {
        canvas.redrawFrameCanvas(video.getCurrentFrame());
    }
}

function onPlayBtnClick() {
    if (!video.isVideoLoaded()) return;
    if (video.isVideoPlaying()) {
        video.pauseVideo();
        setPlayPause(PLAYBACK_BUTTON.PLAY);
    } else {
        video.playVideo();
        setPlayPause(PLAYBACK_BUTTON.PAUSE);
    }
}

function onFileInput() {
    if (!fileInput.files) {
        alert("Please select a file");
        return;
    };
    const file = fileInput.files[0];
    if (!file) return;
    video.loadVideo(file);
}

/**
 * 
 * @param {number} value 
 */
function setSeekerValue(value) {
    // @ts-ignore
    seekerSlider.value = value;
}

/**
 * 
 * @param {PlaybackButton} value 
 */
function setPlayPause(value) {
    playPauseBtn.textContent = value;
}

/**
 * 
 * @param {number} value 
 */
function setSeekerMax(value) {
    seekerSlider.max = String(value); 
}

export default { init, setSeekerValue, setPlayPause, setSeekerMax };
