import { PLAYBACK_BUTTON } from "./types.js";
import canvas from "./canvas.js";
import video from "./video.js";
import playbackControls from "./playbackControls.js";
import canvasControls from "./canvasControls.js";
import fileControls from "./fileControls.js";


init();

function init() {
    video.init();
    canvas.init();
    playbackControls.init();
    canvasControls.init();
    fileControls.init();

    video.setOnLoaded(onVideoLoad);
    video.setOnFrameChanged(onFrameChange);
    video.setOnEnded(onVideoEnd);
    video.setOnLoadStarted(onVideoLoadingStarted);
    document.addEventListener("keydown", onKeyDown)
}

/**
 * @param {KeyboardEvent} event 
 */
function onKeyDown(event) {
    if (event.code === "ArrowLeft") video.previousFrame();
    if (event.code === "ArrowRight") video.nextFrame();
    if (event.code === "Space") toggleVideoPlayback();
    if (event.code === "ArrowUp") playbackControls.increaseVolume();
    if (event.code === "ArrowDown") playbackControls.decreaseVolume();
    if (event.code === "KeyZ" && event.ctrlKey) canvas.undoStroke();
}

function toggleVideoPlayback() {
    if (video.isVideoPlaying()) {
        video.pauseVideo();
        playbackControls.setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
    } else {
        video.playVideo();
        playbackControls.setPlayPauseBtnContent(PLAYBACK_BUTTON.PAUSE);
    }
}

function onVideoLoadingStarted() {
    canvas.setCanDraw(false);
}

function onVideoLoad() {
    canvas.setCanvasSize(video.getVideoSize());
    canvas.setCanDraw(true);
    playbackControls.setSeekerValue(0);
    playbackControls.setSeekerMaximum(video.getFrameCount() - 1);
}

/**
 * @param {number} frame 
 */
function onFrameChange(frame) {
    playbackControls.setSeekerValue(frame);
    canvas.redrawFrameCanvas(frame);
}

function onVideoEnd() {
    playbackControls.setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
}