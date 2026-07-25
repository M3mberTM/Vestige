import { PLAYBACK_BUTTON } from "./types.js";
import canvas from "./canvas.js";
import video from "./video.js";
import controls from "./controls.js";

canvas.init();
video.init();
controls.init();

video.setOnLoaded(onVideoLoad);
video.setOnTimeChanged(onVideoUpdate);
video.setOnEnded(onVideoEnd);

function onVideoLoad() {
    const videoSize = video.getVideoSize();
    canvas.setCanvasSize(videoSize);
    canvas.setCanDraw(true);
    controls.setSeekerValue(0);
}

function onVideoUpdate() {
    controls.setSeekerValue(video.getCurrentFrame());
    canvas.redrawFrameCanvas(video.getCurrentFrame());
}

function onVideoEnd() {
    controls.setPlayPause(PLAYBACK_BUTTON.PLAY);
}