document.addEventListener('DOMContentLoaded', () => {
    // Dummy Data for the Tableau Projects
    const projects = [
        {
            id: 6,
            title: "Phoenix is Only Getting Hotter",
            category: "Urban Heat",
            image: "content/images/project-6-dashboard.png",
            modalImage: "content/images/project-6-modal.png",
            description: "<p>This is a fully interactive infographic — not just a chart you look at, but one you control. Set against a warm cream background with a pastel palette pulled from a desert sunrise, it's designed to be felt as much as read.</p><p>A single degree counter drives everything. Adjust it and the entire infographic responds at once — the scatter plot, the Top 10 table, the 85-year streak bars all update live. On the scatter plot, days that meet the threshold fill in solid; days below stay hollow. Lower the counter and watch those filled dots bleed into spring and fall — seasons that historically never saw that kind of heat. That moment of recognition is what the whole infographic is built around.</p><p>In 2024, Phoenix logged 133 days at or above 100°F, tied with 2020 for the all-time record. The streak chart stretching back to 1941 makes the direction of travel impossible to argue with.</p>",
            software: [
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" }
            ],
            skills: ["API Integration", "Data Engineering", "Climate Science"]
        },
        {
            id: 5,
            title: "Yakima County's Water Crisis",
            category: "Water Crisis",
            image: "content/images/project-5-pdsi.png",
            description: "<p>The Yakima Basin in central Washington feeds some of the most productive farmland in the country — apples, hops, wine grapes — and it runs almost entirely on snowmelt stored in five mountain reservoirs. In recent years, those reservoirs have been failing to refill. This project tells that story through three visualizations, and was published by the Center for Environmental Law & Policy.</p><p>A geographic map shows all five reservoirs at once, represented as glass containers — and most of them are nearly empty, the largest sitting at just 16% capacity. A 130-year chart of Cle Elum Reservoir reveals what normal used to look like: reliable seasonal swings, tanks that reliably topped off each spring. The recent years sit far below those historical lines. And a color-coded drought index stretching back to 1893 shows the unmistakable shift: after 2013, the region entered a period of extended, worsening drought that shows no sign of reverting.</p><p>Taken together, the three charts make a case that's hard to argue with — this isn't a bad year, or even a bad decade. It's a new baseline.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Mapbox", src: "https://cdn.simpleicons.org/mapbox/4264FB" }
            ],
            skills: ["Illustrative Design", "Community Engagement"]
        },
        {
            id: 2,
            title: "Valley of the Heat",
            category: "Urban Climate",
            image: "content/images/project-2-dashboard.png",
            description: "<p>Phoenix has always been hot — but there's a difference between desert heat and something more permanent. This visualization was built to show that difference in a way that's impossible to dismiss.</p><p>Arranged in a circle like the face of a clock, each ray represents a single year from 1950 to 2025. Years that ran cooler than the historical average glow blue; years that ran hotter burn red. Spin through the outer edge of the circle and you're looking at the last decade — and it's almost entirely red. The cool blues that dominate the 1950s through 1980s give way to an overwhelming shift that begins in the 1990s and never reverses.</p><p>The circular format isn't just aesthetic — it mirrors the shape of the sun itself, grounding the data in something visceral. You don't need to read a single number to understand what Phoenix's climate has become.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" }
            ],
            skills: ["Data Visualization", "Climate Science", "Data Cleaning"]
        },
        {
            id: 1,
            title: "Polar Sea Ice in Decline",
            category: "Climate Analysis",
            image: "content/images/project-1-dashboard.png",
            description: "<p>The polar ice caps are often talked about together, but their stories are strikingly different — and this visualization makes that clear at a glance.</p><p>Two side-by-side panels track every month of sea ice data from 1979 to 2024, with each dot colored on a spectrum from deep blue (more ice than average) to deep red (far less). The Arctic panel tells a story of relentless, unbroken decline — barely a blue dot to be found after the mid-2000s. The Antarctic panel looks almost normal for decades, then something breaks around 2016: a sudden, dramatic collapse that scientists are still working to fully explain.</p><p>By placing both hemispheres on the same scale and color scheme, the dashboard lets you compare not just the trends, but the pace and character of change at each pole — and the uncomfortable takeaway is that neither is recovering.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Excel", src: "https://img.icons8.com/?size=96&id=y5utoW4FUM92&format=png" }
            ],
            skills: ["Data Analysis", "Climate Science", "Data Visualization"]
        },
        {
            id: 3,
            title: "AZ County Temp Anomalies",
            category: "Statewide Climate",
            image: "content/images/project-3-dashboard.png",
            description: "<p>A common pushback on Phoenix's rising temperatures goes like this: it's not climate change, it's just all the concrete and development — the urban heat island effect. This project was built to answer that argument directly.</p><p>By mapping temperature anomalies across all 15 Arizona counties — from dense Maricopa to rural Greenlee and Navajo — the data tells a clear and consistent story: every county is warming, including those with almost no urban development at all. The same blue-to-red shift that defines Phoenix appears in the remote, sparsely populated counties of the state's interior and high desert.</p><p>The result is a statewide picture that removes the escape hatch. Whether you're looking at a city of five million or a county with fewer than 10,000 residents, the trend is the same — and that uniformity is exactly the point.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" }
            ],
            skills: ["Data Visualization", "Climate Science", "Community Engagement"]
        },
        {
            id: 4,
            title: "Antarctica Icebergs",
            category: "Iceberg Tracking",
            image: "content/images/project-4-dashboard.png",
            description: "<p>Some of the largest moving objects on Earth are icebergs — some bigger than entire cities — and yet their journeys across the Southern Ocean go largely unnoticed. This project set out to change that.</p><p>The US National Ice Center has been quietly tracking these giants for decades, logging their positions, sizes, and movements in hundreds of individual data files scattered across a government website. By building an automated system to collect and unify all 547 of those files, every tracked iceberg from 2014 to 2025 could finally be seen in one place.</p><p>The result is an interactive map where each colored line traces a single iceberg's path — drifting, spinning, breaking apart, and eventually disappearing into warmer waters. Some loop around the continent for years, caught in circular currents. Others shoot northward and vanish within months. It's part data project, part portrait of an environment in motion.</p>",
            software: [
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" }
            ],
            skills: ["Web Scraping", "Data Engineering", "Geospatial Analysis"]
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const deeperDiveLink = document.getElementById('deeper-dive-link');
    const modalSkills = document.getElementById('modal-skills');
    const closeModalBtn = document.getElementById('close-modal');

    // Generate Gallery Items — Bento Grid with floating animation
    const floatDurations = [4.2, 3.8, 5.1, 4.6, 3.5, 4.9];
    const floatDelays    = [0, -1.4, -2.8, -0.7, -3.5, -1.9];

    if (galleryContainer) {
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');

            if (index === 0) item.classList.add('featured');

            item.style.setProperty('--float-duration', `${floatDurations[index] || 4}s`);
            item.style.setProperty('--float-delay',    `${floatDelays[index] || 0}s`);

            item.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="gallery-item-content">
                    <span>${project.category}</span>
                    <h3>${project.title}</h3>
                </div>
            `;

            item.addEventListener('click', () => {
                openModal(project);
            });

            galleryContainer.appendChild(item);
        });
    }

    function openModal(project) {
        if (!modal) return;
        modalImage.src = project.modalImage || project.image;
        modalTitle.textContent = project.title;
        if (deeperDiveLink) deeperDiveLink.href = `content/project-${project.id}.html`;

        modalDescription.innerHTML = project.description || '<p>No detailed description available.</p>';

        // Dynamically populate modal-skills
        if (modalSkills && project.software && project.skills) {
            let skillsHTML = '';

            project.software.forEach(sw => {
                skillsHTML += `
                <div class="modal-software-icon">
                    <div class="icon-face">
                        <img src="${sw.src}" alt="${sw.name}">
                    </div>
                    <div class="icon-title">${sw.name}</div>
                </div>`;
            });

            project.skills.forEach(skill => {
                skillsHTML += `<span class="modal-skill-tag">${skill}</span>`;
            });

            modalSkills.innerHTML = skillsHTML;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Menu Drawer Logic
    const menuToggle = document.getElementById('menu-toggle');
    const aboutDrawer = document.getElementById('about-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer');

    function toggleMenu() {
        if (aboutDrawer) aboutDrawer.classList.toggle('open');
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleMenu);

    // Close when a nav link is clicked
    const drawerLinks = document.querySelectorAll('.drawer-link');
    if (drawerLinks && aboutDrawer) {
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                aboutDrawer.classList.remove('open');
            });
        });
    }

    // Close on click outside drawer
    document.addEventListener('click', (e) => {
        if (aboutDrawer && aboutDrawer.classList.contains('open') &&
            !aboutDrawer.contains(e.target) &&
            (!menuToggle || !menuToggle.contains(e.target))) {
            aboutDrawer.classList.remove('open');
        }
    });

    // Smooth Scroll
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
