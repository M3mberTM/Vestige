import { PLAYBACK_BUTTON } from "./types.js";
import canvas from "./canvas/editor.js";
import video from "./video.js";
import playbackControls from "./playbackControls.js";
import canvasControls from "./canvasControls.js";
import fileControls from "./fileControls.js";
import markers from "./markers.js";
import annotations from "./annotations.js";

init();

function init() {
    video.init();
    canvas.init();
    playbackControls.init();
    canvasControls.init();
    fileControls.init();
    markers.init();

    video.setOnLoaded(onVideoLoad);
    video.setOnFrameChanged(onFrameChange);
    video.setOnEnded(onVideoEnd);
    video.setOnLoadStarted(onVideoLoadingStarted);
    document.addEventListener("keydown", onKeyDown);
    annotations.setOnAnnotationsChanged(onAnnotationsChanged);
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

function onAnnotationsChanged() {
    markers.redraw(annotations.getMarkedFrames(), video.getFrameCount());
}

function toggleVideoPlayback() {
    if (!video.isVideoLoaded()) return;
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
    annotations.clearAnnotations();
}

function onVideoLoad() {
    canvas.setCanvasSize(video.getVideoSize());
    canvas.setCanDraw(true);
    playbackControls.setSeekerValue(0);
    playbackControls.setFrameCounterTxt(0);
    playbackControls.setSeekerMaximum(video.getFrameCount() - 1);
    markers.setCanvasSize(video.getVideoSize());
    markers.redraw(annotations.getMarkedFrames(), video.getFrameCount());
}

/**
 * @param {number} frame 
 */
function onFrameChange(frame) {
    playbackControls.setSeekerValue(frame);
    playbackControls.setFrameCounterTxt(frame);
    canvas.redrawFrame(frame);
}

function onVideoEnd() {
    playbackControls.setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
}