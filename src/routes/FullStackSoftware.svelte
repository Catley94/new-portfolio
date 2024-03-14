<script>
    import Project from "./Project.svelte";
    import PrimaryHeader from "./PrimaryHeading.svelte";

    const projects = [
        {
            name: "Ask Sam",
            catchLine: "Post an anonymous question and let it be answered by the wisdom of the universe.",
            description: `
                <p>This app was actually a playground project to get familiar with Vue and a backend.</p>
                <p>It has two frontend webapps, one is accessible to the public (for posting questions),
                the other is only accessible to staff through a login page, here staff will answer all questions.</p>
                <br />
                <p>Once you have submitted a question, you may come back to this page at any time to check if it has been answered,
                if it has, it will show the answer.</p>
                <br />
                <p>The user may ask as many questions as they like.</p>
                <br />
                <p>This project uses Vue, NodeJS, Express, Express Router, MongoDB, Mongoose, Cookie Parser and Axios.</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/askSamBE",
            image: "/AskSam.png",
            video: ""
        },
        {
            name: "This portfolio",
            catchLine: "A place to showcase all of my games and apps.",
            description: `
                <p>This portfolio was created to showcase both my games and apps.</p>
                <br />
                <p>I utilised this project to learn Svelte and Tailwind CSS which has been a very successful experience.</p>
                <br />
                <p>If you would like the full experience of my portfolio, please check out my Unity Portfolio <a class="text-blue-300 underline" href="https://splendorous-scone-66aa6e.netlify.app/" target="_blank">here.</a></p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/new-portfolio/tree/svelte",
            image: "/svelte-portfolio.png",
            video: ""
        },
        {
            name: "Exercise Trainer",
            catchLine: "A visual timer, customisable sections of time and activities. What more could you want?",
            description: `
                <p>The idea for this app was spawned whilst jogging with my partner.</p>
                <p>We wanted an app where we could say plan our running journey with sections of walking and running,
                to build up endurance.</p>
                <br />
                <p>You can create as many sets as you like, containing different activities of different lengths.</p>
                <p>You may increase or decrease the time in minutes or seconds, for fine-tuning.</p>
                <br />
                <p>This app was built with React and Ionic.</p>
                <br />
                <p>This app may appear in Google Play Store in the near future.</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/Exercise_Trainer_App",
            image: "/ExerciseAppScreen_Complete.png",
            video: ""
        },
        {
            name: "Music Visualizer",
            catchLine: "A way for us to see music.",
            description: `
                <p>This was one of my first projects when I was self learning to create WebApps.</p>
                <p>I was drawn to creating a music visualiser since the days of Windows Media Player,
                 when it had an inbuilt music visualiser, back in Windows XP.</p>
                <br />
                <p>The project was built using P5.js, controlling the visual lines through the different audio bands.</p>

            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/musicVisualizer",
            image: "/musicVisualiser.png",
            video: ""
        }
    ]

</script>

<style lang="postcss">

</style>
<div>
    <PrimaryHeader header="FullStack / Software Projects"/>
    <div class="lg:grid gap-4 grid-cols-2 auto-rows-max justify-items-center">
        {#each projects as project, i (i)}
            <Project {...project} />
        {/each}
    </div>
</div>
