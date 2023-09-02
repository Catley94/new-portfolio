<script>
    import Project from "./Project.svelte";
    import PrimaryHeader from "./PrimaryHeader.svelte";

    const projects = [
        {
            name: "test",
            catchLine: "This is a test line to check length",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec varius lectus dui, eget laoreet felis ultrices quis.
            In semper, turpis nec venenatis imperdiet, ipsum est auctor metus, nec pretium ipsum dui vel nunc.
            Suspendisse cursus quis nibh sed rutrum. Vivamus quis ante ac turpis posuere ullamcorper in sed elit.
            Sed ullamcorper dolor quis quam sollicitudin rutrum. Proin non tortor nisl. Vivamus commodo commodo consequat.
            Integer id elit rutrum, tincidunt libero et, sollicitudin nisi. Proin dapibus diam nisi, a semper felis faucibus ac.`,
            googlePlayLink: "dsds",
            githubLink: "https://github.com/catley94",
            image: "/building.jpg"
        },
        {
            name: "test2",
            catchLine: "TestLine2",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec varius lectus dui, eget laoreet felis ultrices quis.
            In semper, turpis nec venenatis imperdiet, ipsum est auctor metus, nec pretium ipsum dui vel nunc.
            Suspendisse cursus quis nibh sed rutrum. Vivamus quis ante ac turpis posuere ullamcorper in sed elit.
            Sed ullamcorper dolor quis quam sollicitudin rutrum. Proin non tortor nisl. Vivamus commodo commodo consequat.
            Integer id elit rutrum, tincidunt libero et, sollicitudin nisi. Proin dapibus diam nisi, a semper felis faucibus ac.`,
            googlePlayLink: "",
            githubLink: "",
            image: "verne-ho-0LAJfSNa-xQ-unsplash.jpg"
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
