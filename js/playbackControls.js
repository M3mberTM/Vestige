/**@import {RangeInput, PlaybackButton} from "./types" */
import canvas from "./canvas.js";
import video from "./video.js";
import {PLAYBACK_BUTTON} from "./types.js";

const VOLUME_SLIDER_MAX = 1000;

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
    playPauseBtn = document.getElementById("playPause");
    // @ts-ignore
    seekerSlider = document.getElementById("seeker");
    // @ts-ignore
    volumeSlider = document.getElementById("volumeSlider");
    // @ts-ignore
    prevFrameBtn = document.getElementById("prevFrame");
    // @ts-ignore
    nextFrameBtn = document.getElementById("nextFrame");


    prevFrameBtn.addEventListener("click", onPrevBtnClick);

    nextFrameBtn.addEventListener("click", onNextBtnClick);

    playPauseBtn.addEventListener("click", onPlayBtnClick);

    seekerSlider.addEventListener("input", onSeekerSliderInput);

    volumeSlider.addEventListener("input", onVolumeSliderInput);
}

function onSeekerSliderInput() {
    if (!video.isVideoLoaded()) return;
    video.seekToFrame(seekerSlider.valueAsNumber);
}

function onVolumeSliderInput() {
    if (!video.isVideoLoaded()) return;
    applyVolume();
}

function applyVolume() {
    video.setVolume(volumeSlider.valueAsNumber / VOLUME_SLIDER_MAX);
}

/**
 * 
 * @param {number} step 
 */
function increaseVolume(step=10) {
    volumeSlider.valueAsNumber = Math.min(volumeSlider.valueAsNumber + step, VOLUME_SLIDER_MAX);
    applyVolume();
}

/**
 * 
 * @param {number} step 
 */
function decreaseVolume(step=10) {
    volumeSlider.valueAsNumber = Math.max(volumeSlider.valueAsNumber - step, 0);
    applyVolume();
}

function onNextBtnClick() {
    video.nextFrame();
}

function onPrevBtnClick() {
    video.previousFrame();
}

function onPlayBtnClick() {
    if (!video.isVideoLoaded()) return;
    if (video.isVideoPlaying()) {
        video.pauseVideo();
        setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
    } else {
        video.playVideo();
        setPlayPauseBtnContent(PLAYBACK_BUTTON.PAUSE);
    }
}

/**
 * 
 * @param {number} value 
 */
function setSeekerValue(value) {
    seekerSlider.valueAsNumber = value;
}

/**
 * 
 * @param {PlaybackButton} value 
 */
function setPlayPauseBtnContent(value) {
    playPauseBtn.textContent = value;
}

/**
 * 
 * @param {number} value 
 */
function setSeekerMaximum(value) {
    seekerSlider.max = String(value); 
}

export default { init, setSeekerValue, setPlayPauseBtnContent, setSeekerMaximum, increaseVolume, decreaseVolume };