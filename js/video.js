/** @import {ElementSize} from "./types" */
import * as MP4Box from "mp4box";

const UPSCALE_THRESH = 1000;
const UPSCALE_FACTOR = 2;
const MAX_WIDTH_RATIO = 0.97;


/** @type {HTMLVideoElement} */
let video;

let isLoaded = false;
let isMetadataLoaded = false;
let isMp4BoxLoaded = false;

let videoFps = -1;
let frameCount = -1;
let currentFrame = -1;


/** * @type {((frame: number) => void) | null} */
let onFrameChangedCallback = null;
/** * @type {(() => void) | null} */
let onLoadedCallback = null;
/** * @type {(() => void) | null} */
let onEndedCallback = null;
/** * @type {(() => void) | null} */
let onLoadStartedCallback = null;

function init() {
    // @ts-ignore
    video = document.getElementById("video");

    video.addEventListener("loadedmetadata", onMetadataLoaded);
    video.addEventListener("timeupdate",onTimeUpdate );
    video.addEventListener("ended", () => {onEndedCallback?.()} );
}

/**
 * 
 * @param {File} file 
 */
function loadVideo(file) {
    if (isLoaded) {
        URL.revokeObjectURL(video.src);
    }
    isLoaded = false;
    isMetadataLoaded = false;
    isMp4BoxLoaded = false;
    onLoadStartedCallback?.();
    const url = URL.createObjectURL(file);
    video.src = url;

    // all this just to get the framerate of the video
    const mp4boxFile = MP4Box.createFile();

    mp4boxFile.onReady = (info) => {
        const track = info.videoTracks[0];
        const fps = (track.nb_samples * track.timescale) / track.duration;
        videoFps = fps;
        frameCount = track.nb_samples;
        isMp4BoxLoaded = true;
        checkIfVideoLoaded();
    };
    const reader = new FileReader();
    reader.onload = (e) => {
        if (!e.target) return;
        
        const buffer = /** @type {ArrayBuffer & {fileStart: number}} */ (e.target.result);

        // MP4Box requires this property for some reason
        buffer.fileStart = 0;

        mp4boxFile.appendBuffer(buffer);
        mp4boxFile.flush();
    };

    reader.readAsArrayBuffer(file);
}

function onMetadataLoaded() {
    isMetadataLoaded = true;
    checkIfVideoLoaded();
}

function checkIfVideoLoaded() {
    if (!isMetadataLoaded || !isMp4BoxLoaded) return;
    adjustVideoSize();
    isLoaded = true;
    onLoadedCallback?.();
}

function notifyFrameChanged() {
    if (!onFrameChangedCallback) return;

    const frame = getCurrentFrame();
    if (frame === currentFrame) return;

    currentFrame = frame;
    onFrameChangedCallback(frame);
}

function onTimeUpdate() {
    notifyFrameChanged();
}


/**
 * Sets the video to the frame given. Notifies of the frame change
 * @param {number} frame 
 */
function setCurrentFrame(frame) {
    video.currentTime = frame / videoFps;
    notifyFrameChanged();
}

/**
 * @param {() => void} callback
 */
function setOnLoaded(callback) {
    onLoadedCallback = callback;
}

/**
 * @param {() => void} callback
 */
function setOnEnded(callback) {
    onEndedCallback = callback;
}

/**
 * 
 * @param {() => void} callback 
 */
function setOnLoadStarted(callback) {
    onLoadStartedCallback = callback;
}

/**
 * @param {(frame: number)=>void} callback
 */
function setOnFrameChanged(callback) {
    onFrameChangedCallback = callback;
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
 * @param {number} frame
 */
function seekToFrame(frame) {
    setCurrentFrame(frame);
}

/**
 * @param {number} timeSecs
 */
function seekToTime(timeSecs) {
    video.currentTime = timeSecs;
    notifyFrameChanged();
}

/**
 * @returns {boolean} true if the video changed to next frame
 */
function nextFrame() {
    if (video.currentTime < video.duration) {
        setCurrentFrame(getCurrentFrame() + 1);
        return true;
    }
    return false;
}

/**
 * @returns {boolean} true if the video changed to previous frame
 */
function previousFrame() {
    if (video.currentTime > 0) {
        setCurrentFrame(getCurrentFrame() - 1);
        return true;
    }
    return false;
}

function getFps() {
    if (videoFps === -1) throw new Error("No video loaded");
    return videoFps;
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


function getFrameCount() {
    return frameCount;
}

export default {
    loadVideo,
    getCurrentFrame,
    init,
    setOnEnded,
    setOnLoaded,
    getFps,
    previousFrame,
    nextFrame,
    getVideoSize,
    isVideoLoaded,
    isVideoPlaying,
    playVideo,
    pauseVideo,
    seekToFrame,
    seekToTime,
    setVolume,
    getSource,
    setSource,
    setOnFrameChanged,
    getFrameCount,
    setOnLoadStarted
};
