// VARIABLES
let app = SetupPixiStage();
let backgroundContainer = new PIXI.Container();
let dandelionContainer = new PIXI.Container();
let background;
let dandelionSeed;
let dandelions = [];
let preDandelionSeed = [];
const minDandelionSize = 0.25;
const maxDandelionSize = 0.35;
const maxWindSpeed = 3;
const floatingSpeed = 0.01;
const maxDandelionXPosSpawn = -500;
const maxDandelionYPosSpawn = window.innerHeight;
const blurFilter1 = new PIXI.filters.BlurFilter();

//GUI
let guiOpen = false;
let guiType = "";
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", () => {
    CloseGUI(guiType);
})
const legendContent = document.querySelector("#legendContent");
const projectContent = document.querySelector("#projectContent");
const title = document.querySelector("#title");
const libariesUsed = document.querySelector("#librariesUsed");
const thumbnail = document.querySelector("#thumbnail");
const shortDesc = document.querySelector("#shortDesc");
const longDesc = document.querySelector("#longDesc");


//SYMBOL BUTTON
const legendButton = document.querySelector("#legend");
legendButton.addEventListener("click", () => {
  OpenGUI("legend");
})


//SHORT ON TIME BUTTON
let contentBusyMind = false;
let busyMindMode = false;
const busyMindButton = document.querySelector("#busyMind");
busyMindButton.addEventListener("click", () => {
    busyMindMode = !busyMindMode;
    if(busyMindMode) {
        busyMindButton.textContent = "Go to mindfulness mode";
    } else if(!busyMindMode) {
        busyMindButton.textContent = "Short on time?";
    }
    console.log("busyMindMode: ", busyMindMode);
})


//RESIZE
let ratio, windowRatio;
const w = window.innerWidth, h = window.innerHeight;
scale = w / 1024;

window.addEventListener("resize", () => {
    ratio = 1024 / 768;
    windowRatio = w / h;
    if(windowRatio > ratio) {
        scale = h / 768;
    }
}, false)


function SetupPixiStage() {
    return new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
}

function SetupPixiStageRenderer() {
    return new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { antialias: true });
}

function AddContainerToStage(container) {
    app.stage.addChild(container);
}

function AddStageToHTML() {
    document.body.appendChild(app.view);
}

function AddToContainer(container, item) {
    container.addChild(item);
}


const AssignWindSpeed = (_dandelion, _speed) => {
    // TODO ASSIGN TO xSpeed, NOT speed
    _dandelion.xSpeed = _speed;
}

const StartFloating = (_dandelion) => {
    function _MoveYPosition(_dandelion) {
        _dandelion.y += _dandelion.ySpeed;
    }

    _MoveYPosition(_dandelion);

}

const incrementSpeed = (item, _amount) => {
    item.ySpeed += _amount;
}

const decrementSpeed = (item, _amount) => {
    item.ySpeed -= _amount;
}


function CheckDandelionSpeed(dandelion) {
    if (dandelion.xSpeed === 0) {
        const windSpeed = GenerateRandomWindSpeed();
        AssignWindSpeed(dandelion, windSpeed);
    }

    if(dandelion.y - dandelion.originalYPos > 50) {
        decrementSpeed(dandelion, floatingSpeed);
    } else {
        incrementSpeed(dandelion, floatingSpeed);
    }
}


function MoveDandelion(dandelion) {
    function _MoveXPosition() {
        dandelion.x += dandelion.xSpeed;
    }

    _MoveXPosition();
    StartFloating(dandelion);
}

function GenerateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function RandomBetween(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}

function GenerateRandomWindSpeed() {
    return GenerateRandomNumber(maxWindSpeed);
}

function CheckIfExceedsBounds(dandelion) {
    if(!busyMindMode) {
        const dandelionXPosOffScreen = dandelion.x - dandelion.width >= window.innerWidth;
        const dandelionYPosOffScreen = dandelion.y - (dandelion.height) * 0.5 > window.innerHeight || dandelion.y + (dandelion.height) * 0.5 < 0;
        // Two dandelion's width worth off screen, move Dandelion to left side of screen.
        if (dandelionXPosOffScreen) {
            dandelion.x = GenerateRandomNumber(maxDandelionXPosSpawn);
        }
        // One and half dandelion's height worth off screen (both top and bottom of screen),
        // And
        // move Dandelion to left side of screen.
        if (dandelionYPosOffScreen && !dandelionXPosOffScreen) {
            dandelion.x = GenerateRandomNumber(maxDandelionXPosSpawn);
        }
    } else if(busyMindMode) {
        const dandelionXPosOffScreen = dandelion.x + dandelion.width >= window.innerWidth || dandelion.x < 0;
        const dandelionYPosOffScreen = dandelion.y +dandelion.height > window.innerHeight || dandelion.y < 0;
        if(dandelionXPosOffScreen) {
            dandelion.xSpeed = -dandelion.xSpeed;
        }
        if(dandelionYPosOffScreen) {
            dandelion.ySpeed = -dandelion.ySpeed;
        }
    }

}

function Blur(_dandelion, amount) {
    _dandelion.filters = [blurFilter1];
    blurFilter1.blur = amount;
}

function Fade(_dandelion, amount) {
    _dandelion.alpha = amount;
}

const CloseGUI = (subGUI) => {
    //TODO Add fade out through CSS or JQuery
    overlay.classList.remove("show");
    overlay.classList.add("hide");
    switch(subGUI) {
        case "project":
            projectContent.classList.remove("show");
            projectContent.classList.add("hide");
            break;
        case "legend":
            legendContent.classList.remove("show");
            legendContent.classList.add("hide");
            break;
    }
}

const OpenGUI = (subGUI) => {
    //TODO Add fade in through CSS or JQuery
    overlay.classList.remove("hide");
    overlay.classList.add("show");
    switch(subGUI) {
        case "project":
            projectContent.classList.remove("hide");
            projectContent.classList.add("show");
            guiType = subGUI;
            break;
        case "legend":
            legendContent.classList.remove("hide");
            legendContent.classList.add("show");
            break;
    }
}

const CheckIfGuiOpen = () => {
    overlay.classList.forEach((className) => {
        if(className === "hide") {
            if(guiOpen) {
                guiOpen = false;
            }
        } else if(className === "show") {
            if(!guiOpen) {
                guiOpen = true;
            }
        }
    })
}

const PopulateGUI = (dandelion) => {
    title.textContent = dandelion.project.Title;
    libariesUsed.textContent = dandelion.project.LibrariesUsed;
    thumbnail.src = dandelion.project.Thumbnail;
    shortDesc.textContent = dandelion.project.ShortDesc;
    longDesc.textContent = dandelion.project.LongDesc;
}