
/*
    TODO
    Each dandelion to have different speeds based on size (bigger is slower)
    When pressing Escape and guiOpen is true, call CloseGUI()
*/

// Initialise Functions
let app = SetupPixiStage();
AddStageToHTML();
AddContainerToStage(backgroundContainer);
AddContainerToStage(dandelionContainer);

const SetupLoader = () => {
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
            x = randomX;
            y = randomY;
        })
    })
}


const SetUpBackground = (_background) => {
    let width = window.innerWidth / _background.width;
    let height = window.innerHeight / _background.height;

    _background.scale.x = width;
    _background.scale.y = height;
    AddToContainer(backgroundContainer, _background);
}

const AddToDandelionsArray = (_image) => {
    dandelions.push(_image);
}




const SpawnDandelion = (_dandelion, xPos, yPos) => {
    //Private functions
    const _AssignProject = (item) => {
        item.project = projects[item.id];
    }


    const _CheckIfShowOffProject = () => {
        return _dandelion.project.showOff ? scale * maxDandelionSize : scale * minDandelionSize;
    }

    _dandelion.id = dandelions.length;
    _AssignProject(_dandelion);
    _dandelion.scale.x = _CheckIfShowOffProject();
    _dandelion.scale.y = _CheckIfShowOffProject();
    _dandelion.xSpeed = 0;
    _dandelion.ySpeed = 0;
    _dandelion.originalXPos = xPos;
    _dandelion.originalYPos = yPos;
    _dandelion.x = _dandelion.originalXPos;
    _dandelion.y = _dandelion.originalYPos;
    _dandelion.read = false;
    _dandelion.userHovering = false;
    _dandelion.interactive = true;



    _dandelion.on("pointerover", () => {
        _dandelion.userHovering = true;
        dandelions.forEach((dandelion) => {
            if(dandelion.id === _dandelion.id) {
                dandelionContainer.setChildIndex(dandelion, dandelionContainer.children.length - 1);
            }
        })
    })

    _dandelion.on("pointerdown", () => {
        _dandelion.read = true;
        Fade(_dandelion, 0.5);
        Blur(_dandelion, 3);
        PopulateGUI(_dandelion, "project");
        OpenGUI();
        _dandelion.userHovering = false;

    })

    _dandelion.on("pointerout", () => {
        _dandelion.userHovering = false;
    })

    //Changes cursor to hand when interactive events trigger
    _dandelion.buttonMode = true;

    AddToContainer(dandelionContainer, _dandelion);
    AddToDandelionsArray(_dandelion);
}


app.ticker.add((delta) => {
    CheckIfGuiOpen();
    if(dandelions) {
        if(contentBusyMind !== busyMindMode) {
            if(busyMindMode) {
                dandelions.forEach((dandelion) => {
                    dandelion.x = RandomBetween(0, window.innerWidth - dandelion.width);
                    dandelion.y = RandomBetween(0, window.innerHeight - dandelion.height);
                    contentBusyMind = true;
                })
            } else if(!busyMindMode) {
                dandelions.forEach((dandelion) => {
                    dandelion.x = dandelion.originalXPos;
                    dandelion.y = dandelion.originalYPos;
                    dandelion.xSpeed = 0;
                    dandelion.ySpeed = 0;
                    contentBusyMind = false;
                })
            }

        }
        dandelions.forEach((dandelion) => {
            if(!dandelion.userHovering) {
                CheckDandelionSpeed(dandelion);
                CheckIfExceedsBounds(dandelion);
                MoveDandelion(dandelion);
            }

        })
    }
    busyMind = busyMindMode;
});

SetupLoader();