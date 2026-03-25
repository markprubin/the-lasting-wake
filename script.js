document.addEventListener('DOMContentLoaded', () => {
    // Dummy Data for the Tableau Projects
    const projects = [
        {
            id: 1,
            title: "Global Temperature Anomalies",
            category: "Heat Index",
            image: "https://picsum.photos/seed/climate1/800/600",
            tableauLink: "#"
        },
        {
            id: 2,
            title: "Sea Level Rise Projections",
            category: "Oceanography",
            image: "https://picsum.photos/seed/climate2/800/600",
            tableauLink: "#"
        },
        {
            id: 3,
            title: "Deforestation Impact",
            category: "Land Use",
            image: "https://picsum.photos/seed/climate3/800/600",
            tableauLink: "#"
        },
        {
            id: 4,
            title: "Renewable Energy Adoption",
            category: "Solutions",
            image: "https://picsum.photos/seed/climate4/800/600",
            tableauLink: "#"
        },
        {
            id: 5,
            title: "Extreme Weather Events",
            category: "Climate Impact",
            image: "https://picsum.photos/seed/climate5/800/600",
            tableauLink: "#"
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
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

    async function openModal(project) {
        if (!modal) return;
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalLink.href = project.tableauLink;
        
        modalDescription.innerHTML = '<p style="opacity: 0.5;">Loading description...</p>';
        
        modal.classList.add('active');

        try {
            const response = await fetch(`content/project-${project.id}.html`);
            if (response.ok) {
                const htmlText = await response.text();
                modalDescription.innerHTML = htmlText;
            } else {
                modalDescription.innerHTML = '<p>No detailed description available.</p>';
            }
        } catch (error) {
            modalDescription.innerHTML = '<p>Error loading description.</p>';
        }
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
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
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
