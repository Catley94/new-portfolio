// VARIABLES
let app = SetupPixiStage();
let backgroundContainer = new PIXI.Container();
let dandelionContainer = new PIXI.Container();
let background;
let rawDandelionSeed;
let dandelionSeed;
let dandelions = [];
let preDandelionSeed = [];
const maxWindSpeed = 3;
const floatingSpeed = 0.01;


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
    Dandelions to spread themselves out when moving on screen, 5 seconds apart or so
    Dandelions to spawn off screen left hand side
    Dandelions to move right until off screen
    When completely off screen, move to left side of screen
    Dandelions also float up and down
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
        let x = 0;
        let y = 0;
        console.log("Completed!");
        SetUpBackground(background);
        preDandelionSeed.forEach((seed) => {
            console.log(seed)
            SpawnDandelion(seed, x, y);
            x += 50;
            y += 50;
        })
        // SpawnDandelion(dandelionSeed, 0, 0);

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
    AddToContainer(dandelionContainer, _dandelion);
    AddToDandelionsArray(_dandelion);
    console.log(_dandelion.originalXPos)
}

// Add a ticker callback to scroll the text up and down
let elapsed = 0.0;


app.ticker.add((delta) => {

    if(dandelions) {
        dandelions.forEach((dandelion) => {
            CheckDandelionSpeed(dandelion);
            CheckIfExceedsBounds(dandelion);
            MoveDandelion(dandelion);
        })
    }

});

SetupLoader();