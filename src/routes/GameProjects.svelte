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
                <p>I talk to the API through a Unity / JS Bridge or API which is implemented within my own WebGL Template.
                For development, I have implemented a WebSocket Server within the Unity Project itself,
                this connects to a frontend project which talks to the API through JS, then sends messages over the websocket.</p>
                <br/>
                <p>This also has rolling credits at the end which reference all assets used.</p>
                <br/>
                <p>Future features I plan to add:
                Replace the "Interact" stone, with a wolf you can talk to, using a Dialogue system, with several branches of conversation.</p>
                <br/>
                <p>This is a continuous project which I will update over time, it's always worth a look!</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/UnitySource_Portfolio",
            image: "",
            video: "/Videos/Unity Portfolio.mp4"
        }
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
