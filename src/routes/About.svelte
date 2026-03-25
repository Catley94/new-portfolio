<script>
    import Technology from "../Models/Technology.js";

    const technologies = [
        new Technology("Blender", "/Logos/blender-icon.png"),
        new Technology("Unreal Engine", "/Logos/unreal-engine-icon.png"),
        new Technology("Unity Engine", "/Logos/unity-engine.png"),
        new Technology("C++", "/Logos/CPP.png"),
        new Technology("Rust", "/Logos/rust.png"),
        new Technology("C#", "/Logos/csharp-logo.png"),
        new Technology(".NET", "/Logos/dotnet.png"),
        new Technology("Flutter", "/Logos/flutter.png"),
        new Technology("NodeJS", "/Logos/node-logo.png"),
        new Technology("HTML", "/Logos/html-logo.png"),
        new Technology("CSS", "/Logos/css-logo.png"),
        new Technology("JavaScript", "/Logos/js-logo.png"),
        new Technology("Typescript", "/Logos/typescript-logo.png"),
        new Technology("Svelte", "/Logos/svelte-logo.png"),
        new Technology("React", "/Logos/react-logo.png"),
        new Technology("Vue", "/Logos/vue-logo.png"),
        new Technology("Tailwind CSS", "/Logos/tailwindcss-logo.png"),
        new Technology("Ionic", "/Logos/ionic-logo.png"),
        new Technology("P5.js", "/Logos/p5-logo.png"),
    ]
</script>

<section class="max-w-5xl mx-auto px-8 md:px-16 py-24">
    <div class="md:grid md:grid-cols-2 md:gap-24">

        <!-- Left: Bio + Review -->
        <div>
            <p class="text-xs font-medium tracking-[0.3em] uppercase text-zen-accent mb-4">About</p>
            <h2 class="text-3xl font-light text-zen-heading mb-8 leading-snug">Hi, I'm Sam.</h2>
            <div class="space-y-5 text-zen-body font-light leading-loose">
                <p>
                    As a versatile Full Stack/Software Developer with over 4 years of experience,
                    I am constantly working on improving my skills by dedicating countless evening hours to honing my craft.
                </p>
                <p>
                    While my primary focus has been on mobile casual, WebGL games and similar,
                    I am confident in my ability to adapt and create any type of application you desire across multiple platforms.
                </p>
                <p>
                    My passion lies in prototyping, exploring new technologies, debugging,
                    and continuously expanding my knowledge in both Full Stack Development and Game Development.
                </p>
            </div>

            <!-- Review -->
            <div class="mt-14">
                <p class="text-xs font-medium tracking-[0.3em] uppercase text-zen-accent mb-6">A Colleague's Words</p>
                <blockquote class="border-l-2 border-zen-accent pl-6">
                    <div class="space-y-4 text-zen-muted font-light italic text-sm leading-loose">
                        <p>Sam brings new experience and solutions for intricate tasks to the table and explains them in a clear and concise manner for peer review. He takes on feedback and improves his solution accordingly.</p>
                        <p>He has also taken existing coding principles and made them his own — the Queue system within our framework is a great example. This once-dreaded approach became a well-loved feature.</p>
                        <p>He is always open minded, challenges old code bases to find improvements, and backs up what he says with clean, elegant code solutions.</p>
                        <p class="font-normal not-italic text-zen-body">He is a great team member to have on any team.</p>
                    </div>
                    <cite class="block mt-5 text-xs text-zen-subtle not-italic tracking-wide">— Anonymous Colleague</cite>
                </blockquote>
                <p class="mt-8 text-sm text-zen-muted font-light">
                    More recommendations on
                    <a class="text-zen-accent hover:text-zen-accent-deep underline underline-offset-4 decoration-zen-border hover:decoration-zen-accent transition-all duration-500" href="https://www.linkedin.com/in/samuelcatley/" target="_blank">LinkedIn</a>.
                </p>
            </div>
        </div>

        <!-- Right: Tech stack -->
        <div class="mt-20 md:mt-0">
            <p class="text-xs font-medium tracking-[0.3em] uppercase text-zen-accent mb-4">Technologies</p>
            <h2 class="text-3xl font-light text-zen-heading mb-8 leading-snug">What I work with</h2>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {#each technologies as technology, i (i)}
                    <div class="bg-zen-card border border-zen-border rounded-2xl p-3 flex flex-col items-center gap-2 hover:border-zen-accent transition-colors duration-500 group">
                        <img
                            class="w-9 h-9 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            src={technology.image}
                            alt={technology.name + " Logo"}
                        />
                        <span class="text-xs text-zen-subtle group-hover:text-zen-muted transition-colors duration-500 text-center leading-tight">{technology.name}</span>
                    </div>
                {/each}
            </div>
        </div>

    </div>
</section>
