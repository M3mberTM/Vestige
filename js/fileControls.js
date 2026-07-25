import video from "./video.js";

/** @type {HTMLInputElement} */
let fileInput;
/** @type {HTMLButtonElement} */
let fileInputBtn;

function init() {
    // @ts-ignore
    fileInput = document.getElementById("videoInput");
    // @ts-ignore
    fileInputBtn = document.getElementById("videoInputBtn");

    fileInput.addEventListener("change", onFileInput);
    fileInputBtn.addEventListener("click", onFileInputBtnClick);
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
    video.loadVideo(file);
}

export default { init };
