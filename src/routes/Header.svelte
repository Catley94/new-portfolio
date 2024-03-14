<script>

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

</script>

<style lang="postcss">

</style>

<div class="w-auto">
<!--    <video></video>-->
<!--    <img src="/verne-ho-0LAJfSNa-xQ-unsplash.jpg" alt="TODO: FILL ME IN" />-->
<!--    <h1 class="uppercase text-center my-5 text-3xl font-bold">Samuel Catley</h1>-->
    <div
            class="relative overflow-hidden bg-cover bg-no-repeat text-center">
        <video class="mx-auto" poster="/CompleteVideoPoster.png" src="/Videos/Complete_Compressed.mp4" loop autoplay muted>
            <track kind="captions" />
        </video>
        <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="flex h-full items-center justify-center">
                <div class="text-slate-300">
                    <h2 class="mb-4 text-4xl font-semibold uppercase">Samuel Catley</h2>
                    <h4 class="mb-6 text-xl font-semibold">FullStack / Software / Game Developer</h4>
                    <a
                            type="button"
                            class="rounded border-2 border-slate-300 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-slate-300 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            href="#contact"
                            on:click|preventDefault={scrollIntoView}
                            >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>