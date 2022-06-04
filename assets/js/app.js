const projects = [
    {
        title: "Inverted Wings",
        shortDesc: "Music Visualiser",
        thumbnail: "",
        librariesUsed: "P5.JS",
        longDesc: "Inverted Wings use lines grounded on a pulsing circle. Bass circles will omit once volume exceeds certain amount. Made with P5.js.",
        showOff: true,
        demo: "https://codepen.io/Catley94/full/JjoyLPQ",
        github: "https://github.com/Catley94/musicVisualizer"
    },
    {
        title: "Text adventure template",
        shortDesc: "Template for creating text adventure games",
        thumbnail: "",
        librariesUsed: "",
        longDesc: "Text adventure template is exactly that, a template that allows others to edit and create their own two option text adventure game. This was originally created for covid lockdown for creativity, it's made for simplicity, everything is dynamic, all you need to do is add the state onto the storyBook object and the rest will happen like magic!",
        showOff: false,
        demo: "",
        github: "https://github.com/Catley94/text-adventure-game-template"
    },
    {
        title: "AskSam",
        shortDesc: "Ask a random question and get an answer!",
        thumbnail: "",
        librariesUsed: "NodeJS, Express, MongoDB, CookieParser, Vue",
        longDesc: `
            This is a private repo, in order to view the code, you must ask for permission by contacting me. <br/><br/>
            AskSam is an SPA built with Vue (and Axios) on the Frontend and NodeJS on the backend.
            The purpose is for anyone to submit a question on the front facing SPA (the user can submit as many questions as they like in one session or multiple), which will both create a cookie on the user's browser with the questionID (so it is able to keep track if the question has been answered) and submits the question to the database (MongoDB). There is also another SPA for 'internal' or 'staff' use, on this SPA it will display all the unanswered questions in a list, the 'staff' member can click on any unanswered question (sorted from oldest at the top, newest at the bottom) and answer it, once answered it will update the database to mark this question as answered. When the user visits the website, it will check the database with the questionID in their cookie, if the question has been answered, it will update their page with the question as 'Answered', they then may click and view the answer given.
            `,
        showOff: true,
        demo: "",
        github: ""
    },
    {
        title: "Spirit Animals",
        shortDesc: "MMORPG",
        thumbnail: "",
        librariesUsed: "Unity, Mirror (Unity Networking Tool), C#, Blender",
        longDesc: `
            This is a private repo, in order to view the code, you must ask for permission by contacting me. <br/><br/>
            Spirit Animals is an MMORPG which I am currently creating, built in Unity, this game has been built from the ground up, this includes, planning out a brief overview of the game, objective and story line, using best practises whilst keeping in mind to prevent circle of dependencies, implementing movement of the character, including animation for evolution, inventory system, drop and pick up item system, system settings, stats for characters, attacking, talking with NPCs, Questing and much more!
        `,
        showOff: true,
        demo: "",
        github: ""
    },
    {
        title: "Various work games",
        shortDesc: "Brief summary of games I have created during work, though cannot disclose code or pictures.",
        thumbnail: "",
        librariesUsed: "CreateJS, Unity, PaperJS, Vanilla JavaScript, Speechelo",
        longDesc: `
            <em>Because of copyright, I am unable to provide pictures or code for these games, but wanted to write a brief list on the variety of games I have created and proud of.</em> <br/><br/>
            <ul class="smallText">
                <li>Fireworks: This game has three fireworks that shoot up from the bottom of window.innerHeight, they are all affected by 'gravity' with a constant pull to the floor, and are spawned with random speed values, so they all finish their path at different points on the screen. Once the firework has reached the end of its path, it will explode and create coloured particles (the colour is picked at random, at spawn of firework), with a random number between a min/max value, and there is a small chance that it will spawn a multicoloured firework. The spread of the particles once they are spawned is also random, giving the image of 'big' and 'small' fireworks.</li><br/>
                <li>Puzzle: This game uses its own shape for the puzzle pieces using a custom path, depending on whether it is an edge piece or not, it will appropriately give a flat side to either one or two sides (depending if edge or corner piece). Once the grid has been made up, we overlay an image which is cut up accordingly to the puzzle piece. When the puzzle piece is interacted with (hovered over), the puzzle piece will move to it's place on the grid, and the next available puzzle pieces will be spawned in (note that the puzzle pieces will only spawn in if they are the next available pieces), once the puzzle is complete, the puzzle fades out and the original image fades in.</li><br/>
                <li>Quiz: A quiz game with a pool of questions, this randomly selects questions and populates the quiz whilst playing, when choosing a potential answer, it uses an external library which specialises in text to voice (Speechelo).</li><br/>
                <li>Football: Simple game made within Unity, making use of invisible borders (so the football cannot move outside of the pitch), a fixed camera of the pitch, the mouse controls a 'pointer' in game which them interacts with the ball, affected by gravity as it has a rigidbody and a collider. Two goals either side of the pitch which both have collission triggers attached and triggers a sound and an image to appear when a goal has been made. UI Scoreboard updates when goals are made and sounds play when the ball is hit and when the player can start playing the game (starting whitle).</li><br/>
                <li>And more!</li><br/>
            </ul>
        `,
        showOff: true,
        demo: "",
        github: ""
    },
    {
        title: "Exercise Trainer App",
        shortDesc: "App that allows you to create timed unlimited exercises within a 'Set'",
        thumbnail: "",
        librariesUsed: "Ionic, Android Studio",
        longDesc: `
            <p>
                The idea of creating this app was born from starting to run in my personal time, I needed an app which allowed me to do timed intervals of walking, running and sprinting. I found an incredible app on Google Play which allowed me to do this, however was hugely limited as I was only able to add a certain number of exercises per set before I had to pay for their subscription.
                I felt this was a complete ripoff, so used this opportunity to start creating my own App.<br/>
                With this app, you can create as many sets (which include as many exercises as you want within each set) as you like, you have the option of counting in either seconds or minutes (for the ease of saying 10 seconds vs 60 seconds) and when you start the countdown, gives a nice big timer with text to say how long you have left of this exercise, what exercise you are currently doing, what set you are currently on, and what is the total time left of all the set and exercises.<br/>
                Though this app was inteded for exercise, you could use this in multiple situations, as it is quite simply, an advanced timer application. <br/>
                Through personal use, I have found improvements that need to be made, such as adding a sound when the exercise changes (in this example, I was running and didn't notice visually that the exercise had changed to walk, and vice versa, without keeping a hawk eye on the app at all times), therefore this app is still a work-in-progress however is at the point of being Version 1.
I do have a standalone .apk which I have made within Android Studio (using the ionic API capacitor), so can pass this on through email or shared link, it is my hope in the near future I may publish this on Google Play so others can enjoy the benefit this app can bring. <br/>
            </p>
        `,
        showOff: true,
        demo: "",
        github: "https://github.com/Catley94/Exercise_Trainer_App"
    },
    {
        title: "Flex Panels",
        shortDesc: "Panels that open when clicked",
        thumbnail: "",
        librariesUsed: "JavaScript",
        longDesc: `
            <p>
                 This project I did when doing the JavaScript30 challenge with WesBos, he shows you how to create 5 'panels' that 'flex' when clicked, using bezier curves making the panels expand out and then retract before settling. By default it displays "Let's take it all in", but when clicking on individual panels it displays messages specific to the panel.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/Flex-Panels/",
        github: "https://github.com/Catley94/Flex-Panels"
    },
    {
        title: "Jumper",
        shortDesc: "Inspriation of Impossible game",
        thumbnail: "",
        librariesUsed: "PhaserJS",
        longDesc: `
            <p>
                This game has been buit with the impossible game in mind, however this is still in progress.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/Jumper/",
        github: "https://github.com/Catley94/Jumper"
    },
    {
        title: "Particles",
        shortDesc: "Particles on canvas",
        thumbnail: "img/Particles.png",
        librariesUsed: "JavaScript",
        longDesc: `
            <p>
                Particles moving in random directions with a variation of 3 colours, when hovered over, a radius around the mouse will 'grow', when they leave the radius they shrink back to their original size.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/particles/",
        github: "https://github.com/Catley94/particles"
    },
    {
        title: "JavaScript Drum Kit",
        shortDesc: "Make music by just by pressing keys",
        thumbnail: "img/drumkit.png",
        librariesUsed: "JavaScript",
        longDesc: `
            <p>
                Drumkit made with JS, 9 keys that trigger sounds when pressed and a border around it indicating which key was pressed.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/JavaScript-Drum-Kit/",
        github: "https://github.com/Catley94/JavaScript-Drum-Kit"
    },
    {
        title: "Simple Budget App",
        shortDesc: "Takes a budget amount and takes multiple expenses.",
        thumbnail: "img/budget.png",
        librariesUsed: "JavaScript",
        longDesc: `
            <p>
                Takes a budget amount, takes multiple expenses, minuses from the budget amount to get what is left over. Can also edit existing list of expenses by changing values or deleting.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/BudgetProject/",
        github: "https://github.com/Catley94/BudgetProject"
    },
    {
        title: "JavaScript Clock",
        shortDesc: "Clock made with JS",
        thumbnail: "img/clock.png",
        librariesUsed: "JavaScript",
        longDesc: `
            <p>
                Clock made with JS, still improving. Could be a nice home page for your browser.
            </p>
        `,
        showOff: false,
        demo: "https://catley94.github.io/JavaScript-Clock/",
        github: "https://github.com/Catley94/JavaScript-Clock"
    },
    {
        title: "Tranquillity Linux",
        shortDesc: "Arch based distro",
        thumbnail: "img/tranquillity.png",
        librariesUsed: "archiso - mkarchiso",
        longDesc: `
            <p>
This distro has been made purely from a learning point of view, where I can make my own arch based distro, custom software, install it easily, with different desktop environments and in the mean time learn how this is done. I will continue to update this iso and consider making a dedicated web page for it to explain it's meaning. Made with Archiso - mkarchiso.             </p>
        `,
        showOff: true,
        demo: "",
        github: ""
    }
]

const maxDandelions = projects.length;

/*
    TODO
    Each dandelion to have different speeds based on size (bigger is slower)
    Add Github Links
    Add Codepen Links
    Add space to thumbnails
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
            x = randomX;
            y = randomY;
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
    //Private functions
    function _AssignProject(item) {
        item.project = projects[item.id];
    }


    function _CheckIfShowOffProject() {
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