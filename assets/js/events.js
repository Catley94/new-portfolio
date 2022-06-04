window.addEventListener("resize", () => {
    ratio = 1024 / 768;
    windowRatio = w / h;
    if(windowRatio > ratio) {
        scale = h / 768;
    }
}, false)
closeButton.addEventListener("click", () => {
    CloseGUI();
})
window.addEventListener('keydown', (e) => {
    if(e.code === "Escape" && guiOpen) {
        CloseGUI();
    }
})
legendButton.addEventListener("click", () => {
    PopulateGUI(
        legend,
        "legend"
    )
    OpenGUI();
})
aboutButton.addEventListener("click", () => {
    PopulateGUI(
        about,
        "about"
    )
    OpenGUI();
})
busyMindButton.addEventListener("click", () => {
    busyMindMode = !busyMindMode;
    if(busyMindMode) {
        busyMindButton.textContent = "Go to mindfulness mode";
    } else if(!busyMindMode) {
        busyMindButton.textContent = "Short on time?";
    }
})
