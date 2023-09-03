<script>
    import Project from "./Project.svelte";
    import PrimaryHeader from "./PrimaryHeading.svelte";

    const projects = [
        {
            name: "Affirmation Game",
            catchLine: "Calming the mind.",
            description: `
                <p class="italic">Game will be released on Google Play shortly, waiting for developer account to be verified.</p>
                <br/>
                This affirmation game will slow down your busy mind.
                It will start with circles spawning faster and slowing down over time, alongside this,
                there are affirmations showing at the top of the game,
                these messages will be absorbed by your subconscious to start with, as the circles slow down,
                your attention will be more focused on the affirmations.
                Over time, the affirmations will instill positive thought behaviour, allowing you to be calmer,
                plus think more clearly in many situations.
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/UnitySource_AffirmationGame",
            image: "",
            video: "/Videos/Affirmation Game.mp4"
        },
        {
            name: "Unity Portfolio",
            catchLine: "Original Portfolio using as a showcase for my work.",
            description: `
                <p>This project was originally the portfolio that you're looking at.
                I created it to showcase my work and also as a playground to test new ideas for future games.</p>
                <br/>
                <p>Standout features: Changes the weather by inputting nearest city to you, and gets a weather report,
                then applies it within the game, supported weathers: Sunny, Rainy, Cloudy, Overcast and Thunderstorm.</p>
                <br/>
                <p>I talk to the API through a Unity / JS Bridge or API which is implemented within my own WebGL Template.</p>
                <p>For development, I have implemented a WebSocket Server within the Unity Project itself,
                this connects to a frontend project which talks to the API through JS, then sends messages over the websocket.</p>
                <br/>
                <p>This also has rolling credits at the end which reference all assets used.</p>
                <br/>
                <p>Future features I plan to add:</p>
                <p>Replace the "Interact" stone, with a wolf you can talk to, using a Dialogue system, with several branches of conversation.</p>
                <p>... and more.</p>
                <br/>
                <p>This is a continuous project which I will update over time, it's always worth a look!</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/UnitySource_Portfolio",
            image: "",
            video: "/Videos/Unity Portfolio.mp4"
        },
        {
            name: "Baby Visual Stimulation",
            catchLine: "To provide visual stimulation to newborns and infants.",
            description: `
                <p>As a new father, I've found my child has needed more visual stimulation as they get older to prevent getting bored.</p>
                <br/>
                <p>Thus I bought myself a project and created a Unity Project which currently has two modes:
                Black Particles and White Particles.</p>
                <br/>
                <p>Both have been successful, I now plan to add a few more modes,
                such as a bouncing ball with high bounciness, and another which has more randomness involved.</p>
                <br/>
                <p>I also plan to make a menu system, so I can navigate between the different scenes easily.</p>
                <br/>
                <p>This is a continuous project which I will update over time, feel free to use!</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/UnitySource_BabyVisualStimulation",
            image: "",
            video: "/Videos/BabyVisualStimulation.mp4"
        },
        {
            name: "Chakra Idle",
            catchLine: "Idle game themed around Chakras.",
            description: `
                <p>This idle game is themed around Chakras,
                particles start spawning in the colour of the chakras, first is red (root/base),
                 second orange (sacral) and so on.</p>
                <br />
                <p>The objective is to defeat the blocks on the level, which represent the blockages in the chakras.
                Once the chakra level has been cleared, it will move on to the meridian level where particles will
                spawn to clear all blockages in the meridian line. Once complete, it will move back to the chakra level
                and unlock the next level of particles.</p>
                <br />
                <p>The main objective of this game is not the idle game, but actually the visual enjoyment of watching
                the particles on screen randomly move around, this can get extremely nice to watch with more colours.</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/UnitySource_IdleEnergy",
            image: "",
            video: "/Videos/Chakra Idle.mp4"
        },
        {
            name: "Ball Launcher",
            catchLine: "Physics game for knocking over obstacles.",
            description: `
                <p>This game I created in mind to replicate an existing popular game out there.
                However after creating it, I have decided to turn it into a 3D game, so there will be changes
                in the near future.</p>
                <br />
            `,
            googlePlayLink: "",
            githubLink: "",
            image: "",
            video: "/Videos/Ball Launcher.mp4"
        },
        {
            name: "Rise of the Bugs",
            catchLine: "Fun game and learning platform for coding.",
            description: `
                <p>This idea was spawned in one of my university courses. The objective of the game is to complete
                 the levels by defeating or avoiding the bugs.</p>
                <br />
                <p>You are a developer working their way through the level and bugs will attempt to defeat you, the bugs
                represent code that has created a problem and physically manifested into real life, it is your
                responsibility to create fixes to cure these bugs.</p>
                <br />
                <p>There are three levels of fixes, "Patch", "Fix", "Improvement", you made these within your
                 developer environment using your IDE workbench. The fixes are also converted into a physical item
                  which you throw at the bugs.</p>
                <br />
                <p>Each time you create a fix, you will be taught a programming lesson then asked a question based on the lesson.
                Depending on whether you answered correctly will depend on the efficiency of the fix you have created.
                If efficiency is lower than 50%, there is a high chance that the fix will spawn in another bug,
                rather than fix the current one.</p>
            `,
            googlePlayLink: "",
            githubLink: "",
            image: "",
            video: "/Videos/Rise of the Bugs.mp4"
        },
    ]

</script>

<style lang="postcss">

</style>

<div>
    <PrimaryHeader header="Game Projects"/>
    <div class="lg:grid gap-4 grid-cols-2 auto-rows-max justify-items-center">
        {#each projects as project, i (i)}
            <Project {...project} />
        {/each}
    </div>
</div>
