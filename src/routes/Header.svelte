<script>
    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth' });
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

    <!-- Warm, calm overlay -->
    <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(20,30,20,0.6) 0%, rgba(20,30,20,0.35) 50%, rgba(20,30,20,0.7) 100%);"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p class="text-zen-accent text-xs font-medium tracking-[0.35em] uppercase mb-6 opacity-90">Portfolio</p>
        <h1 class="text-4xl md:text-6xl font-light tracking-wide text-white mb-5 leading-tight">
            Samuel Catley
        </h1>
        <div class="w-12 h-px bg-zen-accent mb-5 opacity-70"></div>
        <p class="text-sm md:text-base text-white/70 font-light max-w-xl leading-loose mb-10 tracking-wide">
            Game Developer &amp; 3D Artist &nbsp;·&nbsp; Full Stack Developer
        </p>
        <a
            href="#contact"
            on:click|preventDefault={scrollIntoView}
            class="inline-block border border-white/40 text-white/80 hover:border-zen-accent hover:text-zen-accent px-8 py-3 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-500"
        >
            Get in Touch
        </a>
    </div>

    <!-- Fade into page background -->
    <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style="background: linear-gradient(to bottom, transparent, #f4f4ef);"></div>
</div>
