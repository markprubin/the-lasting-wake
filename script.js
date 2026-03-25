document.addEventListener('DOMContentLoaded', () => {
    // Dummy Data for the Tableau Projects
    const projects = [
        {
            id: 1,
            title: "Global Temperature Anomalies",
            category: "Heat Index",
            image: "https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?q=80&w=1200&auto=format&fit=crop",
            description: "<p>An interactive dashboard revealing surface temperature spikes across the globe over the last 50 years.</p><p>This visualization showcases the alarming rate of warming in polar regions compared to equatorial zones.</p><p>This visualization showcases the alarming rate of warming in polar regions compared to equatorial zones.</p><p>This visualization showcases the alarming rate of warming in polar regions compared to equatorial zones.</p>",
            software: [
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "SQL", src: "https://img.icons8.com/?size=96&id=J6KcaRLsTgpZ&format=png" }
            ],
            skills: ["Data Analysis", "Climate Science", "Web Scraping"]
        },
        {
            id: 2,
            title: "Sea Level Rise Projections",
            category: "Oceanography",
            image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1200&auto=format&fit=crop",
            description: "<p>A comprehensive mapping of coastal vulnerabilities.</p><p>This Tableau visualization explores different emission scenarios and their consequent impact on sea levels by the year 2100.</p>",
            software: [
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
                { name: "Excel", src: "https://img.icons8.com/?size=96&id=y5utoW4FUM92&format=png" },
                { name: "Datawrapper", src: "https://www.google.com/s2/favicons?domain=datawrapper.de&sz=64" }
            ],
            skills: ["Data Visualization", "Data Cleaning"]
        },
        {
            id: 3,
            title: "Deforestation Impact",
            category: "Land Use",
            image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
            description: "<p>Tracking carbon sink depletion in the Amazon and Congo basins.</p><p>This visualization highlights the correlation between forest loss and localized temperature spikes.</p>",
            software: [
                { name: "Flourish", src: "https://www.google.com/s2/favicons?domain=flourish.studio&sz=64" },
                { name: "QGIS", src: "https://cdn.simpleicons.org/qgis/589632" }
            ],
            skills: ["Community Engagement", "Data Analytics"]
        },
        {
            id: 4,
            title: "Renewable Energy Adoption",
            category: "Solutions",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
            description: "<p>A positive outlook mapping the exponential growth of solar and wind energy production globally.</p><p>Analyzing the shift towards sustainable power grids.</p>",
            software: [
                { name: "D3.js", src: "https://img.icons8.com/?size=96&id=aRMIsPaPXPEh&format=png" },
                { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" }
            ],
            skills: ["Project Management", "Business Analytics", "Data Visualization"]
        },
        {
            id: 5,
            title: "Extreme Weather Events",
            category: "Climate Impact",
            image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1200&auto=format&fit=crop",
            description: "<p>Visualizing the frequency and intensity of hurricanes, droughts, and wildfires.</p><p>A stark look at the human and economic cost of climate instability over recent decades.</p>",
            software: [
                { name: "Canva", src: "https://img.icons8.com/fluency/96/canva.png" },
                { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" }
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
