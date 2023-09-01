<script>
    export let name;
    export let catchLine;
    export let description;
    export let googlePlayLink; //Replace with google play icon
    export let githubLink; //Replace with GitHub icon
</script>

<style lang="postcss">
    .project {

    }
</style>

<div class="project drop-shadow-lg m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
        <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/building.jpg" alt="Modern building architecture">
        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-blue-500 font-semibold">{name}</div>
                <p class="block mt-1 text-lg leading-tight font-medium text-black">{catchLine}</p>
            <div class="grid gap-4 grid-cols-2 grid-rows-1">
                {#if googlePlayLink}
                    <button class="rounded-full bg-slate-400">Google Play</button>
                {/if}
                {#if githubLink}
                    <button class="rounded-full bg-slate-900 text-white font-bold">GitHub</button>
                {/if}
                </div>
            <p class="mt-2 text-slate-500">{description}</p>
        </div>
    </div>
</div>