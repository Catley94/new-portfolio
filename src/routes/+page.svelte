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

<div class="bg-gray-950 min-h-screen">
    <Header />
    <About />

    <!-- Sticky filter bar -->
    <div class="sticky top-0 z-10 border-b border-gray-800 py-4 px-6 flex justify-center gap-2 flex-wrap" style="background-color: rgba(3,7,18,0.92); backdrop-filter: blur(12px);">
        {#each filters as filter}
            <button
                class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 {activeFilter === filter.key
                    ? 'bg-indigo-600 text-white'
                    : 'border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'}"
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
