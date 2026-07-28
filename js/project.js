import video from "./video.js";
import drawings from "./drawings.js";
import JSZip from "jszip";


async function saveProject() {
    const zip = new JSZip();

    zip.file("video.mp4", video.getVideoFile());
    zip.file("drawings.json", JSON.stringify(drawings.exportStrokes()));

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "project.vsie";
    a.click();
    URL.revokeObjectURL(url);
}

/**
 * 
 * @param {File} file 
 */
async function loadProject(file) {
    const zip = await JSZip.loadAsync(file);

    const videoBlob = await zip.file("video.mp4")?.async("blob");
    const drawingsJson = await zip.file("drawings.json")?.async("string");

    if (!videoBlob || !drawingsJson) {
        alert("Invalid project file");
        return;
    };
    const videoFile = new File(
        [videoBlob],
        "video.mp4",
        { type: "video/mp4" }
    );

    drawings.importStrokes(JSON.parse(drawingsJson));

    video.loadVideo(videoFile);
}

export default {saveProject, loadProject};