<script>
    export let name;
    export let catchLine;
    export let description;
    export let googlePlayLink; //Replace with google play icon
    export let githubLink; //Replace with GitHub icon
    export let image;
    export let video;
</script>

<style lang="postcss">
    .project {

    }
</style>

<div class="project bg-slate-100 drop-shadow-lg hover:drop-shadow-2xl m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-center">
    <div class="md:flex">
        <div class="md:shrink-0">
            {#if video}
            <video class="h-64 w-full object-cover md:h-full md:w-64" src={video} loop autoplay>
                <track kind="captions" />
            </video>
            {:else}
                <img class="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Modern building architecture">
            {/if}

        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-xl text-blue-500 font-semibold">{name}</div>
                <p class="block mt-1 text-lg leading-tight font-medium">{catchLine}</p>
            <div class="grid gap-4 grid-cols-2 grid-rows-1 justify-items-center my-5">
                {#if googlePlayLink}
                    <a class="w-1/4" href={googlePlayLink} ><img class="" src="/google-1632434_960_720.png" alt="Google Play Logo" /></a>
<!--                    <button class="rounded-full bg-slate-400">Google Play</button>-->
                {/if}
                {#if githubLink}
                    <a class="w-1/2" href={githubLink} ><img class="" src="/GitHub-logo.png" alt="GitHub Logo" /></a>
                {/if}
                </div>
            <p class="mt-2 text-slate-500">{description}</p>
        </div>
    </div>
</div>