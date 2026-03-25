<script>
    export let name;
    export let catchLine;
    export let description;
    export let googlePlayLink;
    export let githubLink;
    export let demoLink;
    export let image;
    export let video;
    export let id;
</script>

<div
    id={id}
    class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1 flex flex-col"
    style="box-shadow: 0 0 0 0 transparent; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;"
    onmouseenter="this.style.boxShadow='0 0 30px -5px rgba(99,102,241,0.3)'"
    onmouseleave="this.style.boxShadow='0 0 0 0 transparent'"
>
    <!-- Media -->
    <div class="shrink-0">
        {#if video}
            <video class="h-52 w-full object-cover" src={video} loop autoplay muted>
                <track kind="captions" />
            </video>
        {:else}
            <img class="h-52 w-full object-cover bg-gray-800" src={image} alt={name} />
        {/if}
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
        <div class="uppercase tracking-wide text-sm text-indigo-400 font-semibold mb-1">{name}</div>
        <p class="text-gray-200 font-medium mb-4 leading-snug">{catchLine}</p>

        <!-- Links -->
        {#if googlePlayLink || githubLink || demoLink}
            <div class="flex flex-wrap items-center gap-3 mb-4">
                {#if googlePlayLink}
                    <a href={googlePlayLink} target="_blank" class="opacity-80 hover:opacity-100 transition-opacity">
                        <img class="h-7 w-auto" src="/google-1632434_960_720.png" alt="Google Play" />
                    </a>
                {/if}
                {#if githubLink}
                    <a href={githubLink} target="_blank" class="opacity-70 hover:opacity-100 transition-opacity">
                        <img class="h-6 w-auto brightness-200" src="/GitHub-logo.png" alt="GitHub" />
                    </a>
                {/if}
                {#if demoLink}
                    <a
                        href={demoLink}
                        target="_blank"
                        class="border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                        Live Demo
                    </a>
                {/if}
            </div>
        {/if}

        <p class="text-gray-500 text-sm leading-relaxed mt-auto">{@html description}</p>
    </div>
</div>
