import video from "./video";
import {PlaybackButton, type RangeInput} from "./types";

const VOLUME_SLIDER_MAX = 1000;
const VOLUME_STEP = 20;

let playPauseBtn: HTMLButtonElement;
let seekerSlider: RangeInput;
let volumeSlider: RangeInput;
let prevFrameBtn: HTMLButtonElement;
let nextFrameBtn: HTMLButtonElement;
let frameCounterTxt: HTMLHeadingElement;

function init() {
    playPauseBtn = document.getElementById("playPause") as HTMLButtonElement;
    seekerSlider = document.getElementById("seeker") as RangeInput;
    volumeSlider = document.getElementById("volumeSlider") as RangeInput;
    prevFrameBtn = document.getElementById("prevFrame") as HTMLButtonElement;
    nextFrameBtn = document.getElementById("nextFrame") as HTMLButtonElement;
    frameCounterTxt = document.getElementById("currentFrameTxt") as HTMLHeadingElement;

    seekerSlider.addEventListener("keydown", (e) => {
        if (
            ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
        ) {
            e.preventDefault();
        }
    });
    const preventButtons = [playPauseBtn, prevFrameBtn, nextFrameBtn];
    for (const button of preventButtons) {
        button.addEventListener("keydown", (e) => {
            if (
                ["Space"].includes(e.code)
            ) {
                e.preventDefault();
            }
        });
    }
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

function increaseVolume() {
    volumeSlider.valueAsNumber = Math.min(volumeSlider.valueAsNumber + VOLUME_STEP, VOLUME_SLIDER_MAX);
    applyVolume();
}

function decreaseVolume() {
    volumeSlider.valueAsNumber = Math.max(volumeSlider.valueAsNumber - VOLUME_STEP, 0);
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
        setPlayPauseBtnContent(PlaybackButton.PLAY);
    } else {
        video.playVideo();
        setPlayPauseBtnContent(PlaybackButton.PAUSE);
    }
}

function setSeekerValue(value: number) {
    seekerSlider.valueAsNumber = value;
}

function setFrameCounterTxt(frameNum: number) {
    frameCounterTxt.textContent = String(frameNum);
}

function setPlayPauseBtnContent(value: PlaybackButton) {
    playPauseBtn.textContent = value;
}

function setSeekerMaximum(value: number) {
    seekerSlider.max = String(value); 
}

export default { init, setSeekerValue, setPlayPauseBtnContent, setSeekerMaximum, increaseVolume,
    decreaseVolume, setFrameCounterTxt };