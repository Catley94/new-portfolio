// VARIABLES
let app = SetupPixiStage();
let backgroundContainer = new PIXI.Container();
let dandelionContainer = new PIXI.Container();
let background;
let dandelionSeed;
let dandelions = [];
let preDandelionSeed = [];
const maxWindSpeed = 3;
const floatingSpeed = 0.01;
const maxDandelionXPosSpawn = -500;
const maxDandelionYPosSpawn = window.innerHeight;


const projects = [
    {
        Title: "Inverted Wings",
        ShortDesc: "Music Visualiser",
        Thumbnail: "",
        LibrariesUsed: "P5.JS",
        LongDesc: "Inverted Wings use lines grounded on a pulsing circle. Bass circles will omit once volume exceeds certain amount. Made with P5.js."
    },
    {
        Title: "Text adventure template",
        ShortDesc: "Template for creating text adventure games",
        Thumbnail: "",
        LibrariesUsed: "P5.JS",
        LongDesc: "Text adventure template is exactly that, a template that allows others to edit and create their own two option text adventure game. This was originally created for covid lockdown for creativity, it's made for simplicity, everything is dynamic, all you need to do is add the state onto the storyBook object and the rest will happen like magic!"
    }
]

const maxDandelions = projects.length;

/*
    TODO
    Each dandelion to have different speeds based on size (bigger is slower)
    When completely off screen, move to left side of screen
    Dandelions also float up and down
    Create GUI for displaying projects
    Stop dandelion when hovering over and display GUI
*/

// Initialise Functions
AddStageToHTML();
AddContainerToStage(backgroundContainer);
AddContainerToStage(dandelionContainer);

function SetupLoader() {
    const loader = new PIXI.Loader();
    loader.add('backgroundImage', 'img/colton-sturgeon-6KkYYqTEDwQ-unsplash.jpg');
    loader.add('dandelionSeed', 'img/dandelionSeed.png');
    loader.load((loader, resources) => {
        background = new PIXI.Sprite(resources.backgroundImage.texture);
        for(let i = 0; i < maxDandelions; i++) {
            const localDandelionSeed = new PIXI.Sprite(resources.dandelionSeed.texture);
            preDandelionSeed.push(localDandelionSeed);
        }
    })

    loader.onComplete.add(() => {
        let x = -200;
        let y = 0;
        SetUpBackground(background);
        preDandelionSeed.forEach((seed) => {
            setInterval(() => {

            }, 500)
            SpawnDandelion(seed, x, y);
            const randomX = GenerateRandomNumber(maxDandelionXPosSpawn);
            const randomY = GenerateRandomNumber(maxDandelionYPosSpawn - seed.height);
            x += randomX;
            y += randomY;
        })
    })
}


function SetUpBackground(_background) {
    let width = window.innerWidth / _background.width;
    let height = window.innerHeight / _background.height;

    _background.scale.x = width;
    _background.scale.y = height;
    AddToContainer(backgroundContainer, _background);
}

function AddToDandelionsArray(_image) {
    dandelions.push(_image);
}

function SpawnDandelion(_dandelion, xPos, yPos) {
    _dandelion.scale.x = scale;
    _dandelion.scale.y = scale;
    _dandelion.xSpeed = 0;
    _dandelion.ySpeed = 0;
    _dandelion.originalXPos = xPos;
    _dandelion.originalYPos = yPos;
    _dandelion.x = _dandelion.originalXPos;
    _dandelion.y = _dandelion.originalYPos;
    _dandelion.userHovering = false;
    _dandelion.interactive = true;
    _dandelion.on("pointerover", () => {
        _dandelion.userHovering = true;
        //TODO Add filter colour when read, so user knows they have already read this project
        //TODO Add GUI to appear when hovering
    })
    _dandelion.on("pointerout", () => {_dandelion.userHovering = false;})
    _dandelion.buttonMode = true;
    AddToContainer(dandelionContainer, _dandelion);
    AddToDandelionsArray(_dandelion);
}

function CheckIfExceedsBounds(dandelion) {
    // Two dandelion's width worth off screen, move Dandelion to left side of screen.
    if (dandelion.x - dandelion.width >= window.innerWidth) {
        // TODO Move dandelion to left side of screen;
        dandelion.x = GenerateRandomNumber(maxDandelionXPosSpawn);
        console.log("Resetting XPOS")
    }
    if (dandelion.y + dandelion.height >= window.innerHeight || dandelion.y < 0 && dandelion.x + dandelion.with >= window.innerWidth) {
        // TODO Move dandelion to left side of screen;
    }
}

app.ticker.add((delta) => {

    if(dandelions) {
        dandelions.forEach((dandelion) => {
            CheckDandelionSpeed(dandelion);
            CheckIfExceedsBounds(dandelion);
            !dandelion.userHovering ? MoveDandelion(dandelion) : null;
        })
    }

});

SetupLoader();