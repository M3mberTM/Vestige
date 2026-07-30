import video from "./video.js";
import annotations from "./annotations.js";
import JSZip from "jszip";
import { FILE_EXTENSION } from "./constants.js";


async function saveProject() {
    if (!video.isVideoLoaded()) return
    const zip = new JSZip();

    zip.file("video.mp4", video.getVideoFile());
    zip.file("annotations.json", JSON.stringify(annotations.exportAnnotations()));

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);

    // @ts-ignore
    const handle = await window.showSaveFilePicker({
        suggestedName: "project" + FILE_EXTENSION,
        types: [
            {
                description: "Vestige Project",
                accept: {
                    "application/x-myproject": [FILE_EXTENSION]
                }
            }
        ]
    });

    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
}

/**
 * 
 * @param {File} file 
 */
async function loadProject(file) {
    const zip = await JSZip.loadAsync(file);

    const videoBlob = await zip.file("video.mp4")?.async("blob");
    const annotationsJson = await zip.file("annotations.json")?.async("string");

    if (!videoBlob || !annotationsJson) {
        alert("Invalid project file");
        return;
    };
    const videoFile = new File(
        [videoBlob],
        "video.mp4",
        { type: "video/mp4" }
    );

    annotations.importAnnotations(JSON.parse(annotationsJson));

    video.loadVideo(videoFile);
}

export default {saveProject, loadProject};