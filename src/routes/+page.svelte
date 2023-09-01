<script>
    import Header from "./Header.svelte";
    import Project from "./Project.svelte";
    import About from "./About.svelte";
    import Contact from "./Contact.svelte";

    const projects = [
        {
            name: "test",
            catchLine: "TestLine",
            description: "Yes!",
            googlePlayLink: "",
            githubLink: "https://github.com/catley94"
        },
        {
            name: "test2",
            catchLine: "TestLine2",
            description: "Yes!2",
            googlePlayLink: "",
            githubLink: ""
        }
    ]

</script>

<style lang="postcss">

</style>

<div>
    <Header />
    <About />
    {#each projects as project, i (i)}
        <Project {...project} />
    {/each}
    <Contact />
</div>