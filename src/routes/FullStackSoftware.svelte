<script>
    import Project from "./Project.svelte";
    import PrimaryHeader from "./PrimaryHeading.svelte";

    const projects = [
        {
            name: "Seek.co.nz Web Scraper - C#",
            catchLine: "To get a summary on what type of roles are popular over in New Zealand",
            description: `
                <p>This project was created to save time by manually filling out a spreadsheet for roles that are popular over in New Zealand.</p>
                <br />
                <br />
                <p>Later on in life, I would like to move to New Zealand as it's such a beautiful country with friendly people.</p>
                <p>However my skills need to be favourable to them, thus I needed a way to see the up to date roles in NZ using a popular job website.</p>
                <p>Initially I started documentating manually using an Excel Spreadsheet, however I soon realised that took me days, whereas
                    I could create a web scraper to do this programatically in a matter of moments.</p>
                <br />
                <br />
                <p>This program scrapes the website's query page for a role keyword and location, then loops through all the pages and roles listed,
                    visits each of them, loops through all the \"<li>\" tags and searches the innerText for keywords defined in the project.</p>
                <p>Keywords such as: C#, C++, TypeScript, JavaScript, React, Vue, SQL and many more.</p>
                <br />
                <br />
                <p>Because I did not what this to be a malicious web scraper that increases traffic on the website, 
                    it saves the data in a .json file, thus if you run the program more than once in the day, 
                    the first time it will scrape, save and display, the second time it will just load up the .json data and display the data.</p>
            `,
            googlePlayLink: "",
            demoLink: "",
            githubLink: "https://github.com/Catley94/CSharp_WebScraper",
            image: "/SeekWebScraper.png",
            video: ""
        },
        {
            name: "Ask Sam API (Updated!)",
            catchLine: "ASP.NET w/ MongoDB / SQL backend for the most anonymous question asking service there is.",
            description: `
                <p class="font-semibold">This project is part 1 / 3 of the whole Ask Sam Project.</p>
                <br />
                <p class="font-semibold">Note: This is hosted by a free Azure service, it will go offline after a period of inactivity, if this happens, please open the site, and wait 5 minutes before trying again.</p>
                <br />
                <p>This app started as a playground project to get familiar with Vue and a backend, however since it has been updated, 
                    I used this as a way to learn ASP.NET and get familiar with React again.</p>
                <br />
                <p>At this current time, this project has 8 API endpoints, following CRUD design.</p>
                <p>It's purpose is to accomodate both the public and private frontends,
                    by getting all questions, questions specific to a user guid, and also a specific question of a specific user.</p>
                <p>It also has an extracted database layer, so new DBs can be easily supported by creating a new class speific to the language and commands of that DB.</p>
                <br />
                <p>For more technical details, I encourage you to check out the GitHub Repo.</p>
                <br />
                <p class="font-semibold">What is the Ask Sam Project?</p>
                <p>It has one backend and two frontend webapps, one is accessible to the public (for posting questions),
                    the other is only accessible to staff through a login page, here staff will answer all questions.</p>
                <br />
                <p>Once you have submitted a question, you may come back to this page at any time to check if it has been answered,
                    if it has, it will show the answer.</p>
                <br />
                <p>The user may ask as many questions as they like.</p>
                <br />
                <p class="font-semibold">The new tech stack for the whole project is: C#, ASP.NET, MongoDB / SQL (interchangable), React and TailwindCSS.</p>
                <p>The old techstack for this project was: Vue, NodeJS, Express, Express Router, MongoDB, Mongoose, Cookie Parser and Axios.</p>
            `,
            googlePlayLink: "",
            demoLink: "https://asksamapi.azurewebsites.net/",
            githubLink: "https://github.com/Catley94/AskSam_API",
            image: "/AskSamAPI.png",
            video: ""
        },
        {
            name: "Ask Sam - Public (Updated!)",
            catchLine: "React and TailwindCSS for the most anonymous question asking service there is.",
            description: `
                <p class="font-semibold">This project is part 2 / 3 of the whole Ask Sam Project.</p>
                <br />
                <p class="font-semibold">Note: This is hosted by a free Azure service, it will go offline after a period of inactivity, if this happens, please open the site, and wait 5 minutes before trying again.</p>
                <br />
                <p>This app started as a playground project to get familiar with Vue and a backend, however since it has been updated, 
                    I used this as a way to learn ASP.NET and get familiar with React again.</p>
                <br />
                <p>This frontend allows users to post anonymous questions, which will be answered on Ask Sam - Private.</p>
                <p>It also requires cookies to be accepted in order for the app to work correctly, 
                    and like with all apps that use cookies, the user will get a choice to accept or decline cookies, 
                    if declined, it will prevent any cookie from being created, and delete any that may have been created before by this website.</p>

                <p>For more technical details, I encourage you to check out the GitHub Repo.</p>
                <br />
                <p class="font-semibold">What is the Ask Sam Project?</p>
                <p>It has one backend and two frontend webapps, one is accessible to the public (for posting questions),
                    the other is only accessible to staff through a login page, here staff will answer all questions.</p>
                <br />
                <p>Once you have submitted a question, you may come back to this page at any time to check if it has been answered,
                    if it has, it will show the answer.</p>
                <br />
                <p>The user may ask as many questions as they like.</p>
                <br />
                <p class="font-semibold">The new tech stack for the whole project is: C#, ASP.NET, MongoDB / SQL (interchangable), React and TailwindCSS.</p>
                <p>The old techstack for this project was: Vue, NodeJS, Express, Express Router, MongoDB, Mongoose, Cookie Parser and Axios.</p>
            `,
            googlePlayLink: "",
            demoLink: "https://delightful-smoke-058adbc10.5.azurestaticapps.net/",
            githubLink: "https://github.com/Catley94/AskSam_Client",
            image: "/AskSamPublic.png",
            video: ""
        },
        {
            name: "Ask Sam - Private (Updated!)",
            catchLine: "React, React Router, Supabase(Auth) and TailwindCSS for the most anonymous question asking service there is.",
            description: `
                <p class="font-semibold">This project is part 3 / 3 of the whole Ask Sam Project.</p>
                <br />
                <p class="font-semibold">Note: This is hosted by a free Azure service, it will go offline after a period of inactivity, if this happens, please open the site, and wait 5 minutes before trying again.</p>
            
                <p class="font-semibold">Note: This also uses Supabase for Authentication which needs to be manually started, please contact me s.catley@live.co.uk to start this service if you get an error signing in.</p>
                <br />
                <p>This app started as a playground project to get familiar with Vue and a backend, however since it has been updated, 
                    I used this as a way to learn ASP.NET and get familiar with React again.</p>
                <br />
                <p>This frontend allows select users to answer anonymous questions, which are asked through Ask Sam - Public.</p>
                <p>It has both a sign up and sign in page, also with full support of anonymous logins for ease of use for the app and showcasing.</p>

                <p>For more technical details, I encourage you to check out the GitHub Repo.</p>
                <br />
                <p class="font-semibold">What is the Ask Sam Project?</p>
                <p>It has one backend and two frontend webapps, one is accessible to the public (for posting questions),
                    the other is only accessible to staff through a login page, here staff will answer all questions.</p>
                <br />
                <p>Once you have submitted a question, you may come back to this page at any time to check if it has been answered,
                    if it has, it will show the answer.</p>
                <br />
                <p>The user may ask as many questions as they like.</p>
                <br />
                <p class="font-semibold">The new tech stack for the whole project is: C#, ASP.NET, MongoDB / SQL (interchangable), React and TailwindCSS.</p>
                <p>The old techstack for this project was: Vue, NodeJS, Express, Express Router, MongoDB, Mongoose, Cookie Parser and Axios.</p>
            `,
            googlePlayLink: "",
            demoLink: "https://jolly-stone-06db79410.5.azurestaticapps.net/",
            githubLink: "https://github.com/Catley94/AskSam_Staff",
            image: "/AskSamPrivate.png",
            video: ""
        },
        {
            name: "This portfolio",
            catchLine: "A place to showcase all of my games and apps.",
            description: `
                <p>This portfolio was created to showcase both my games and apps.</p>
                <br />
                <p>I utilised this project to learn Svelte and Tailwind CSS which has been a very successful experience.</p>
                <br />
                <p>If you would like the full experience of my portfolio, please check out my Unity Portfolio <a class="text-blue-300 underline" href="https://splendorous-scone-66aa6e.netlify.app/" target="_blank">here.</a></p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/new-portfolio/tree/svelte",
            image: "/svelte-portfolio.png",
            video: ""
        },
        {
            name: "Exercise Trainer",
            catchLine: "A visual timer, customisable sections of time and activities. What more could you want?",
            description: `
                <p>The idea for this app was spawned whilst jogging with my partner.</p>
                <p>We wanted an app where we could say plan our running journey with sections of walking and running,
                to build up endurance.</p>
                <br />
                <p>You can create as many sets as you like, containing different activities of different lengths.</p>
                <p>You may increase or decrease the time in minutes or seconds, for fine-tuning.</p>
                <br />
                <p>This app was built with React and Ionic.</p>
                <br />
                <p>This app may appear in Google Play Store in the near future.</p>
            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/Exercise_Trainer_App",
            image: "/ExerciseAppScreen_Complete.png",
            video: ""
        },
        {
            name: "Music Visualizer",
            catchLine: "A way for us to see music.",
            description: `
                <p>This was one of my first projects when I was self learning to create WebApps.</p>
                <p>I was drawn to creating a music visualiser since the days of Windows Media Player,
                 when it had an inbuilt music visualiser, back in Windows XP.</p>
                <br />
                <p>The project was built using P5.js, controlling the visual lines through the different audio bands.</p>

            `,
            googlePlayLink: "",
            githubLink: "https://github.com/Catley94/musicVisualizer",
            image: "/musicVisualiser.png",
            video: ""
        }
    ]

</script>

<style lang="postcss">

</style>
<div>
    <PrimaryHeader header="FullStack / Software Projects"/>
    <div class="lg:grid gap-4 grid-cols-2 auto-rows-max justify-items-center">
        {#each projects as project, i (i)}
            <Project {...project} />
        {/each}
    </div>
</div>
