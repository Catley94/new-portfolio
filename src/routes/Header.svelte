<script>
    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<div class="relative w-full h-screen overflow-hidden">
    <video
        class="absolute inset-0 w-full h-full object-cover"
        poster="/CompleteVideoPoster.png"
        src="/Videos/Complete_Compressed.mp4"
        loop autoplay muted
    >
        <track kind="captions" />
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%);"></div>

    <!-- Centered content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p class="text-teal-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">Portfolio</p>
        <h1 class="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-none">
            Samuel Catley
        </h1>
        <p class="text-base md:text-lg text-gray-200 font-light max-w-2xl leading-relaxed mb-10">
            Game Developer &amp; 3D / Technical Artist<br class="hidden md:block" />
            with Full Stack &amp; Software Development experience
        </p>
        <a
            href="#contact"
            on:click|preventDefault={scrollIntoView}
            class="inline-block border border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 px-8 py-3 rounded text-sm font-semibold uppercase tracking-widest transition-all duration-200"
        >
            Get in Touch
        </a>
    </div>

    <!-- Bottom fade into page bg -->
    <div class="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style="background: linear-gradient(to bottom, transparent, #f7f7f2);"></div>
</div>
