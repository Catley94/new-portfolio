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
            name: "Svelte",
            image: "/Logos/svelte-logo.png",
        },
        {
            name: "React",
            image: "/Logos/react-logo.png",
        },
        {
            name: "NodeJS",
            image: "/Logos/node-logo.png",
        },
        {
            name: "Tailwind CSS",
            image: "/Logos/tailwindcss-logo.png",
        }
    ]

</script>

<style lang="postcss">

</style>

<div class="m-5">
    <p>
        //Description of me
    </p>
    <PrimaryHeader header="Technolgies"/>
    <div class="flex flex-wrap justify-center">
        {#each technologies as technology, i (i)}
            <img class="object-contain w-14 md:w-16 m-5 hover:drop-shadow-lg" src={technology.image} alt={technology.name + " Logo"}/>
        {/each}
    </div>
</div>