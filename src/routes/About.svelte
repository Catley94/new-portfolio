<script>

    import PrimaryHeader from "./PrimaryHeading.svelte";
    import Technology from "../Models/Technology.js";

    const technologies = [
        new Technology("Blender", "/Logos/blender-icon.png"),
        new Technology("Unreal Engine", "/Logos/unreal-engine-icon.png"),
        new Technology("Unity Engine", "/Logos/unity-engine.png"),
        new Technology("C++", "/Logos/CPP.png"),
        new Technology("C#", "/Logos/csharp-logo.png"),
        new Technology(".NET", "/Logos/dotnet.png"),
        new Technology("NodeJS", "/Logos/node-logo.png"),
        new Technology("HTML", "/Logos/html-logo.png"),
        new Technology("CSS", "/Logos/css-logo.png"),
        new Technology("JavaScript", "/Logos/js-logo.png"),
        new Technology("Typescript", "/Logos/typescript-logo.png"),
        new Technology("Svelte", "/Logos/svelte-logo.png"),
        new Technology("React", "/Logos/react-logo.png"),
        new Technology("Vue", "/Logos/vue-logo.png"),
        new Technology("Tailwind CSS", "/Logos/tailwindcss-logo.png"),
        new Technology("Ionic", "/Logos/ionic-logo.png"),
        new Technology("P5.js", "/Logos/p5-logo.png"),
    ]

</script>

<style lang="postcss">

</style>

<div class="m-5">
    <p>Hi, I'm Sam.</p>
    <br />
    <p>
        As a versatile Full Stack/Software Developer with over 4 years of experience, 
        I am constantly working on improving my skills by dedicating countless evening hours to honing my craft. 
    </p>
    <br />
    <p>
        While my primary focus has been on mobile casual, WebGL games and similar, 
        I am confident in my ability to adapt and create any type of application you desire across multiple platforms. 
    </p>
    <p>
        My passion lies in prototyping, exploring new technologies, debugging, 
        and continuously expanding my knowledge in both Full Stack Development and Game Development.
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

    <p class="font-semibold">For more reviews / recommendations, check out my <a class="text-blue-500 underline" href="https://www.linkedin.com/in/samuelcatley/" target="_blank">LinkedIn Profile</a> and scroll down to "Recommendations".</p>
    <PrimaryHeader header="Technolgies"/>
    <div class="flex flex-wrap justify-center">
        {#each technologies as technology, i (i)}
            <img class="object-contain w-14 md:w-16 m-5 hover:drop-shadow-lg" src={technology.image} alt={technology.name + " Logo"}/>
        {/each}
    </div>
</div>