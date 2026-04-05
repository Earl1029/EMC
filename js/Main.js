// --- 1. LOCAL DATA STRATEGY (JSON Format) ---
const archives = [
    // 1. My Heart Is You're
    {
        title: "My Heart Is You're",
        genre: "Romance",
        dir: "Allan Dave",
        year: "2025",
        dur: "7m",
        rating: "PG-13",
        type: "Movie",
        tags: ["Drama"],
        desc: "When a devastating heart diagnosis threatens to tear a young couple apart, Marvin is forced to confront the fragility of their forever. This intimate medical drama explores the lengths one will go to keep a promise in the face of a terminal condition. It is a raw look at a love pushed to its absolute breaking point.",
        cast: ["Director: Allan Dave", "Lead: Mira Kaye", "Support: Jace Cole", "Stunt Coord: Max Storm", "Cinematographer: Lena Voss", "Editor: Ryan Blake", "Sound Design: Echo Team", "Producer: Nova Films", "Assistant Dir: Sam Reed", "Costume: Zara Quinn", "Makeup: Luna Star", "VFX: Pixel Corp"],
        youtubeId: "https://www.youtube.com/embed/_SECsdLt7gc?si=_gkm_d_gszpQB-Gr",
        poster: "assets/posters/MyHeartIsYoure.svg",
        card: "assets/Cards/MyHeartIsYoure.svg",
        disc: "assets/Discs/MyHeartIsYoure.svg",
        font: "Bradley Hand ITC"
    },
    // 2. The Good, Bad and The Devil
    {
        title: "The Good, Bad and The Devil",
        genre: "Horror, Action",
        dir: "Allan Dave Pocdol",
        year: "2025",
        dur: "59m",
        rating: "R-18",
        type: "Movie",
        tags: ["Horror", "Thriller", "Action"],
        desc: "After their president's death, a group of students is trapped in a cursed version of their school and forced into a lethal game. To escape, they must unmask a hidden traitor who manipulates those nearby into becoming unwitting executioners. As paranoia takes hold and the body count rises, they must find the mastermind before the school becomes their final resting place.",
        cast: ["Director: Allan Dave Pocdol", "Lead: Tia Brooks", "Support: Owen Reed", "Ghost: Spirit Entity", "Security Chief: Marcus Kane", "Forensic Expert: Dr. Sarah Voss", "Camera Op: Jake Moreno", "Sound Recordist: Bella Chen", "Lighting: Tom Garcia", "Props Master: Lisa Wong", "Special Effects: Horror FX", "Music Composer: Dark Tones"],
        youtubeId: "https://www.youtube.com/embed/mph5TLkYW5Q?si=hS88O_erDqFvAczt",
        poster: "assets/posters/TheGoodTheBadAndTheDevil.svg",
        card: "assets/Cards/TGTBATD.svg",
        disc: "assets/Discs/TheGoodTheBadAndTheDevil.svg",
        font: "Bradley Hand ITC"
    },
    // 3. Oversharing
    {
        title: "Oversharing",
        genre: "Thriller",
        dir: "Allan Dave Pocdol",
        year: "2025",
        dur: "1m",
        rating: "PG",
        type: "Short Film",
        tags: ["Thriller"],
        desc: "Follow the digital trail of Ice James, a vlogger whose obsession with likes invites a silent observer to his door. What starts as a high-energy post quickly turns into a chilling reality: oversharing doesn't just invite followers—it invites danger. Remember, you never know who is watching when you open your life to the world.",
        cast: ["Director: Allan Dave Pocdol", "Lead: Lila Hart", "Support: Noah Wells", "Investigator: Detective Ray", "Journalist: Emma Chase", "Town Mayor: Robert Kline", "Child Victim: Young Sarah", "Psychologist: Dr. Maria Santos", "Archivist: Ben Harper", "Tech Expert: Zoe Martinez", "Voice Over: Narrator", "Score: Tension Audio"],
        youtubeId: "https://www.youtube-nocookie.com/embed/ZY1V_wBaSVM?si=6XF4lhVFQQ8kRCGX",
        poster: "assets/posters/Oversharing.svg",
        card: "assets/Cards/Oversharing.svg",
        disc: "assets/Discs/Oversharing.svg",
        font: "Bruno Ace SC"
    },
    // 4. Buloy
    {
        title: "Buloy",
        genre: "Drama",
        dir: "Student C",
        year: "2025",
        dur: "5m",
        rating: "PG-16",
        type: "Movie",
        tags: ["Drama", "Thriller"],
        desc: "Mike is determined to honor his late best friend by finishing his final documentary about what makes people truly happy. However, as he digs through the raw footage and retraces Buloy's final days, he begins to realize his friend was hiding a truth no one was prepared to face. Some secrets are better left unedited.",
        cast: ["Director: Student C", "Lead: Alex Moore", "Support: Rina Patel", "Family Member: David Chen", "Rescue Worker: Sgt. Johnson", "Doctor: Dr. Emily White", "Neighbor: Mrs. Garcia", "Journalist: Mike Torres", "Government Rep: Agent Blake", "Child Actor: Tommy Young", "Voice Actor: Sarah Kim", "Composer: Storm Sounds"],
        youtubeId: "https://www.youtube.com/embed/gH5biGh0Vnk?si=zQSpu6lQ5JkIla3A",
        poster: "assets/posters/Buloy.svg",
        card: "assets/Cards/Buloy.svg",
        disc: "assets/Discs/Buloy.svg",
        font: "BhuTuka Expanded One"
    },
    // 5. Tag Ulan
    {
        title: "Tag Ulan",
        genre: "Comedy",
        dir: "Allan Dave Pocdol",
        year: "2025",
        dur: "2m",
        rating: "G",
        type: "Movie",
        tags: ["Comedy"],
        desc: "After surviving the sweltering heat and a chaotic morning rush, a determined student finally makes it to his desk, only to receive the ultimate heartbreak. This comedic short film captures the relatable struggle of student life in the Philippines, where the weather is as unpredictable as the class schedule. Sometimes, the relief you've been waiting for comes a little too late.",
        cast: ["Director: Allan Dave Pocdol", "Lead: Juno Park", "Support: Kade Finn", "Rival Racer: Viper King", "Mechanic: Gear Head", "Enforcer: Captain Steele", "Hacker: Code Breaker", "Bartender: Neon Girl", "Crowd Member: Street Punk", "Voice Synth: AI Assistant", "Stunt Driver: Race Pro", "Music: Cyber Beats"],
        youtubeId: "https://www.youtube.com/embed/K8KWutDe9VE?si=iGsZo8FbU60v7SgZ",
        poster: "assets/posters/Tagulan.svg",
        card: "assets/Cards/TagUlan.svg",
        disc: "assets/Discs/TagUlan.svg",
        font: "Crushed, Regular"
    },
    // 6. Grace
    {
        title: "Grace",
        genre: "Drama",
        dir: "Student E",
        year: "2025",
        dur: "6m",
        rating: "PG",
        type: "Movie",
        tags: ["Drama"],
        desc: "Mark is haunted by the memories of a girl who was once his world, only to realize that time has a cruel way of blurring the line between past and present. A poignant look at love, loss, and the realization that some people are meant to stay in our hearts, even if they can't stay in our lives.",
        cast: ["Director: Student E", "Lead: Aria Fox", "Support: Leon Hart", "AI Entity: Nexus Core", "Corporate Exec: Mr. Voss", "Scientist: Dr. Quantum", "Security Guard: Agent Zero", "Virtual Being: Echo Ghost", "Tech Support: Byte Master", "Memory Specialist: Mind Reader", "Narrator: System Voice", "Soundtrack: Digital Waves"],
        youtubeId: "https://www.youtube.com/embed/o2-d2rpsIt0?si=xoGd0NlbVCS2rn18",
        poster: "assets/posters/Grace.svg",
        card: "assets/Cards/Grace.svg",
        disc: "assets/Discs/Grace.svg",
        font: "Diphylleia"
    },
    // 7. Cry Machine
    {
        title: "Cry Machine",
        genre: "Action",
        dir: "Allan Dave Pocdol",
        year: "2025",
        dur: "39m",
        rating: "R-18",
        type: "Movie",
        tags: ["Action", "Sci-Fi"],
        desc: "In the heart of the Megacity, a betrayed agent goes berserk. Fueled by rage and high-tech weaponry, he wages a one-man war against the corporation that erased his past. Driven by the singular, desperate hope that his wife is still alive, he will tear through anyone in his way to save her from the that being that took everything.",
        cast: ["Director: Pocdol", "Lead: Actor A", "Support: Actor B", "Antagonist: Corp Boss", "Ally: Tech Expert", "Wife: Lost Love", "Corporation Rep: Suit One", "Corporation Rep: Suit Two", "Mercenary: Gun For Hire", "Hacker: Data Thief", "Scientist: Lab Rat", "Voice Over: System AI", "Stunt Team: Action Pros", "VFX Team: Visual Masters", "Sound Team: Audio Wizards", "Editor: Cut Master"],
        youtubeId: "https://www.youtube.com/embed/F6SH5XTO5EY?si=h5bLz9So8iCERaty",
        poster: "assets/posters/CryMachine.svg",
        card: "assets/Cards/CryMachine.svg",
        disc: "assets/Discs/Crymachine.svg",
        font: "Anta"
    },
    // 8. Unseen Self
    {
        title: "Unseen Self",
        genre: "Thriller",
        dir: "Student F",
        year: "2025",
        dur: "6m",
        rating: "PG",
        type: "Movie",
        tags: ["Thriller"],
        desc: "When a new fragrance promises to solve all of a young man's social problems, he finds himself caught between his desire to be noticed and his true self. An experimental look at identity, confidence, and the masks we wear to fit in.",
        cast: ["Director: Student F", "Lead: Emi Luna", "Support: Theo Song", "Spirit Guide: Elder Light", "Dark Machine: Void Entity", "Color Guardian: Prism Keeper", "Young Spirit: Spark Child", "Forest Spirit: Tree Mother", "Voice Actor: Luna Voice", "Animator: Art Team", "Composer: Melody Maker", "Sound Effects: Nature Sounds"],
        youtubeId: "https://www.youtube.com/embed/bd6MdEXoBPQ?si=TyNByAbM52aZaMf4",
        poster: "assets/posters/UnseenSelf.svg",
        card: "assets/Cards/UnseenSelf.svg",
        disc: "assets/Discs/UnseenSelf.svg",
        font: "Zeyada"
    },
    // 9. Lost Signal
    {
        title: "Kaulayaw",
        genre: "Romance",
        dir: "Student G",
        year: "2025",
        dur: "5m",
        rating: "PG-13",
        type: "Movie",
        tags: ["Romance", "Thriller"],
        desc: "An artist struggling with writer's block finds inspiration in a conversation about Satan’s ultimate punishment: a cruel time loop of memory and loss. A deep, philosophical drama about creativity, relationships, and the cycles we find ourselves trapped in.",
        cast: ["Director: Student G", "Lead: Arin Vale", "Support: Jessa Cruz", "Captain: Commander Rex", "Engineer: Tech Wiz", "Scientist: Dr. Nova", "Alien Entity: Signal Source", "Crew Member: Navigator", "Crew Member: Medic", "AI Companion: Ship Brain", "Voice Actor: Alien Voice", "Special Effects: Space FX", "Music: Cosmic Sounds"],
        youtubeId: "https://www.youtube.com/embed/SNgKOxlOYa4?si=3XhVK4l2H0JMFYx4",
        poster: "assets/posters/Kaulayaw.svg",
        card: "assets/Cards/Kaulayaw.svg",
        disc: "assets/Discs/Kaulayaw.svg",
        font: "Homemade Apple"
    },
    // 10. Placeholder Movie 10
    {
        title: "Ikaw Parin",
        genre: "Drama",
        dir: "Director Name",
        year: "2025",
        dur: "2m",
        rating: "G",
        type: "Short Film",
        tags: ["Drama, Comedy"],
        desc: "After a long day, a simple trip to a convenience store turns into a moment of quiet reflection on the small choices that define our lives. As he stands before the coolers, the protagonist realizes that some preferences are hard-wired, and finding the right fit is about more than just the taste. A minimalist exploration of routine, comfort, and the things that stay the same.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/sUt2Otvdz4g?si=-R6jVFHveMRinOMS",
        poster: "assets/posters/IkawParin.svg",
        card: "assets/Cards/IkawParin.svg",
        disc: "assets/Discs/IkawParin.svg",
        font: "Geostar Fill"
    },
    // 11. Placeholder Movie 11
    {
        title: "7 Minutes",
        genre: "Drama",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-16",
        type: "Short Film",
        tags: ["Drama, Romance"],
        desc: "They say the brain stays active for seven minutes after death—enough time for a lifetime of memories to flood back. In those final moments, there is only one person he wants to think about. A short, ethereal exploration of a love that lasts until the very last second.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/qogSJywDi7w?si=O_9kCw0xbacyopDN",
        poster: "assets/posters/7Minutes.svg",
        card: "assets/Cards/7Minutes.svg",
        disc: "assets/Discs/7Minutes.svg",
        font: "Digital Numbers, Regular"
    },
    // 12. Placeholder Movie 12
    {
        title: "Successfull na akyat bahay",
        genre: "Comedy",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "PG-16",
        type: "Short Film",
        tags: ["Comedy"],
        desc: "A former burglar returns to the scene of his old crime, but not for the reason you'd expect. This absurd comedy turns the akyat bahay trope on its head as a simple apology leads to a very unexpected business pitch.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/Ook6Voyf6oI?si=swZ9efx8aiNE7rht",
        poster: "assets/posters/SNAB.svg",
        card: "assets/Cards/SNAB.svg",
        disc: "assets/Discs/SNAB.svg",
        font: "Bungee Hairline, Regular"
    },
    // 13. Placeholder Movie 13
    {
        title: "The Last game",
        genre: "Horror",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-18",
        type: "Short Film",
        tags: ["Horror"],
        desc: "A casual night of \"Truth or Dare\" takes a chilling turn when a simple question unearths a dark memory from the past. As the tension rises, the group realizes that some games aren't meant to be won—they are meant to be survived.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/wubkQ8TAesI?si=hD5vv7le-w_7hMN3",
        poster: "assets/posters/TheLastGame.svg",
        card: "assets/Cards/TheLastGame.svg",
        disc: "assets/Discs/TheLastGame.svg",
        font: "Allison, Regular"
    },
    // 14. Placeholder Movie 14
    {
        title: "Take Out",
        genre: "Drama",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-18",
        type: "Short Film",
        tags: ["Drama, Thriller"],
        desc: "A mysterious delivery leads to an unexpected encounter that challenges the protagonist's sense of reality. A short, intriguing mystery where a simple \"take out\" order is just the beginning of a much larger story.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "",
        poster: "assets/posters/TakeOut.svg",
        card: "assets/Cards/TakeOut.svg",
        disc: "assets/Discs/TakeOut.svg",
        font: "Island Moments, Regular"
    },
    // 15. Placeholder Movie 15
    {
        title: "Only If",
        genre: "Drama",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "PG-13",
        type: "Short Film",
        tags: ["Drama, Romance"],
        desc: "A reflective piece that dives into the power of choice and the lingering regret of the path not taken. Through a series of \"only if\" scenarios, the film explores how small moments define our entire destiny.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/-WZg3TZDIEU?si=MGsl-mrJ4Oyb1FsA",
        poster: "assets/posters/OnlyIf.svg",
        card: "assets/Cards/OnlyIf.svg",
        disc: "assets/Discs/OnlyIf.svg",
        font: "Crimson Text, Regular"
    },
    // 16. Placeholder Movie 16
    {
        title: "Chances",
        genre: "Romance",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "G",
        type: "Short Film",
        tags: ["Romance"],
        desc: "Every day we meet people who might change our lives without us ever knowing. This film explores the fleeting nature of human connection and the \"what ifs\" that linger when we let a chance encounter slip through our fingers.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/BRGaVyEYoSI?si=-NI_8v_S7RqaBkJS",
        poster: "assets/posters/Chances.svg",
        card: "assets/Cards/Chances.svg",
        disc: "assets/Discs/Chances.svg",
        font: "Delicious Handrawn, Regular"
    },
    // 17. Placeholder Movie 17
    {
        title: "Three Hits",
        genre: "Comedy",
        dir: "Director Name",
        year: "2025",
        dur: "25m",
        rating: "R-13",
        type: "Movie",
        tags: ["Romance, Comedy"],
        desc: "When three unexpected encounters bring two opposites together, they must decide if it’s fate or just persistent bad luck. A lighthearted RomCom about finding connection in the chaos.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/haONE1pUfeI?si=_w781H_DZBtc-TfD",
        poster: "assets/posters/ThreeHits.svg",
        card: "assets/Cards/ThreeHits.svg",
        disc: "assets/Discs/ThreeHits.svg",
        font: "Faster One, Regular"
    },
    // 18. Placeholder Movie 18
    {
        title: "Anhedonia",
        genre: "Drama",
        dir: "Director Name",
        year: "2025",
        dur: "18m",
        rating: "R-18",
        type: "Movie",
        tags: ["Drama, Thriller"],
        desc: "A cinematic exploration of the inability to feel pleasure, where the world loses its color and every moment feels like a struggle against the void. A visually striking journey through the internal landscape of a mind seeking to feel again.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/xOP80ydBqC8?si=q0CFKYhPYJtwFJUC",
        poster: "assets/posters/Anhedonia.svg",
        card: "assets/Cards/Anhedonia.svg",
        disc: "assets/Discs/Anhedonia.svg",
        font: "Finger Paint, Regular"
    },
    // 19. Placeholder Movie 19
    {
        title: "The Last Seat",
        genre: "Horror",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "PG",
        type: "Short Film",
        tags: ["Horror"],
        desc: "As the room empties and the deadline looms, a student realizes they aren't as alone as they thought. A tense, atmospheric short that proves the scariest thing about a deadline is what happens after the sun goes down.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/T5JIrlKGuiE?si=JYh6lMoEA78vOAL5",
        poster: "assets/posters/TheLastSeat.svg",
        card: "assets/Cards/TheLastSeat.svg",
        disc: "assets/Discs/TheLastSeat.svg",
        font: "Ephesis, Regular"
    },
    // 20. Placeholder Movie 20
    {
        title: "Hiraya",
        genre: "Romance",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "G",
        type: "Short Film",
        tags: ["Romance, Comedy"],
        desc: "Nico is a dreamer waiting for a sign from his \"dream girl,\" Shane. In this sweet and relatable student romance, a simple moment of kilig becomes a cinematic journey through the hopeful, nervous heart of young love.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/_LIs6Crta1I?si=SfECoWOR8oQ6JUYa",
        poster: "assets/posters/Hiraya.svg",
        card: "assets/Cards/Hiraya.svg",
        disc: "assets/Discs/Hiraya.svg",
        font: "Figma Hand, Regular"
    },
    // 21. Placeholder Movie 21
    {
        title: "Wake Up Call",
        genre: "Thriller",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-18",
        type: "Short Film",
        tags: ["Thriller"],
        desc: "A routine morning becomes a surreal experience when a simple alarm clock fails to do its job. A short, punchy look at the blurred lines between dreams and the reality of a student's busy schedule.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/gBaZiDkZ1sQ?si=ZkPP4xlVNBaBVmIj",
        poster: "assets/posters/WakeUpCall.svg",
        card: "assets/Cards/WakeUpCall.svg",
        disc: "assets/Discs/WakeUpCall.svg",
        font: "Dokdo, Regular"
    },
    // 22. Placeholder Movie 22
    {
        title: "Classroom",
        genre: "Comedy",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-18",
        type: "Short Film",
        tags: ["Comedy"],
        desc: "The frantic search for an empty room becomes a high-stakes mission for a group of students just trying to get through the day. A relatable, fast-paced comedy about the everyday struggles and small victories of campus life.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/C5pwbDFvzuE?si=CO9f99btp9iuVvBS",
        poster: "assets/posters/Classroom.svg",
        card: "assets/Cards/Classroom.svg",
        disc: "assets/Discs/Classroom.svg",
        font: "Geostar Fill, Regular"
    },
    // 23. Placeholder Movie 23
    {
        title: "Nakikinig ka pa ba inay",
        genre: "Horror",
        dir: "Director Name",
        year: "2025",
        dur: "1m",
        rating: "R-16",
        type: "Short Film",
        tags: ["Horror"],
        desc: "In a world increasingly dominated by digital noise, a child attempts to reach out to the one person who should always be there. This poignant short film explores the disconnect between generations and the silent plea for a mother's undivided attention. A moving reflection on communication, modern parenting, and the simple desire to be heard.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/CJ3A7KAYeiA?si=tqox2IUSfWg9muhA",
        poster: "assets/posters/NKPBI.svg",
        card: "assets/Cards/NKPBI.svg",
        disc: "assets/Discs/NKPBI.svg",
        font: "East Sea Dokdo, Regular"
    },
    // 24. Placeholder Movie 24
    {
        title: "Pugante",
        genre: "Action",
        dir: "Director Name",
        year: "2025",
        dur: "59m",
        rating: "R-18",
        type: "Movie",
        tags: ["Action, Thriller, Comedy"],
        desc: "How far would you go to save the only family you have left? When the weight of medical bills becomes too heavy, Domeng turns to a life of crime, only to find that the price of survival is higher than he ever imagined.",
        cast: ["Director: Director Name", "Lead: Actor Name"],
        youtubeId: "https://www.youtube.com/embed/ofGdlmDYTZs?si=BlLdzw_L9_xl-EKr",
        poster: "assets/posters/Pugante.svg",
        card: "assets/Cards/Pugante.svg",
        disc: "assets/Discs/Pugante.svg",
        font: "Diplomata, Regular"
    }
];

// --- 2. LOCAL STORAGE MANAGEMENT ---
let myList = JSON.parse(localStorage.getItem('myList')) || [];
let history = JSON.parse(localStorage.getItem('history')) || [];

function saveMyList() {
    localStorage.setItem('myList', JSON.stringify(myList));
}

function saveHistory() {
    localStorage.setItem('history', JSON.stringify(history));
}

function addToMyList(title) {
    if (!myList.includes(title)) {
        myList.push(title);
        saveMyList();
        alert(`${title} added to your list!`);
    } else {
        alert(`${title} is already in your list.`);
    }
}

function addToHistory(title) {
    // Remove if already exists, then add to front
    history = history.filter(t => t !== title);
    history.unshift(title);
    // Keep only last 20
    if (history.length > 20) history = history.slice(0, 20);
    saveHistory();
}

// DOM Element Registry
const recRow = document.getElementById('rec-row');
const romanceRow = document.getElementById('romance-row');
const actionRow = document.getElementById('action-row');
const horrorRow = document.getElementById('horror-row');
const comedyRow = document.getElementById('comedy-row');
const thrillerRow = document.getElementById('thriller-row');
const dramaRow = document.getElementById('drama-row');
const detailsRecRow = document.getElementById('details-rec-row');
const searchInput = document.getElementById('search-input');
const detailsPage = document.getElementById('movie-details-page');
const detailsTitle = document.getElementById('details-title');
const detailsType = document.getElementById('details-type');
const detailsYear = document.getElementById('details-year');
const detailsRating = document.getElementById('details-rating');
const detailsDur = document.getElementById('details-dur');
const detailsTags = document.getElementById('details-tags');
const detailsDesc = document.getElementById('details-desc');
const detailsPoster = document.getElementById('details-poster');
const detailsCastRow = document.getElementById('details-cast-row');
let currentMovie = archives.find(v => v.title === 'Cry Machine');

// --- 2. VIDEO PLAYER LOGIC ---
const videoModal = document.getElementById('video-modal');
const introModal = document.getElementById('intro-modal');
const introVideo = document.getElementById('intro-video');
const skipIntroBtn = document.getElementById('skip-intro-btn');
const playBtn = document.getElementById('play-btn');
const closeBtn = document.getElementById('close-modal');
const youtubePlayer = document.getElementById('youtube-player');
let pendingYoutubeId = null;
let forceIntroActive = false;

function playVideo(youtubeId) {
    if (!youtubeId) {
        alert('No YouTube link available for this video');
        return;
    }
    const embedUrl = youtubeId.startsWith('http')
        ? youtubeId.replace(/(\?|&)autoplay=\d+/g, '')
        : `https://www.youtube.com/embed/${youtubeId}`;
    youtubePlayer.src = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`;
    videoModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function openIntroModal(youtubeId) {
    pendingYoutubeId = youtubeId || null;
    // Skip button is always visible now

    introModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    introVideo.pause();
    introVideo.currentTime = 0;
    introVideo.load();
    introVideo.muted = false;
    introVideo.play().catch(() => {
        introVideo.muted = true;
        introVideo.play().catch(() => {
            // If autoplay still fails, the intro modal remains visible until user interaction or the video ends.
        });
    });
}

function closeIntroModal() {
    introVideo.pause();
    introVideo.currentTime = 0;
    introModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (forceIntroActive) {
        forceIntroActive = false;
    }
    pendingYoutubeId = null;
}

function handleIntroFinish() {
    const nextId = pendingYoutubeId;
    if (forceIntroActive) {
        forceIntroActive = false;
    }
    closeIntroModal();
    if (nextId) {
        playVideo(nextId);
    }
}

function playIntroThenYoutube(youtubeId) {
    openIntroModal(youtubeId);
}

function startForcedIntro() {
    forceIntroActive = true;
    openIntroModal();
}

playBtn.addEventListener('click', () => {
    const cryMachineVideo = archives.find(v => v.title === 'Cry Machine');
    playIntroThenYoutube(cryMachineVideo.youtubeId);
});

const playBtnDetails = document.getElementById('play-btn-details');
playBtnDetails.addEventListener('click', () => {
    if (!currentMovie) currentMovie = archives.find(v => v.title === 'Cry Machine');
    playIntroThenYoutube(currentMovie.youtubeId);
});

function updateDetailsPage(movie) {
    if (!movie) return;
    detailsTitle.textContent = movie.title;
    detailsTitle.style.fontFamily = movie.font;
    detailsYear.textContent = movie.year;
    detailsType.textContent = movie.type || 'Movie';
    detailsRating.textContent = movie.rating;
    detailsDur.textContent = movie.dur;
    detailsDesc.textContent = movie.desc;
    detailsPoster.src = movie.disc;
    detailsPoster.alt = movie.title;
    detailsPage.style.backgroundImage = `url('${movie.poster}')`;
    detailsPage.style.backgroundSize = 'cover';
    detailsPage.style.backgroundPosition = 'center';
    detailsPage.style.backgroundRepeat = 'no-repeat';
    detailsPage.style.backgroundAttachment = 'fixed';

    detailsTags.innerHTML = movie.tags.map(tag => `<span class="px-2 py-1 text-xs rounded-full bg-white/10 text-white">${tag}</span>`).join(' ');
    detailsCastRow.innerHTML = movie.cast.map(member => {
        const [role, name] = member.split(': ');
        const placeholderText = name ? name.replace(/\s+/g, '+') : role.replace(/\s+/g, '+');
        return `
            <div class="cast-member flex-shrink-0">
                <div class="member-role">${role}</div>
                <div class="member-circle">
                    <img src="https://via.placeholder.com/80x80/333/666?text=${placeholderText}" alt="${role}" class="w-full h-full object-cover rounded-full">
                </div>
                <div class="member-name">${name || role}</div>
            </div>
        `;
    }).join('');
}

function navigateTo(pageId, hideHeader = false) {
    const pages = ['home-content', 'my-list-page', 'history-page', 'movie-details-page', 'search-results-page'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById('main-header').classList.toggle('hidden', hideHeader);
    window.scrollTo(0, 0);
}

function showMovieDetails(title = 'Cry Machine') {
    const movie = archives.find(v => v.title === title) || archives.find(v => v.title === 'Cry Machine');
    currentMovie = movie;
    updateDetailsPage(movie);
    addToHistory(title);
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('my-list-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    detailsPage.classList.remove('hidden');
    const searchPage = document.getElementById('search-results-page');
    if (searchPage) searchPage.classList.add('hidden');
    document.getElementById('main-header').classList.add('hidden');
    window.scrollTo(0, 0);
    
    // Reset overlay to bright state when page loads
    const overlay = detailsPage.querySelector('.details-overlay');
    if (overlay) {
        overlay.style.background = 'linear-gradient(to bottom, rgba(5,5,5,0.05), rgba(5,5,5,0.1))';
    }
    
    navigateTo('movie-details-page', true);
}

function closeModal() {
    youtubePlayer.src = '';
    videoModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

closeBtn.addEventListener('click', closeModal);
videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeModal(); });

skipIntroBtn?.addEventListener('click', () => {
    const nextId = pendingYoutubeId;
    closeIntroModal();
    if (nextId) {
        playVideo(nextId);
    }
});

introModal.addEventListener('click', (e) => {
    if (e.target === introModal && !forceIntroActive) {
        closeIntroModal();
    }
});

introVideo.addEventListener('ended', handleIntroFinish);

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        if (!videoModal.classList.contains('hidden')) closeModal();
        if (!introModal.classList.contains('hidden') && !forceIntroActive) closeIntroModal();
    }
});

startForcedIntro();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a nav item
mobileMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
        mobileMenu.classList.add('hidden');
    }
});

// Movie details page scroll-based overlay adjustment
function updateDetailsOverlay() {
    const detailsPage = document.getElementById('movie-details-page');
    const overlay = detailsPage.querySelector('.details-overlay');
    if (!overlay) return;

    const scrollTop = detailsPage.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollTop / windowHeight, 1); // 0 to 1

    // More dramatic transition with easing: Start much brighter (0.05), get much darker (0.95)
    // Use ease-in curve for more pronounced effect
    const easedProgress = scrollProgress * scrollProgress; // Quadratic ease-in
    const startOpacity = 0.05; // Very bright at top
    const endOpacity = 0.95;   // Very dark when scrolled
    const currentOpacity = startOpacity + (endOpacity - startOpacity) * easedProgress;

    overlay.style.background = `linear-gradient(to bottom, rgba(5,5,5,${currentOpacity}), rgba(5,5,5,${currentOpacity + 0.05}))`;
}

detailsPage.addEventListener('scroll', updateDetailsOverlay);

// Add resize listener to recalculate overlay on window resize
window.addEventListener('resize', updateDetailsOverlay);

// --- 3. DYNAMIC RENDERING LOGIC ---

function createCard(p) {
    return `
        <div class="movie-card card-container min-w-[400px] aspect-video bg-[#111] rounded-lg overflow-hidden relative group cursor-pointer border border-white/5 hover:border-[#8024d1] transition-all" data-title="${p.title}">
            <img src="${p.card}" class="w-full h-full object-cover" alt="${p.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x337/222/555?text='+encodeURIComponent(this.alt)">
            <div class="card-hover-placeholder text-white">
                <p class="font-bold text-sm uppercase">${p.genre}</p>
                <h4 class="text-2xl font-bold">${p.title}</h4>
                <div class="flex gap-3 text-xs opacity-70 mt-1">
                    <span>${p.dur}</span><span>Dir: ${p.dir}</span>
                </div>
            </div>
        </div>
    `;
}

function createSmallCard(p) {
    return `
        <div class="movie-card card-container min-w-[200px] aspect-video bg-[#111] rounded-lg overflow-hidden relative group cursor-pointer border border-white/5 hover:border-[#8024d1] transition-all" data-title="${p.title}">
            <img src="${p.card}" class="w-full h-full object-cover" alt="${p.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x168/222/555?text='+encodeURIComponent(this.alt)">
            <div class="card-hover-placeholder text-white">
                <p class="font-bold text-xs uppercase">${p.genre}</p>
                <h4 class="text-lg font-bold">${p.title}</h4>
                <div class="flex gap-2 text-xs opacity-70 mt-1">
                    <span>${p.dur}</span><span>Dir: ${p.dir}</span>
                </div>
            </div>
        </div>
    `;
}

function createBarItem(p) {
    return `
        <div class="movie-card bar-item w-full h-48 bg-[#111] rounded-lg mb-4 overflow-hidden relative group cursor-pointer border border-white/5 hover:border-[#8024d1] transition-all" data-title="${p.title}">
            <div class="flex items-center h-full p-6">
                <img src="${p.card}" class="w-24 h-36 object-cover rounded mr-6" alt="${p.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/96x144/222/555?text='+encodeURIComponent(this.alt)">
                <div class="flex-1 text-white">
                    <h4 class="text-2xl font-bold mb-2">${p.title}</h4>
                    <div class="flex items-center gap-4 text-sm opacity-80 mb-2">
                        <span class="px-3 py-1 bg-white/10 rounded-full">${p.genre}</span>
                        <span>${p.dur}</span>
                        <span>Dir: ${p.dir}</span>
                    </div>
                    <p class="text-sm opacity-70 line-clamp-2">${p.desc}</p>
                </div>
                <div class="text-[#8024d1] opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                    <span class="text-lg">View Details →</span>
                </div>
            </div>
        </div>
    `;
}

function loadArchive() {
    // Helper function to generate 10 widescreen placeholders per row
    const generateRowContent = (genreName) => {
        const filtered = archives.filter(i => i.genre === genreName);
        if (filtered.length === 0) return "";
        let items = [];
        for (let i = 0; i < 10; i++) {
            items.push(createCard(filtered[i % filtered.length]));
        }
        return items.join('');
    };

    // Render Mixed Recommended Row
    recRow.innerHTML = archives.map(p => createCard(p)).join('');

    // Render details page recommendations row (first 5 for compact look)
    if (detailsRecRow) {
        detailsRecRow.innerHTML = archives.slice(0, 5).map(p => createCard(p)).join('');
    }

    // Render Individual Genre Rows
    romanceRow.innerHTML = generateRowContent("Romance");
    actionRow.innerHTML = generateRowContent("Action");
    horrorRow.innerHTML = generateRowContent("Horror");
    comedyRow.innerHTML = generateRowContent("Comedy");
    thrillerRow.innerHTML = generateRowContent("Thriller");
    dramaRow.innerHTML = generateRowContent("Drama");
}

// --- 4. NAVIGATION & SEARCH LOGIC ---

function sideScroll(id, dir) {
    const el = document.getElementById(id);
    const amount = dir === 'right' ? 800 : -800;
    el.scrollBy({ left: amount, behavior: 'smooth' });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();

    if (term.length > 0) {
        // Search across all movies
        const results = archives.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.desc.toLowerCase().includes(term) ||
            p.cast.some(c => c.toLowerCase().includes(term)) ||
            p.tags.some(t => t.toLowerCase().includes(term)) ||
            p.genre.toLowerCase().includes(term) ||
            p.dir.toLowerCase().includes(term)
        );

        // Show search results page
        showSearchResults(results, term);
    } else {
        // If on home page, restore normal view
        if (!document.getElementById('home-content').classList.contains('hidden')) {
            loadArchive();
            [romanceRow, actionRow, horrorRow, comedyRow, thrillerRow, dramaRow].forEach(row => {
                row.parentElement.style.opacity = "1";
            });
        }
    }
});

function showSearchResults(results, searchTerm) {
    // Hide all other pages
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('my-list-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('movie-details-page').classList.add('hidden');
    document.getElementById('main-header').classList.remove('hidden');

    // Create or update search results page
    let searchPage = document.getElementById('search-results-page');
    if (!searchPage) {
        searchPage = document.createElement('div');
        searchPage.id = 'search-results-page';
        searchPage.className = 'min-h-screen bg-[#050505] pt-24 px-[5%]';
        document.body.appendChild(searchPage);
    }

    // Add loading state briefly
    searchPage.innerHTML = `
        <div class="text-center text-white py-20">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#8024d1] mb-4"></div>
            <p class="text-gray-400">Searching...</p>
        </div>
    `;

    // Simulate brief loading for better UX
    setTimeout(() => {
        if (results.length === 0) {
            searchPage.innerHTML = `
                <div class="text-center text-white py-20">
                    <div class="text-6xl mb-4">🔍</div>
                    <h1 class="text-4xl font-bold mb-4">No Results Found</h1>
                    <p class="text-xl text-gray-400 mb-4">We couldn't find any movies matching "${searchTerm}"</p>
                    <p class="text-gray-500 mb-8">Try searching for:</p>
                    <div class="flex flex-wrap justify-center gap-2 mb-8">
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Movie titles</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Genres (Action, Drama, etc.)</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Directors</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Keywords from descriptions</span>
                    </div>
                    <button onclick="showHome()" class="px-6 py-3 bg-[#8024d1] text-white rounded-lg hover:bg-[#6a1fb8] transition">Back to Home</button>
                </div>
            `;
        } else {
            searchPage.innerHTML = `
                <div class="mb-8">
                    <h1 class="text-4xl font-bold mb-2">Search Results</h1>
                    <p class="text-gray-400">Found ${results.length} result${results.length === 1 ? '' : 's'} for "${searchTerm}"</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    ${results.map(p => createCard(p)).join('')}
                </div>
                <div class="text-center mt-12">
                    <button onclick="showHome()" class="px-6 py-3 bg-[#8024d1] text-white rounded-lg hover:bg-[#6a1fb8] transition">Back to Home</button>
                </div>
            `;
        }
    }, 300);

    searchPage.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Click Visual Feedback (Brightness increase)
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.style.filter = 'brightness(1.5)');
    btn.addEventListener('mouseup', () => btn.style.filter = 'none');
});

loadArchive();
updateDetailsPage(currentMovie);

// --- 6. EVENT LISTENERS ---

// Navigation
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        if (page === 'home') showHome();
        else if (page === 'my-list') showMyList();
        else if (page === 'history') showHistory();
    });
});

// Search button
document.getElementById('search-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.trim()) {
        // If there's text, trigger search
        searchInput.dispatchEvent(new Event('input'));
    } else {
        // If empty, focus the input
        searchInput.focus();
    }
});

// Clear search button
document.getElementById('clear-search-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
});

// Show/hide clear button based on input
searchInput.addEventListener('input', () => {
    const clearBtn = document.getElementById('clear-search-btn');
    if (searchInput.value.trim()) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
});

// Enter key support for search
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (searchInput.value.trim()) {
            searchInput.dispatchEvent(new Event('input'));
        }
    }
});

// More info button
document.getElementById('more-info-btn').addEventListener('click', () => {
    showMovieDetails('Cry Machine');
});

// Scroll buttons
document.querySelectorAll('.scroll-arrow').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.dataset.row;
        const dir = e.target.dataset.dir;
        sideScroll(row, dir);
    });
});

// Movie cards (event delegation)
document.addEventListener('click', (e) => {
    if (e.target.closest('.movie-card')) {
        const title = e.target.closest('.movie-card').dataset.title;
        showMovieDetails(title);
    }
});

// Back buttons
document.getElementById('back-home-from-list').addEventListener('click', showHome);
document.getElementById('back-home-from-history').addEventListener('click', showHome);
document.getElementById('back-home-from-details').addEventListener('click', showHome);

// Add to list button
document.getElementById('add-to-list-btn').addEventListener('click', () => {
    if (currentMovie) {
        addToMyList(currentMovie.title);
    }
});

function showMyList() {
    const myListPage = document.getElementById('my-list-page');
    const content = myListPage.querySelector('.text-center');
    
    if (myList.length === 0) {
        content.innerHTML = `
            <h1 class="text-4xl font-bold mb-4">My List</h1>
            <p class="text-xl">Your list is empty.</p>
            <button id="back-home-from-list" class="mt-4 px-4 py-2 bg-[#8024d1] text-white rounded" aria-label="Back to home">Back to Home</button>
        `;
    } else {
        const movies = myList.map(title => archives.find(m => m.title === title)).filter(Boolean);
        content.innerHTML = `
            <h1 class="text-4xl font-bold mb-6">My List</h1>
            <div class="space-y-4 max-w-4xl mx-auto">
                ${movies.map(p => createBarItem(p)).join('')}
            </div>
            <button id="back-home-from-list" class="mt-8 px-4 py-2 bg-[#8024d1] text-white rounded" aria-label="Back to home">Back to Home</button>
        `;
    }
    
    // Re-attach event listener
    document.getElementById('back-home-from-list').addEventListener('click', showHome);
    
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('my-list-page').classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('movie-details-page').classList.add('hidden');
    const searchPage = document.getElementById('search-results-page');
    if (searchPage) searchPage.classList.add('hidden');
    document.getElementById('main-header').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function showHistory() {
    const historyPage = document.getElementById('history-page');
    const content = historyPage.querySelector('.text-center');
    
    if (history.length === 0) {
        content.innerHTML = `
            <h1 class="text-4xl font-bold mb-4">History</h1>
            <p class="text-xl">No history available.</p>
            <button id="back-home-from-history" class="mt-4 px-4 py-2 bg-[#8024d1] text-white rounded" aria-label="Back to home">Back to Home</button>
        `;
    } else {
        const movies = history.map(title => archives.find(m => m.title === title)).filter(Boolean);
        content.innerHTML = `
            <h1 class="text-4xl font-bold mb-6">History</h1>
            <div class="space-y-4 max-w-4xl mx-auto">
                ${movies.map(p => createBarItem(p)).join('')}
            </div>
            <button id="back-home-from-history" class="mt-8 px-4 py-2 bg-[#8024d1] text-white rounded" aria-label="Back to home">Back to Home</button>
        `;
    }
    
    // Re-attach event listener
    document.getElementById('back-home-from-history').addEventListener('click', showHome);
    
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('history-page').classList.remove('hidden');
    document.getElementById('my-list-page').classList.add('hidden');
    document.getElementById('movie-details-page').classList.add('hidden');
    const searchPage = document.getElementById('search-results-page');
    if (searchPage) searchPage.classList.add('hidden');
    document.getElementById('main-header').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('home-content').classList.remove('hidden');
    document.getElementById('my-list-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('movie-details-page').classList.add('hidden');
    const searchPage = document.getElementById('search-results-page');
    if (searchPage) searchPage.classList.add('hidden');
    document.getElementById('main-header').classList.remove('hidden');
    window.scrollTo(0, 0);
}