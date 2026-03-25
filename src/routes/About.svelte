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

<section class="max-w-6xl mx-auto px-6 md:px-16 py-20">
    <div class="md:grid md:grid-cols-2 md:gap-20">

        <!-- Left: Bio + Review -->
        <div>
            <p class="text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">About</p>
            <h2 class="text-3xl font-bold text-white mb-6">Hi, I'm Sam.</h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
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
            <div class="mt-10">
                <p class="text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">Colleague Review</p>
                <blockquote class="border-l-4 border-indigo-500 pl-6">
                    <div class="space-y-3 text-gray-400 italic text-sm leading-relaxed">
                        <p>Sam brings new experience and solutions for intricate tasks to the table and explains them in a clear and concise manner for peer review. He takes on feedback and improves his solution accordingly.</p>
                        <p>He has also taken existing coding principles and implementations and made them his own — a great example of this is the Queue system within an existing in house framework. This hated coding approach has single handedly turned into a well loved feature of the framework.</p>
                        <p>He is always open minded about solutions and new concepts and challenges old code bases to see if he can improve them, and has shown time and time again that this is not just talk — he can back it up with clean and elegant code solutions.</p>
                        <p class="font-semibold not-italic text-gray-300">He is a great team member to have on any team.</p>
                    </div>
                    <cite class="block mt-4 text-xs text-gray-500 not-italic">— Anonymous Colleague</cite>
                </blockquote>
                <p class="mt-6 text-sm text-gray-400">
                    More recommendations on my
                    <a class="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors" href="https://www.linkedin.com/in/samuelcatley/" target="_blank">LinkedIn Profile</a>.
                </p>
            </div>
        </div>

        <!-- Right: Tech stack -->
        <div class="mt-16 md:mt-0">
            <p class="text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">Technologies</p>
            <h2 class="text-3xl font-bold text-white mb-6">What I work with</h2>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {#each technologies as technology, i (i)}
                    <div class="bg-gray-900 border border-gray-800 rounded-xl p-3 flex flex-col items-center gap-2 hover:border-indigo-500 transition-colors duration-200 group">
                        <img
                            class="w-10 h-10 object-contain"
                            src={technology.image}
                            alt={technology.name + " Logo"}
                        />
                        <span class="text-xs text-gray-500 group-hover:text-gray-300 transition-colors text-center leading-tight">{technology.name}</span>
                    </div>
                {/each}
            </div>
        </div>

    </div>
</section>
