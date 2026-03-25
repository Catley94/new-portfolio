<script>
    import Header from "./Header.svelte";
    import About from "./About.svelte";
    import Contact from "./Contact.svelte";
    import GameProjects from "./GameProjects.svelte";
    import FullStackSoftwareProjects from "./FullStackSoftware.svelte";
	import WorkProjects from "./WorkProjects.svelte";

    let activeFilter = 'all';

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'fullstack', label: 'FullStack / Software' },
        { key: 'games', label: 'Games' },
        { key: 'work', label: 'Work' },
    ];
</script>

<style lang="postcss">

</style>

<div>
    <Header />
    <About />
    <div class="sticky top-0 z-10 bg-white shadow-md py-3 flex justify-center gap-3 flex-wrap">
        {#each filters as filter}
            <button
                class="px-5 py-2 rounded-full font-medium transition-colors duration-200 {activeFilter === filter.key ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
                on:click={() => activeFilter = filter.key}
            >
                {filter.label}
            </button>
        {/each}
    </div>
    {#if activeFilter === 'all' || activeFilter === 'fullstack'}
        <FullStackSoftwareProjects />
    {/if}
    {#if activeFilter === 'all' || activeFilter === 'games'}
        <GameProjects />
    {/if}
    {#if activeFilter === 'all' || activeFilter === 'work'}
        <WorkProjects />
    {/if}
    <Contact />
</div>