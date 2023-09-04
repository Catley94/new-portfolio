<script>
    export let name;
    export let catchLine;
    export let description;
    export let googlePlayLink; //Replace with google play icon
    export let githubLink; //Replace with GitHub icon
    export let demoLink;
    export let image;
    export let video;
</script>

<style lang="postcss">
    .project {

    }
</style>

<div class="project bg-slate-100 drop-shadow-lg hover:drop-shadow-2xl m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-center">
    <div class="">
        <div class="md:shrink-0">
            {#if video}
            <video class="h-80 w-full object-cover" src={video} loop autoplay muted>
                <track kind="captions" />
            </video>
            {:else}
                <img class="h-48 w-full object-cover bg-slate-300" src={image} alt="Modern building architecture">
            {/if}

        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-xl text-blue-500 font-semibold">{name}</div>
                <p class="block mt-1 text-lg leading-tight font-medium">{catchLine}</p>
            <div class="grid gap-4 grid-cols-2 grid-rows-1 justify-items-center my-5">
                {#if googlePlayLink}
                    <a class="w-1/4" href={googlePlayLink} target="_blank" ><img class="" src="/google-1632434_960_720.png" alt="Google Play Logo" /></a>
<!--                    <button class="rounded-full bg-slate-400">Google Play</button>-->
                {/if}
                {#if githubLink}
                    <a class="w-1/2" href={githubLink} target="_blank" ><img class="" src="/GitHub-logo.png" alt="GitHub Logo" /></a>
                {/if}
                {#if demoLink}
                    <div class="flex items-center justify-center">
                        <a
                                type="button"
                                class="rounded border-2 border-blue-300 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-blue-300 transition duration-150 ease-in-out hover:border-blue-100 hover:bg-blue-200 hover:text-blue-300 focus:border-blue-100 focus:text-blue-100 focus:outline-none focus:ring-0 active:border-blue-200 active:text-blue-200"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                href={demoLink}
                                target="_blank"
                        >Demo</a>
                    </div>
                {/if}
                </div>
            <p class="mt-2 text-slate-500">{@html description}</p>
        </div>
    </div>
</div>