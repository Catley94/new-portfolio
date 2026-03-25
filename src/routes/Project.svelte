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
    class="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-400 hover:-translate-y-1 flex flex-col shadow-sm"
    style="box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;"
    onmouseenter="this.style.boxShadow='0 8px 30px -5px rgba(13,148,136,0.2)'"
    onmouseleave="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'"
>
    <!-- Media -->
    <div class="shrink-0">
        {#if video}
            <video class="h-52 w-full object-cover" src={video} loop autoplay muted>
                <track kind="captions" />
            </video>
        {:else}
            <img class="h-52 w-full object-cover bg-gray-100" src={image} alt={name} />
        {/if}
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
        <div class="uppercase tracking-wide text-sm text-teal-600 font-semibold mb-1">{name}</div>
        <p class="text-gray-800 font-medium mb-4 leading-snug">{catchLine}</p>

        <!-- Links -->
        {#if googlePlayLink || githubLink || demoLink}
            <div class="flex flex-wrap items-center gap-3 mb-4">
                {#if googlePlayLink}
                    <a href={googlePlayLink} target="_blank" class="opacity-80 hover:opacity-100 transition-opacity">
                        <img class="h-7 w-auto" src="/google-1632434_960_720.png" alt="Google Play" />
                    </a>
                {/if}
                {#if githubLink}
                    <a href={githubLink} target="_blank" class="opacity-60 hover:opacity-100 transition-opacity">
                        <img class="h-6 w-auto" src="/GitHub-logo.png" alt="GitHub" />
                    </a>
                {/if}
                {#if demoLink}
                    <a
                        href={demoLink}
                        target="_blank"
                        class="border border-teal-500 text-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                        Live Demo
                    </a>
                {/if}
            </div>
        {/if}

        <p class="text-gray-500 text-sm leading-relaxed mt-auto">{@html description}</p>
    </div>
</div>
