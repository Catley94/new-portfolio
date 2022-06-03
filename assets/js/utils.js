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
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", () => {
    CloseGUI();
})
const content = document.querySelector("#content");
const title = document.querySelector("#title");
const libariesUsed = document.querySelector("#librariesUsed");
let thumbnail = document.querySelector("#thumbnail");
const shortDesc = document.querySelector("#shortDesc");
const longDesc = document.querySelector("#longDesc");


//SYMBOL BUTTON
const legendButton = document.querySelector("#legend");
legendButton.addEventListener("click", () => {
    PopulateGUI(
        {
            title: "Symbols",
            thumbnail: "img/dandelionSeed.png",
            longDesc: "Look out for the Dandelion Seed, click them to see different projects."
        },
        "legend"
    )
    OpenGUI();
})

//ABOUT BUTTON
const aboutButton = document.querySelector("#aboutMe");
aboutButton.addEventListener("click", () => {
    PopulateGUI(
        {
            title: "Short and Sweet",
            thumbnail: "",
            longDesc: `
                <div id="about">
                    <p>
                    <p class="heading">Welcome, to my portfolio!<br/><br/></p>
    
                    I hope you are well at this current time.<br/><br/>
    
                    I am a frontend / backend / games developer with a passion for learning, improving oneself and a Linux enthusiast.<br/><br/>
    
                    <em><u>Because I am a huge fan of mindfulness and meditation, my portfolio is themed around this, though I encourage everyone to practise meditation and mindfulness, I appreciate you may not have the time to take to see my portfolio in this light, therefore I have added a "Short on time?" mode, please feel free to use it. I hope you like the uniqueness.</u></em>
                  </p>
                  <p class="heading">What technologies have I worked with (To name a few...)?</p>
                  <p>
                    <ul>
                      Frontend:
                      <li>  React, Vue, Typescript, Bootstrap, P5, Ionic and more!</li>
    
                      Backend:
                      <li>  NodeJS, Electron, Express, C#, SQL, MongoDB and Arduino.</li>
    
                      Games:
                      <li>Phaser, CreateJS, PixiJS and Unity.</li>
    
                </ul>
                  </p>
                  <p class="heading">A bit about me</p>
                  <p>
                    First and foremost is I am eager to learn as much as I can, self improvement in both a personal and work sense highly appeals to me.
                    My IT experience compliments my development career as it gives me a very rounded view on how technology works as a whole, allowing me to think outside the box.
    
                    I very much enjoy structure mixed with creativity, this is perfect within development as it allows me to come up with unique results and ideas.
    
                    In my spare time, I'm creating my own MMORPG game using Unity as the game engine, this has taught me a lot and the knowledge I have gained I am currently using within a work environment, it has excelled my learning experience because of my eargerness and urge to continously improve myself.
    
                    I also implement programming electronic solutions with a Raspberry Pi and Arduinos, my latest project is a replicating remote control.
    
                    Last thing you'll need to know about me, is I have a passion for Linux (Though will use all other OS's), this was born out of the years of Windows Updates randomly turning off my computer, and uninvited BSODs through the years.
    
                    I have found Linux to be not only reliable, but powerful for a power user, it's sped up so much of my workflow in my personal time.
    
                  </p>
                </div>
                
            `
        },
        "about"
    )
    OpenGUI();
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

const CloseGUI = () => {
    //TODO Add fade out through CSS or JQuery
    overlay.classList.remove("show");
    overlay.classList.add("hide");
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