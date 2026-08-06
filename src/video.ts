import type { ElementSize, float, VoidFunction } from "./types";
import * as MediaBunny from "mediabunny";

const UPSCALE_THRESH = 1000;
const UPSCALE_FACTOR = 2;
const MAX_WIDTH_RATIO = 0.97;
const INVALID_VAL = -1;

let video: HTMLVideoElement;
let videoSpinner: HTMLDivElement;
let loadedFile: File | null = null;

let isLoaded = false;
let isMetadataLoaded = false;
let isVideoInfoLoaded = false;

let lastNotifiedFrame = INVALID_VAL;
let currentFrame = INVALID_VAL;
const frameTimes: float[] = [];

type frameCallback = (frame: number) => void;

let onFrameChangedCallback: frameCallback | null = null;
let onLoadedCallback: VoidFunction | null = null;
let onEndedCallback: VoidFunction | null = null;
let onLoadStartedCallback: VoidFunction | null = null;

function init() {
    video = document.getElementById("video") as HTMLVideoElement;
    videoSpinner = document.getElementById("videoSpinner") as HTMLDivElement;

    video.addEventListener("loadedmetadata", onMetadataLoaded);
    video.addEventListener("timeupdate",onTimeUpdate);
    video.addEventListener("ended", onEnded);
}

function resetVars() {
    isLoaded = false;
    isMetadataLoaded = false;
    isVideoInfoLoaded = false;
    currentFrame = 0;
    frameTimes.length = 0;
    lastNotifiedFrame = INVALID_VAL;
}

function setVideoSource(file: File) {
    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();
    loadedFile = file;
}

async function loadVideo(file: File) {
    videoSpinner.style.display = "inline-block";
    if (isLoaded) {
        URL.revokeObjectURL(video.src);
    }
    resetVars()
    onLoadStartedCallback?.();
    setVideoSource(file);

    const input = new MediaBunny.Input({
        formats: MediaBunny.ALL_FORMATS,
        source: new MediaBunny.BlobSource(file),
    });

    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) {
        throw new Error("Could not get a video track");
    }
    // precalculate the frame times in advance to not have to deal with calculation on the fly
    const sink = new MediaBunny.VideoSampleSink(videoTrack)
    for await (const sample of sink.samples()) {
        frameTimes.push(sample.timestamp);
        sample.close();
    }

    isVideoInfoLoaded = true;
    finishLoadingIfReady();
}


function onEnded() {
    onEndedCallback?.();
}

function onMetadataLoaded() {
    isMetadataLoaded = true;
    finishLoadingIfReady();
}

function finishLoadingIfReady() {
    if (!isMetadataLoaded || !isVideoInfoLoaded) return;
    adjustVideoSize();
    isLoaded = true;
    videoSpinner.style.display = "none";
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
 */
function setCurrentFrame(frame: number) {
    currentFrame = frame;
    video.currentTime = frameToTime(frame);
    notifyFrameChanged();
}

function setOnLoaded(callback: VoidFunction) {
    onLoadedCallback = callback;
}

function setOnEnded(callback: VoidFunction) {
    onEndedCallback = callback;
}

function setOnLoadStarted(callback: VoidFunction) {
    onLoadStartedCallback = callback;
}

function setOnFrameChanged(callback: frameCallback) {
    onFrameChangedCallback = callback;
}

/**
 * @returns time in seconds
 */
function frameToTime(frame: number): float {
    return frameTimes[frame]!;
}

function timeToFrame(timeSecs: float): number {
    const EPSILON = 0.00001;
    let frame = 0;
    while (frame + 1 < frameTimes.length && frameTimes[frame + 1]! <= timeSecs + EPSILON) frame++;
    return frame;
}

function getCurrentFrame(): number {
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


function seekToFrame(frame: number) {
    setCurrentFrame(frame);
}

function seekToTime(timeSecs: float) {
    video.currentTime = timeSecs;
    currentFrame = timeToFrame(timeSecs);
    notifyFrameChanged();
}

/**
 * @returns {boolean} true if the video changed to next frame
 */
function nextFrame() {
    if (currentFrame >= frameTimes.length - 1) return false;
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

function getVideoSize(): ElementSize {
    return {
        width: video.clientWidth,
        height: video.clientHeight
    };
}

function getVideoResolution(): ElementSize {
    return {
        width: video.videoWidth,
        height: video.videoHeight
    }
}

function isVideoLoaded() {
    return isLoaded;
}

function isVideoPlaying() {
    return !video.paused;
}

function setVolume(volume: number) {
    video.volume = volume;
}

function getFrameCount() {
    return frameTimes.length;
}

function getVideoFile() {
    if (!isLoaded) return null;
    return loadedFile;
}

export default {
    loadVideo,
    getCurrentFrame,
    init,
    setOnEnded,
    setOnLoaded,
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
    getVideoResolution
};