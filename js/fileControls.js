import video from "./video.js";
import project from "./project.js";
import { FILE_EXTENSION } from "./constants.js";

/** @type {HTMLInputElement} */
let fileInput;
/** @type {HTMLButtonElement} */
let fileInputBtn;
/** @type {HTMLButtonElement} */
let exportBtn;
/** @type {HTMLButtonElement} */
let vsieBtn;
/** @type {HTMLButtonElement} */
let mp4Btn;
/** @type {HTMLDivElement} */
let fileDropdown;
/** @type {HTMLDivElement} */
let fileOptions;

/** @type {number | null} */
let dropdownTimeout = null;

function init() {
    // @ts-ignore
    fileInput = document.getElementById("videoInput");
    // @ts-ignore
    fileInputBtn = document.getElementById("videoInputBtn");
    // @ts-ignore
    exportBtn = document.getElementById("exportBtn");
    // @ts-ignore
    vsieBtn = document.getElementById("vsieBtn");
    // @ts-ignore
    mp4Btn = document.getElementById("mp4Btn");
    // @ts-ignore
    fileDropdown = document.getElementById("dropdown");
    // @ts-ignore
    fileOptions = document.getElementById("dropdownContent");

    const preventBtns = [vsieBtn, mp4Btn, exportBtn, fileInputBtn];
    for (const button of preventBtns) {
        button.addEventListener("keydown", (e) => {
            if (["Space"].includes(e.code)) {
                e.preventDefault();
            }
        });
    }
    fileInput.addEventListener("change", onFileInput);
    fileInputBtn.addEventListener("click", onFileInputBtnClick);
    vsieBtn.addEventListener("click", onVsieBtnClick);
    mp4Btn.addEventListener("click", onMp4BtnClick);
    fileDropdown.addEventListener("mouseenter", onDropdownEnter);
    fileDropdown.addEventListener("mouseleave", onDropdownLeave);
}

function onDropdownEnter() {
    fileOptions.classList.add("open");
    if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = null;
    }
}

function onDropdownLeave() {
    dropdownTimeout = setTimeout(() => {
        fileOptions.classList.remove("open");
    }, 100);
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
    if (file.name.endsWith(FILE_EXTENSION)) {
        project.loadProject(file).catch((err) => console.error(err));
    } else {
        video.loadVideo(file);
    }
}

function onVsieBtnClick() {
    project.saveProject().then(() => {
        console.log("Project saved");
    }).catch((err) => console.error(err));
}

function onMp4BtnClick() {
    console.log("burn in the video");
}

export default { init };
