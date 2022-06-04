// PIXI
let app = SetupPixiStage();
let backgroundContainer = new PIXI.Container();
let dandelionContainer = new PIXI.Container();
const blurFilter1 = new PIXI.filters.BlurFilter();
// ________________________
let background;

let guiOpen = false;

let dandelionSeed;
let dandelions = [];
let preDandelionSeed = [];
const minDandelionSize = 0.25;
const maxDandelionSize = 0.35;
const maxDandelionXPosSpawn = -500;
const maxDandelionYPosSpawn = window.innerHeight;
const maxDandelions = projects.length;

const maxWindSpeed = 3;
const floatingSpeed = 0.01;

let contentBusyMind = false;
let busyMindMode = false;



// DEMO AND GITHUB BUTTONS

function ShowGithubButton() {
    githubButton.classList.remove("hide");
    githubButton.classList.add("show");
}

function ShowDemoButton() {
    demoButton.classList.remove("hide");
    demoButton.classList.add("show");
}

function HideGithubButton() {
    githubButton.classList.remove("show");
    githubButton.classList.add("hide")
}

function HideDemoButton() {
    demoButton.classList.remove("show");
    demoButton.classList.add("hide")
}


//RESIZE
let ratio, windowRatio;
const w = window.innerWidth, h = window.innerHeight;
scale = w / 1024;

function SetupPixiStage() {
    return new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
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



const CloseGUI = () => {
    //TODO Add fade out through CSS or JQuery
    overlay.classList.remove("show");
    overlay.classList.add("hide");
    HideDemoButton();
    HideGithubButton();
}

const OpenGUI = () => {
    //TODO Add fade in through CSS or JQuery
    overlay.classList.remove("hide");
    overlay.classList.add("show");
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



const PopulateGUI = (_object, type) => {
    switch(type) {
        case "project":
            // thumbnail.classList.remove("hide");
            // thumbnail.classList.add("show");
            title.textContent = _object.project.title;
            libariesUsed.textContent = _object.project.librariesUsed;
            thumbnail.src = _object.project.thumbnail;
            shortDesc.textContent = _object.project.shortDesc;
            longDesc.innerHTML = _object.project.longDesc;
            if(_object.project.demo) {
                demoButton.href = _object.project.demo;
                ShowDemoButton();
            } else {
                if(!demoButton.classList.contains("hide")) {
                    HideDemoButton();
                }
            }
            if(_object.project.demo) {
                githubButton.href = _object.project.github;
                ShowGithubButton();
            } else {
                if(!githubButton.classList.contains("hide")) {
                    HideGithubButton();
                }
            }
            demoButton
            break;
        case "legend":
            // thumbnail.classList.remove("hide");
            // thumbnail.classList.add("show");
            title.innerHTML = `<span class="legend">${_object.title}</span>`;
            libariesUsed.textContent = "";
            thumbnail.src = _object.thumbnail;
            shortDesc.textContent = "";
            longDesc.innerHTML = `<span class="legend">${_object.longDesc}</span>`;
            break;
        case "about":
            title.innerHTML = `${_object.title}`;
            libariesUsed.textContent = "";
            thumbnail.src = _object.thumbnail;
            // thumbnail.classList.remove("show");
            // thumbnail.classList.add("hide");
            shortDesc.textContent = "";
            longDesc.innerHTML = `${_object.longDesc}`;
            break;
    }

}