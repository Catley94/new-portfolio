let scale = window.innerHeight / window.innerWidth;

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
        // const windSpeed = GenerateRandomWindSpeed();
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

function GenerateRandomWindSpeed() {
    return Math.floor(Math.random() * maxWindSpeed);
}

function CheckIfExceedsBounds(dandelion) {
    if (dandelion.x + dandelion.width >= window.innerWidth || dandelion.x < 0) {
        dandelion.speed = -dandelion.speed;
    }
    if (dandelion.y + dandelion.height >= window.innerHeight || dandelion.y < 0) {
        dandelion.speed = -dandelion.speed;
    }
}
