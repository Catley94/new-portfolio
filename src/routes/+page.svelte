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
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'games', label: 'Games' },
        { key: 'work', label: 'Work' },
    ];
</script>

<div class="min-h-screen bg-zen-bg">
    <Header />
    <About />

    <!-- Sticky filter bar -->
    <div class="sticky top-0 z-10 border-b border-zen-border py-4 px-6 flex justify-center gap-2 flex-wrap" style="background-color: rgba(244,244,239,0.92); backdrop-filter: blur(16px);">
        {#each filters as filter}
            <button
                class="px-5 py-2 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 {activeFilter === filter.key
                    ? 'bg-zen-accent text-white border border-zen-accent'
                    : 'border border-zen-border text-zen-muted hover:border-zen-accent hover:text-zen-accent'}"
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
