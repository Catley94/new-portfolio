<script>

    import PrimaryHeader from "./PrimaryHeading.svelte";

    const technologies = [
        {
            name: "Unity Engine",
            image: "/Logos/unity-engine.png",
        },
        {
            name: "C#",
            image: "/Logos/csharp-logo.png",
        },
        {
            name: "NodeJS",
            image: "/Logos/node-logo.png",
        },
        {
            name: "HTML",
            image: "/Logos/html-logo.png",
        },
        {
            name: "CSS",
            image: "/Logos/css-logo.png",
        },
        {
            name: "JavaScript",
            image: "/Logos/js-logo.png",
        },
        {
            name: "Typescript",
            image: "/Logos/typescript-logo.png",
        },
        {
            name: "Svelte",
            image: "/Logos/svelte-logo.png",
        },
        {
            name: "React",
            image: "/Logos/react-logo.png",
        },
        {
            name: "Vue",
            image: "/Logos/vue-logo.png",
        },
        {
            name: "Tailwind CSS",
            image: "/Logos/tailwindcss-logo.png",
        },
        {
            name: "Ionic",
            image: "/Logos/ionic-logo.png",
        },
        {
            name: "P5.js",
            image: "/Logos/p5-logo.png",
        }
    ]

</script>

<style lang="postcss">

</style>

<div class="m-5">
    <p>Hi, I'm Sam.</p>
    <br />
    <p>
        I am a Unity Gameplay Developer with 3+ years experience,
        that's not including the countless evening hours I spend creating my own games and improving my knowledge.
    </p>
    <br />
    <p>
        A lot of my experience thus far has been through mobile casual and WebGL games,
        however if that's not what you're looking for, don't let that put you off.
    </p>
    <p>
        I am an extremely quick learner and am confident I will be able to create any type of game you desire on multiple platforms.
        I get most of my enjoyment out of prototyping, treading new ground, trying new technologies and debugging.
    </p>
    <br />
    <PrimaryHeader header="Reviews"/>
    <p class="font-bold">Anonymous Colleague:</p>
    <div class="italic">
        <p>Sam brings new experience and solutions for intricate tasks to the table and explains them in a clear and concise manner for peer review.</p>
        <p>He takes on feedback and improves his solution accordingly.</p>
        <br />
        <p>
            He has also taken existing coding principles and implementations and made them his own,
            a great example of this is the Queue system within an existing in house framework.
            This hated coding approach has single handedly turned into a well loved feature of the framework.</p>
        <br />
        <p>
            He is always open minded about solutions and new concepts and challenges old code bases to see if he can improve them and
            has shown time and time again that this is not just talk and can back up what he says with clean and elegant code solutions.</p>
        <br />
        <p>He is a great team member to have on any team.</p>
    </div>
    <br />
    <p>For more reviews / recommendations, check out my <a class="text-blue-500 underline" href="https://www.linkedin.com/in/samuelcatley/" target="_blank">LinkedIn Profile</a> and scroll down to "Recommendations".</p>
    <PrimaryHeader header="Technolgies"/>
    <div class="flex flex-wrap justify-center">
        {#each technologies as technology, i (i)}
            <img class="object-contain w-14 md:w-16 m-5 hover:drop-shadow-lg" src={technology.image} alt={technology.name + " Logo"}/>
        {/each}
    </div>
</div>