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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam egestas eros in risus pellentesque, porta consequat turpis accumsan.
        Fusce a mattis elit. Quisque vitae malesuada ipsum. Praesent non rhoncus neque.
        Donec eget eleifend mi. Suspendisse tellus risus, faucibus eu placerat a, molestie sit amet elit.
        Vestibulum ultricies velit eu ultrices mattis. Aenean sed varius diam, quis venenatis risus.
        Etiam convallis malesuada sapien.
        Nam eu laoreet elit, at tristique enim. Praesent ornare non eros sed venenatis. Vivamus rhoncus dignissim dolor at ullamcorper.
        Praesent rutrum placerat odio, vel mollis odio vulputate non. Nam facilisis et ante malesuada dignissim.
        Mauris auctor odio purus, non rhoncus odio pharetra nec.
    </p>
    <PrimaryHeader header="Technolgies"/>
    <div class="flex flex-wrap justify-center">
        {#each technologies as technology, i (i)}
            <img class="object-contain w-14 md:w-16 m-5 hover:drop-shadow-lg" src={technology.image} alt={technology.name + " Logo"}/>
        {/each}
    </div>
</div>