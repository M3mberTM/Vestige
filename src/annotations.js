/** @import {Drawing } from "./types" */

/** * @type {(() => void) | null} */
let onAnnotationsChangedCallback = null;
const annotations = new Map();

/**
 * Returns the drawing for a specific video frame given
 * @param {number} frame
 * @returns {Drawing[]}
*/
function getFrameAnnotations(frame) {
    return annotations.get(frame) ?? [];
}

function getMarkedFrames() {
    return Array.from(annotations.keys());
}

function clearAnnotations() {
    annotations.clear();
    onAnnotationsChanged();
}

/**
 * Removes all the annotations on a specific frame
 * @param {number} frame 
 */
function removeFrameAnnotations(frame) {
    annotations.delete(frame);
    onAnnotationsChanged();
}

/**
 * 
 * @param {number} frame 
 */
function removeLastAnnotation(frame) {
    if (!annotations.has(frame)) return;
    annotations.get(frame).pop();
    onAnnotationsChanged();
}

/**
 * Appends a drawing to the current frame. Only if the frame annotation exists already!
 * @param {number} frame 
 * @param {Drawing} annotation 
 */
function addFrameAnnotation(frame, annotation) {
    if (!annotations.has(frame)) {
        annotations.set(frame, []);
    };
    annotations.get(frame).push(annotation);
    onAnnotationsChanged();
}

/**
 * @returns all the annotations on every single frame
 */
function exportAnnotations() {
    return Object.fromEntries(annotations);
}

/**
 * 
 * @param {JSON} data 
 */
function importAnnotations(data) {
    annotations.clear();
    for (const [frame, annotation] of Object.entries(data)) {
        annotations.set(Number(frame), annotation);
    }
}

/**
 * 
 * @param {() => void} callback 
 */
function setOnAnnotationsChanged(callback) {
    onAnnotationsChangedCallback = callback;
}

function onAnnotationsChanged() {
    onAnnotationsChangedCallback?.();
}

export default {getFrameAnnotations, removeLastAnnotation, addFrameAnnotation, exportAnnotations,
    importAnnotations, getMarkedFrames, clearAnnotations, removeFrameAnnotations, setOnAnnotationsChanged};