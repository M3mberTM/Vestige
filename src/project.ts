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
    const handle = await window.showSaveFilePicker({ // FIX adjust so that it does not give error
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

async function loadProject(file: File) {
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


    video.loadVideo(videoFile);
    annotations.importAnnotations(JSON.parse(annotationsJson));
}

export default {saveProject, loadProject};