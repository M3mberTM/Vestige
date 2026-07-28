import video from "./video.js";
import project from "./project.js";

/** @type {HTMLInputElement} */
let fileInput;
/** @type {HTMLButtonElement} */
let fileInputBtn;
/** @type {HTMLButtonElement} */
let exportBtn;

function init() {
    // @ts-ignore
    fileInput = document.getElementById("videoInput");
    // @ts-ignore
    fileInputBtn = document.getElementById("videoInputBtn");
    // @ts-ignore
    exportBtn = document.getElementById("exportBtn");

    fileInput.addEventListener("change", onFileInput);
    fileInputBtn.addEventListener("click", onFileInputBtnClick);
    exportBtn.addEventListener("click", onExportBtnClick);
}

function onFileInputBtnClick() {
    fileInput.click();
}

function onFileInput() {
    if (!fileInput.files) {
        alert("Please select a file");
        return;
    };
    const file = fileInput.files[0];
    if (!file) return;
    if (file.name.endsWith(".vsie")) {
        project.loadProject(file).catch((err) => console.error(err));
    } else {
        video.loadVideo(file);
    }
}

function onExportBtnClick() {
    project.saveProject().then(() => {
        console.log("Project saved");
    }).catch((err) => console.error(err));
}

export default { init };
