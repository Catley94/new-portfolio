<script>
    import Project from "./Project.svelte";
    import PrimaryHeader from "./PrimaryHeading.svelte";

    const projects = [
        {
            name: "Unity Football",
            catchLine: "First Unity Prototype Game",
            description: `
                <br/>
                This game was the first prototype at Social-Ability to use Unity and export into WebGL. <br />
                I created a custom WebGL Template that had a few functions which the backend was specifically looking for, 
                then when those functions were called, I passed the parameters into the unityInstance, as per the browser interaction documentation: <a class="text-blue-500" href="https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html">Interaction with browser scripting</a><br />
                The game then took the parameters (which were coordinates of where the camera triggered movement), converted those coordinates into 3D Vector, 
                which the game then responded to by using a sphere as the user interaction and using colliders to push the ball around into the goal.<br />
                The goal posts also had trigger colliders attached, so when the ball went into the goal, it would fade in a sprite of "GOAL!" and fade out shortly after, and also incresed the score of the player.
                <br />
                <br />
                Unforutately this game was left unfinished before I moved on, however I can happily say since introducing Unity to the development process, the company is still using this game engine.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/unity_football.mp4",
            id: "unity_football"
        },
        {
            name: "Fireworks",
            catchLine: "A beautifully tranquil game.",
            description: `
                This game is built in CreateJS, the beauty lies in it's mathematics, 
                where it will only spawn a max of 3 firworks at a time,
                however spawns at random intervals and travels at random speeds. <br />
                It's quite a sight to see the fireworks all spawn at different times, with different speeds, 
                and then all to line up and fire together. <br />
                Alternatively, you can use the mouse, or as intended, hands over a projected image,
                picked up by the camera and sent coordinates to the game, to prematurely fire the fireworks. 

                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/fireworks.mp4",
            id: "fireworks"
        },
        {
            name: "Build a Snowman",
            catchLine: "A creative way to build a snowman.",
            description: `
                This snowman game was built in order to easily build a snowman. 
                It is split into 3 anchor points, head, middle and bottom.<br />
                When a coordinate is overlapping an image, 
                the image will be pushed in the direction opposite to where the collision happened, 
                giving the impression the player is pushing the item.<br />
                When the item overlaps with the correct snowman's body part,
                it will snap to the body part, and in order to place the item correctly, 
                I needed to change it's anchor point, which required some tweaking along the way.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/snowman.mp4",
            id: "snowman"
        },
        {
            name: "Holi Colours",
            catchLine: "A very colourful way to fill up your screen.",
            description: `
                This game was quite simple, but a lot of fun to create.
                When coordinates collide with the balloons, 
                the balloon will scale down to 0 and spawn a paint splat according to the colour of the balloon,
                it will randomly choose it's rotation.
                This game is great to start social interaction between those living with dementia, 
                as it's a very reactive game with vivid colours.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/holi_colours.mp4",
            id: "holi_colours"
        },
        {
            name: "Jigsaw",
            catchLine: "A simple Jigsaw puzzle game.",
            description: `
                A very easy game to play, make with PaperJS, as the coordinates collide with the jisaw puzzle pieces on the left,
                it will automatically go to it's position. When all the pieces are on the board, 
                the puzzle will fade out and fade in the image.
                The puzzle pieces that appear on the left hand side are chosen specifically based on the index of the pieces which are already locked,
                that way the pieces that are on the left will always be able to be placed.
                When a piece is touched, the piece will find it's correct index position, 
                and visually it will find it's neighbour then work out where it needs to be on the screen based on the image and neighbour's image width.  
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/jigsaw.mp4",
            id: "jigsaw"
        },
        {
            name: "Quiz",
            catchLine: "A general knowledge quiz.",
            description: `
                Using the remote for the Magic Table or arrows on the keyboard, 
                you can select an answer and use OK (Remote) or Enter (keyboard) to select the answer.
                When a new screen is showing, a voice API is used to read out the text to the player,
                as well as when an answer is highlighted, it will read out that text also.
                <br />
                <br />
                At the end of the game, it will display how many the player got correct by highlighting the answer green.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/quiz.mp4",
            id: "quiz"
        },
        {
            name: "Rugby Scrum",
            catchLine: "A game based on 6 nations.",
            description: `
                This was a game based upon the time the 6 nations were on. 
                It was designed for those in a carehome to engage in conversation,
                and to have slight competition between each other. 
                <br />
                It works by two areas with collision on, when the coordinates overlap, it will push the scrum in the relevant direction.
                When the scrum reaches a threshold, that player wins, so there's a lot of back and forth between the players.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/rugby.mp4",
            id: "rugby"
        },
        {
            name: "Rose Petals",
            catchLine: "A valentine themed game.",
            description: `
                This is actually a reskin of an existing game, 
                published in our valentine themed games.
                As a coordinate overlaps with a rose petal, 
                the rose petal will move in the direction opposite to the trigger,
                giving the impression the player is pushing the petals.
                If a player rubs their hand over a heart, after 3 triggers on the heart, 
                it will fade out quickly and spawn a puff of smoke in its place.
                `,
            githubLink: "",
            demoLink: "",
            image: "",
            video: "/Videos/rose_petals.mp4",
            id: "rose_petals"
        },
    ]

</script>

<style lang="postcss">

</style>

<div>
    <PrimaryHeader header="Work Projects"/>
    <div class="lg:grid gap-4 grid-cols-2 auto-rows-max justify-items-center">
        {#each projects as project, i (i)}
            <Project {...project} />
        {/each}
    </div>
</div>
