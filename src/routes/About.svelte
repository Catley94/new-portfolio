<script>

    import PrimaryHeader from "./PrimaryHeader.svelte";

    const technologies = [
        {
            name: "Unity Engine",
            image: "",
        },
        {
            name: "JavaScript",
            image: "",
        },
        {
            name: "Svelte",
            image: "",
        },
        {
            name: "Tailwind CSS",
            image: "",
        },
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
    <div class="flex justify-center">
        {#each technologies as technology, i (i)}
            <img class="w-1/6" src={technology.image} alt={technology.name + " Logo"}/>
        {/each}
    </div>
</div>