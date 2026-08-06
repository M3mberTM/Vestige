import video from "./video.js";
import project from "./project.js";
import { FILE_EXTENSION } from "./constants.js";
import burning from "./burning.js";

let fileInput: HTMLInputElement;
let fileInputBtn: HTMLButtonElement;
let exportBtn: HTMLButtonElement;
let vsieBtn: HTMLButtonElement;
let mp4Btn: HTMLButtonElement;
let fileDropdown: HTMLDivElement;
let fileOptions: HTMLDivElement;

let dropdownTimeout: number | null = null;

function init() {
    fileInput = document.getElementById("videoInput") as HTMLInputElement;
    fileInputBtn = document.getElementById("videoInputBtn") as HTMLButtonElement;
    exportBtn = document.getElementById("exportBtn") as HTMLButtonElement;
    vsieBtn = document.getElementById("vsieBtn") as HTMLButtonElement;
    mp4Btn = document.getElementById("mp4Btn") as HTMLButtonElement;
    fileDropdown = document.getElementById("dropdown") as HTMLDivElement;
    fileOptions = document.getElementById("dropdownContent") as HTMLDivElement;

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
        video.loadVideo(file); // TODO add gif support
    }
}

function onVsieBtnClick() {
    project.saveProject().then(() => {
        console.log("Project saved");
    }).catch((err) => console.error(err));
}

function onMp4BtnClick() {
    console.log("burn in the video");
    // TODO update to allow users to pick different video types to export into along with gif
    // TODO show spinner when video is being burned and don't allow other exporting or importing
    burning.burnVideo().then(() => {
        console.log("Successfully burned annotations into the video");
    }).catch((err) => console.error(err));
}


export default { init };
