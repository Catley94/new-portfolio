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
    class="bg-zen-card border border-zen-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-zen-accent flex flex-col"
>
    <!-- Media -->
    <div class="shrink-0">
        {#if video}
            <video class="h-52 w-full object-cover opacity-90" src={video} loop autoplay muted>
                <track kind="captions" />
            </video>
        {:else}
            <img class="h-52 w-full object-cover bg-zen-border opacity-90" src={image} alt={name} />
        {/if}
    </div>

    <!-- Content -->
    <div class="p-7 flex flex-col flex-1">
        <p class="text-xs font-medium tracking-[0.25em] uppercase text-zen-accent mb-2">{name}</p>
        <p class="text-zen-heading font-light text-base mb-5 leading-relaxed">{catchLine}</p>

        <!-- Links -->
        {#if googlePlayLink || githubLink || demoLink}
            <div class="flex flex-wrap items-center gap-3 mb-5">
                {#if googlePlayLink}
                    <a href={googlePlayLink} target="_blank" class="opacity-60 hover:opacity-90 transition-opacity duration-500">
                        <img class="h-7 w-auto" src="/google-1632434_960_720.png" alt="Google Play" />
                    </a>
                {/if}
                {#if githubLink}
                    <a href={githubLink} target="_blank" class="opacity-50 hover:opacity-80 transition-opacity duration-500">
                        <img class="h-6 w-auto" src="/GitHub-logo.png" alt="GitHub" />
                    </a>
                {/if}
                {#if demoLink}
                    <a
                        href={demoLink}
                        target="_blank"
                        class="border border-zen-accent text-zen-accent hover:bg-zen-accent hover:text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-500"
                    >
                        Live Demo
                    </a>
                {/if}
            </div>
        {/if}

        <p class="text-zen-muted text-sm font-light leading-loose mt-auto">{@html description}</p>
    </div>
</div>
