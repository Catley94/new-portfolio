let scale = (window.innerHeight / window.innerWidth) * 0.5;

//GUI
let guiOpen = false;
const projectView = document.querySelector("#projectView");
const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", () => {
    CloseGUI();
})
const content = document.querySelector("#content");
const title = document.querySelector("#title");
const libariesUsed = document.querySelector("#librariesUsed");
const thumbnail = document.querySelector("#thumbnail");
const shortDesc = document.querySelector("#shortDesc");
const longDesc = document.querySelector("#longDesc");

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

function GenerateRandomWindSpeed() {
    return GenerateRandomNumber(maxWindSpeed);
}

function CheckIfExceedsBounds(dandelion) {
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
    projectView.classList.remove("show");
    projectView.classList.add("hide");
}

const OpenGUI = () => {
    //TODO Add fade in through CSS or JQuery
    projectView.classList.remove("hide");
    projectView.classList.add("show");
}

const CheckIfGuiOpen = () => {
    projectView.classList.forEach((className) => {
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