import type {Drawing, VoidFunction} from "./types";

let onAnnotationsChangedCallback: VoidFunction | null = null;
const annotations = new Map();

/**
 * Returns the drawing for a specific video frame given
*/
function getFrameAnnotations(frame: number): Drawing[] {
    return annotations.get(frame) ?? [];
}

function getMarkedFrames(): number[] {
    return Array.from(annotations.keys());
}

function clearAnnotations() {
    annotations.clear();
    onAnnotationsChanged();
}

/**
 * Removes all the annotations on a specific frame
 */
function removeFrameAnnotations(frame: number) {
    annotations.delete(frame);
    onAnnotationsChanged();
}

/**
 * Removes the last annotation from a specific frame
 */
function removeLastAnnotation(frame: number) {
    if (!annotations.has(frame)) return;
    annotations.get(frame).pop();
    onAnnotationsChanged();
}

/**
 * Appends a drawing to the current frame. Only if the frame annotation exists already!
 */
function addFrameAnnotation(frame: number, annotation: Drawing) {
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
 * Converts JSON data into annotation map
 */
function importAnnotations(data: JSON) {
    annotations.clear();
    for (const [frame, annotation] of Object.entries(data)) {
        annotations.set(Number(frame), annotation);
    }
}

function setOnAnnotationsChanged(callback: VoidFunction) {
    onAnnotationsChangedCallback = callback;
}

function onAnnotationsChanged() {
    onAnnotationsChangedCallback?.();
}

export default {getFrameAnnotations, removeLastAnnotation, addFrameAnnotation, exportAnnotations,
    importAnnotations, getMarkedFrames, clearAnnotations, removeFrameAnnotations, setOnAnnotationsChanged};