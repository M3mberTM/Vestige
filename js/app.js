import { PLAYBACK_BUTTON } from "./types.js";
import canvas from "./canvas.js";
import video from "./video.js";
import controls from "./controls.js";


init();

function init() {
    video.init();
    canvas.init();
    controls.init();

    video.setOnLoaded(onVideoLoad);
    video.setOnFrameChanged(onFrameChange);
    video.setOnEnded(onVideoEnd);
    video.setOnLoadStarted(onVideoLoadingStarted);
}

function onVideoLoadingStarted() {
    canvas.setCanDraw(false);
}

function onVideoLoad() {
    canvas.setCanvasSize(video.getVideoSize());
    canvas.setCanDraw(true);
    controls.setSeekerValue(0);
    controls.setSeekerMax(video.getFrameCount() - 1);
}

/**
 * @param {number} frame 
 */
function onFrameChange(frame) {
    controls.setSeekerValue(frame);
    canvas.redrawFrameCanvas(frame);
}

function onVideoEnd() {
    controls.setPlayPause(PLAYBACK_BUTTON.PLAY);
}