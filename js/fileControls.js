import video from "./video.js";

/** @type {HTMLInputElement} */
let fileInput;

function init() {
    // @ts-ignore
    fileInput = document.getElementById("videoInput");

    fileInput.addEventListener("change", onFileInput);
}

function onFileInput() {
    if (!fileInput.files) {
        alert("Please select a file");
        return;
    };
    const file = fileInput.files[0];
    if (!file) return;
    video.loadVideo(file);
}

export default { init };
