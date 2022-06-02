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
const maxDandelions = 3;

/*
    TODO
    Remove Global Wind Speed
    Each dandelion to have different speeds based on size (bigger is slower)
    Dandelions to spawn off screen left hand side, move right and despawn when off screen
    Dandelions also float up and down, when completely off screen, despawn
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
        for(let i = 0; i < 3; i++) {
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
    AddToContainer(dandelionContainer, _dandelion);
    AddToDandelionsArray(_dandelion);
    console.log(_dandelion.originalXPos)
}

// Add a ticker callback to scroll the text up and down
let elapsed = 0.0;


app.ticker.add((delta) => {

    if(dandelions.length < maxDandelions) {
        if(dandelionSeed) {

            // const localSprite = new PIXI.Sprite(dandelionSeed);
            // SpawnDandelion(localSprite, 50, 50);
        }

    }

    if(dandelions) {
        dandelions.forEach((dandelion) => {
            CheckDandelionSpeed(dandelion);
            CheckIfExceedsBounds(dandelion);
            MoveDandelion(dandelion);
        })
    }

});

SetupLoader();