document.addEventListener('DOMContentLoaded', () => {
    // Dummy Data for the Tableau Projects
    const projects = [
        {
            id: 1,
            title: "Polar Sea Ice in Decline",
            category: "Climate Analysis",
            image: "content/images/project-1-dashboard.png",
            description: "<p>A stacked dual-panel dot plot comparing monthly sea ice extent anomalies at both poles from 1979 to 2024, revealing contrasting decline patterns — the Arctic's steady erosion versus Antarctica's sudden post-2016 collapse.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Excel", src: "https://img.icons8.com/?size=96&id=y5utoW4FUM92&format=png" }
            ],
            skills: ["Data Analysis", "Climate Science", "Data Visualization"]
        },
        {
            id: 2,
            title: "Valley of the Heat",
            category: "Urban Climate",
            image: "content/images/project-2-dashboard.png",
            description: "<p>A striking circular visualization that tells Phoenix's warming story at a glance. Each ray represents one year from 1950 to 2025 — blue for cooler, red for hotter. The pattern is unmistakable.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" }
            ],
            skills: ["Data Visualization", "Climate Science", "Data Cleaning"]
        },
        {
            id: 3,
            title: "AZ County Temp Anomalies",
            category: "Statewide Climate",
            image: "content/images/project-3-dashboard.png",
            description: "<p>An interactive visualization showing temperature patterns for all 15 Arizona counties from 1950 to 2025, directly countering the misconception that warming is limited to urban areas.</p>",
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
            description: "<p>An automated data pipeline that scraped 547 government CSV files to track and visualize the journeys of massive Antarctic icebergs across the Southern Ocean from 2014 to 2025.</p>",
            software: [
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" }
            ],
            skills: ["Web Scraping", "Data Engineering", "Geospatial Analysis"]
        },
        {
            id: 5,
            title: "Yakima County's Water Crisis",
            category: "Water Crisis",
            image: "content/images/project-5-pdsi.png",
            description: "<p>Three complementary visualizations telling the story of the Yakima Basin's worst water shortage in decades — published by the Center for Environmental Law & Policy.</p><p>A reservoir map showing five major reservoirs at critically low levels, 130 years of Cle Elum storage data revealing a pattern of consistent under-filling, and a Palmer Drought Severity Index chart showing the region's sharp shift toward extreme drought after 2013.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Mapbox", src: "https://cdn.simpleicons.org/mapbox/4264FB" }
            ],
            skills: ["Illustrative Design", "Community Engagement"]
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

    // Generate Gallery Items with Scattering effect
    if (galleryContainer) {
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');

            // Organic scattering logic
            // Random Y offset between -40px and 60px
            const offsetY = Math.floor(Math.random() * 100) - 40;
            // Random slight rotation between -3deg and 3deg
            const rotate = (Math.random() * 6 - 3).toFixed(1);

            item.style.setProperty('--offsetY', `${offsetY}px`);
            item.style.setProperty('--rotate', `${rotate}deg`);

            // Provide staggered entry animation delay if desired
            item.style.animationDelay = `${index * 0.1}s`;

            item.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="gallery-item-content">
                    <span>${project.category}</span>
                    <h3>${project.title}</h3>
                </div>
            `;

            // Click Event to Open Modal
            item.addEventListener('click', () => {
                openModal(project);
            });

            galleryContainer.appendChild(item);
        });
    }

    function openModal(project) {
        if (!modal) return;
        modalImage.src = project.image;
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
