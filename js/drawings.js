/** @import {Stroke} from "./types" */

const frameStrokes = new Map();

/**
 * Returns the drawing for a specific video frame given
 * @param {number} frame
 * @returns {Stroke[]}
*/
function getFrameStrokes(frame) {
    return frameStrokes.get(frame) ?? [];
}


/**
 * 
 * @param {number} frame 
 */
function removeLastStroke(frame) {
    if (!frameStrokes.has(frame)) return;
    frameStrokes.get(frame).pop();
}

/**
 * Appends a stroke to the current frame. Only if the frame drawing exists already!
 * @param {number} frame 
 * @param {Stroke} stroke 
 */
function addFrameStroke(frame, stroke) {
    if (!frameStrokes.has(frame)) {
        frameStrokes.set(frame, []);
    };
    frameStrokes.get(frame).push(stroke);
}

export default {getFrameStrokes, removeLastStroke, addFrameStroke};