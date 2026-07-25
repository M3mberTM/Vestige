/** @import {ElementSize} from "./types" */

const UPSCALE_THRESH = 1000;
const UPSCALE_FACTOR = 2;
const MAX_WIDTH_RATIO = 0.97;


/** @type {HTMLVideoElement} */
let video;

let isLoaded = false;
let videoFps = -1;
let frameCount = -1;
// let currentFrame = -1;
/** * @type {Function | null} */
let onTimeChangedCallback;
/** * @type {Function | null} */
let onLoadedCallback;
/** * @type {Function | null} */
let onEndedCallback;

function init() {
    // @ts-ignore
    video = document.getElementById("video");

    video.addEventListener("loadedmetadata", () => {
        onLoadedMetadata();
    });

    video.addEventListener("timeupdate", () => {
        // seekerSlider.value = Math.round(video.currentTime * videoFps);
        // getFrameStrokes();
        onTimeUpdate();
    });

    video.addEventListener("ended", () => {
        // playPauseBtn.textContent = "Play";
        onEnded();
    });
}

function onEnded() {
    if (onEndedCallback) {
        onEndedCallback();
    }
}

function onLoadedMetadata() {
    adjustVideoSize();
    isLoaded = true;
    if (onLoadedCallback) {
        onLoadedCallback();
    }
}

function onTimeUpdate() {
    if (onTimeChangedCallback) {
        onTimeChangedCallback();
    }
}

/**
 * @param {Function} callback
 */
function setOnLoaded(callback) {
    onLoadedCallback = callback;
}

/**
 * @param {Function} callback
 */
function setOnEnded(callback) {
    onEndedCallback = callback;
}

/**
 * @param {Function} callback
 */
function setOnTimeChanged(callback) {
    onTimeChangedCallback = callback;
}

/**
 *
 * @returns {number} current video frame
 */
function getCurrentFrame() {
    return Math.round(video.currentTime * videoFps);
}

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

/**
 *
 * @param {number} frame
 */
function seekToFrame(frame) {}

/**
 *
 * @param {number} timeSecs
 */
function seekToTime(timeSecs) {
    video.currentTime = timeSecs;
}

/**
 * @returns {boolean} true if the video changed to next frame
 */
function nextFrame() {
    if (video.currentTime < video.duration) {
        video.currentTime += 1 / videoFps;
        return true;
    }
    return false;
}

/**
 * @returns {boolean} true if the video changed to previous frame
 */
function previousFrame() {
    if (video.currentTime > 0) {
        video.currentTime -= 1 / videoFps;
        return true;
    }
    return false;
}

function getFps() {
    if (videoFps === -1) throw new Error("No video loaded");
    return videoFps;
}

function getFrameCount() {
    if (frameCount === -1) throw new Error("No video loaded");
    return frameCount;
}

function adjustVideoSize() {
    let displayWidth = video.videoWidth;
    let displayHeight = video.videoHeight;

    if (displayWidth < UPSCALE_THRESH) {
        displayWidth *= UPSCALE_FACTOR;
        displayHeight *= UPSCALE_FACTOR;
    }

    const maxWidth = window.innerWidth * MAX_WIDTH_RATIO;

    if (displayWidth > maxWidth) {
        const scale = maxWidth / displayWidth;
        displayWidth *= scale;
        displayHeight *= scale;
    }

    video.style.width = displayWidth + "px";
    video.style.height = displayHeight + "px";
}

/**
 * @returns {ElementSize}
 */
function getVideoSize() {
    return {
        width: video.clientWidth,
        height: video.clientHeight
    };
}

/**
 * @returns {boolean}
 */
function isVideoLoaded() {
    return isLoaded;
}

/**
 * @param {boolean} isLoading 
 */
function setVideoisLoading(isLoading) {
    isLoaded = isLoading;
}

function isVideoPlaying() {
    return !video.paused;
}

/**
 * 
 * @param {number} volume 
 */
function setVolume(volume) {
    video.volume = volume;
}

function getSource() {
    return video.src;
}

/**
 * Sets the main source for the video player
 * @param {string} source 
 */
function setSource(source) {
    video.src = source;
    video.load();
}

/**
 * 
 * @param {number} fps 
 */
function setFps(fps) {
    videoFps = fps;
}

export default {
    getCurrentFrame,
    init,
    setOnEnded,
    setOnTimeChanged,
    setOnLoaded,
    getFps,
    getFrameCount,
    previousFrame,
    nextFrame,
    getVideoSize,
    isVideoLoaded,
    setVideoisLoading,
    isVideoPlaying,
    playVideo,
    pauseVideo,
    seekToFrame,
    seekToTime,
    setVolume,
    getSource,
    setSource,
    setFps
};
