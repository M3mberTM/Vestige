/** @import {ElementSize} from "./types" */
import * as MP4Box from "mp4box";

const UPSCALE_THRESH = 1000;
const UPSCALE_FACTOR = 2;
const MAX_WIDTH_RATIO = 0.97;
const INVALID_VAL = -1;


/** @type {HTMLVideoElement} */
let video;
/** @type {File | null} */
let loadedFile = null;

/** * @type {MP4Box.ISOFile | null} */
let mp4File = null;

/** @type {MP4Box.Movie | null} */
let videoInfo = null;
/** @type {MP4Box.Sample[]} */
let videoSamples = [];

let isLoaded = false;
let isMetadataLoaded = false;
let isMp4BoxLoaded = false;

let videoFps = INVALID_VAL;
let frameCount = INVALID_VAL;
let lastNotifiedFrame = INVALID_VAL;
let currentFrame = INVALID_VAL;
/** @type {number[]} */
const frameTimes = [];
let videoTimescale = INVALID_VAL;


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
    video.addEventListener("timeupdate",onTimeUpdate);
    video.addEventListener("ended", onEnded);
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
    currentFrame = 0;
    lastNotifiedFrame = INVALID_VAL;
    onLoadStartedCallback?.();
    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();
    loadedFile = file;

    // all this just to get the framerate of the video
    const mp4boxFile = MP4Box.createFile();
    mp4boxFile.onReady = (info) => {
        videoInfo = info
        const track = info.videoTracks[0];
        const fps = (track.nb_samples * track.timescale) / track.duration;
        videoTimescale = track.timescale
        mp4boxFile.setExtractionOptions(track.id, null, { nbSamples: Infinity});
        mp4boxFile.start();
        videoFps = fps;
    };

    // precalculate frame times and then refer to them when switching frames
    mp4boxFile.onSamples = (id, user, samples) => {
        frameTimes.push(0); // samples does not contain the first frame
        for (const sample of samples) {
            frameTimes.push(sample.cts / videoTimescale);
        }
        videoSamples = [...samples];
        frameTimes.sort((a, b) => a - b);
        frameTimes[frameTimes.length-1] = video.duration; // last frame can sometimes be different than video duration
        frameCount = frameTimes.length;
        isMp4BoxLoaded = true;
        finishLoadingIfReady();
    }

    const reader = new FileReader();
    // @ts-ignore
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

function onEnded() {
    onEndedCallback?.();
}

function onMetadataLoaded() {
    isMetadataLoaded = true;
    finishLoadingIfReady();
}

function finishLoadingIfReady() {
    if (!isMetadataLoaded || !isMp4BoxLoaded) return;
    adjustVideoSize();
    isLoaded = true;
    onLoadedCallback?.();
}

function notifyFrameChanged() {
    if (!onFrameChangedCallback) return;

    const frame = getCurrentFrame();
    if (frame === lastNotifiedFrame) return;

    lastNotifiedFrame = frame;
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
    currentFrame = frame;
    video.currentTime = frameToTime(frame);
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
 * @param {number} frame 
 * @returns {number} time in seconds
 */
function frameToTime(frame) {
    return frameTimes[frame];
}

/**
 * @param {number} timeSecs 
 * @returns {number} frame number
 */
function timeToFrame(timeSecs) {
    const EPSILON = 0.00001;
    let frame = 0;
    while (frame + 1 < frameTimes.length && frameTimes[frame + 1] <= timeSecs + EPSILON) frame++;
    return frame;
}
/**
 *
 * @returns {number} current video frame
 */
function getCurrentFrame() {
    return timeToFrame(video.currentTime);
}

function playVideo() {
    if (!isLoaded) return;
    video.play();
}

function pauseVideo() {
    if (!isLoaded) return;
    setCurrentFrame(timeToFrame(video.currentTime));
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
    currentFrame = timeToFrame(timeSecs);
    notifyFrameChanged();
}

/**
 * @returns {boolean} true if the video changed to next frame
 */
function nextFrame() {
    if (currentFrame >= frameCount - 1) return false;
    if (!video.paused) pauseVideo();
    setCurrentFrame(currentFrame+1);
    return true;
}

/**
 * @returns {boolean} true if the video changed to previous frame
 */
function previousFrame() {
    if (currentFrame <= 0) return false;
    if (!video.paused) pauseVideo();
    setCurrentFrame(currentFrame-1);
    return true;
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
        const scale = Math.floor((maxWidth / displayWidth) * 100) / 100;
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

function getFrameCount() {
    return frameCount;
}

function getVideoFile() {
    if (!isLoaded) return null;
    return loadedFile;
}

function getMp4Info() {
    return videoInfo;
}

function getVideoSamples() {
    return videoSamples;
}

function getMp4File() {
    return mp4File;
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
    setOnFrameChanged,
    getFrameCount,
    setOnLoadStarted,
    getVideoFile,
    getMp4Info,
    getVideoSamples,
    getMp4File
};
