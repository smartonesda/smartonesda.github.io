// Init Icons & AOS
lucide.createIcons();
AOS.init({ duration: 800, once: true, offset: 50 });

// --- NAVBAR SCROLL & SPY ---
// --- NAVBAR SCROLL & SPY ---
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Throttled Scroll Event for Navbar Background
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 20) {
                navbar.classList.add('glass-red', 'py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.remove('glass-red', 'py-2');
                navbar.classList.add('py-4');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Optimized Scroll Spy using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px', // Adjusted for better centering detection
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                // Reset all links
                link.classList.remove('text-primary', 'font-bold', 'drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]');
                link.classList.add('text-slate-300');

                // Highlight active link
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.remove('text-slate-300');
                    link.classList.add('text-primary', 'font-bold', 'drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth Scroll with Offset
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// --- MOBILE MENU ---
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => menu.classList.add('hidden')));

// --- PROJECT DATA & FILTER ---
const PROJECTS = [
    {
        id: 1,
        title: "Antartika E-Voting",
        category: "Web App",
        desc: "Secure voting platform for student council elections. Real-time counting.",
        tech: ["PHP", "Bootstrap", "Security"],
        img: "code-2",
        repo: "https://github.com/smartonesda/evoting",
        demo: "#"
    },
    {
        id: 2,
        title: "Game Dev Workshop",
        category: "Game",
        desc: "Assets and code from our annual Unity game development workshop.",
        tech: ["C#", "Unity", "3D"],
        img: "gamepad-2",
        repo: "https://github.com/smartonesda/gamedev-workshop",
        demo: "#"
    },
    {
        id: 3,
        title: "IoT Smart Class",
        category: "IoT",
        desc: "Controlling classroom lights and AC using ESP32 and a web dashboard.",
        tech: ["C++", "IoT", "MQTT"],
        img: "cpu",
        repo: "https://github.com/smartonesda/iot-class",
        demo: "#"
    },
    {
        id: 4,
        title: "Alumni Connect",
        category: "Mobile",
        desc: "Mobile app for connecting alumni and sharing job opportunities.",
        tech: ["Flutter", "Dart", "Firebase"],
        img: "smartphone",
        repo: "https://github.com/smartonesda/alumni-app",
        demo: "#"
    },
    {
        id: 5,
        title: "Library System",
        category: "Web App",
        desc: "Modern digital library management with barcode scanning.",
        tech: ["Laravel", "Tailwind", "MySQL"],
        img: "book-open",
        repo: "https://github.com/smartonesda/library",
        demo: "#"
    },
    {
        id: 6,
        title: "Portfolio Generator",
        category: "Web App",
        desc: "Generate professional CVs and portfolios for students instantly.",
        tech: ["React", "NodeJS", "PDFKit"],
        img: "layout",
        repo: "https://github.com/smartonesda/portfolio-gen",
        demo: "#"
    }
];

const grid = document.getElementById('project-grid');
const filters = document.querySelectorAll('.filter-btn');

function render(filter) {
    grid.innerHTML = '';
    const data = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    data.forEach((p, i) => {
        grid.innerHTML += `
        <div class="group bg-dark-950 border border-dark-800 rounded-lg overflow-hidden hover:border-red-900/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20" data-aos="fade-up" data-aos-delay="${i * 100}">
            <!-- Card Header (Visual) -->
            <div class="h-48 bg-dark-900/50 relative flex items-center justify-center overflow-hidden">
                <!-- Grid Pattern -->
                <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px;"></div>
                
                <!-- Icon -->
                <i data-lucide="${p.img}" class="text-slate-700 w-20 h-20 group-hover:text-red-600 transition-all duration-500 transform group-hover:scale-110"></i>
                
                <!-- Category Badge (Red Tag) -->
                <div class="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.6)]">
                    ${p.category}
                </div>
            </div>

            <!-- Card Body -->
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">${p.title}</h3>
                <p class="text-slate-400 text-sm mb-6 leading-relaxed min-h-[48px]">${p.desc}</p>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-8">
                    ${p.tech.map(t => `<span class="text-[10px] font-mono bg-dark-900 text-slate-400 px-2 py-1 rounded border border-slate-800">${t}</span>`).join('')}
                </div>

                <!-- Footer / Actions -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
                    <a href="${p.repo}" target="_blank" class="flex items-center gap-2 text-sm text-slate-300 hover:text-white font-medium transition-colors group/link">
                        View Code <i data-lucide="github" class="w-4 h-4 text-slate-500 group-hover/link:text-white transition-colors"></i>
                    </a>
                    <a href="${p.demo}" target="_blank" class="flex items-center gap-2 text-sm text-slate-300 hover:text-white font-medium transition-colors group/link">
                        Live Demo <i data-lucide="external-link" class="w-4 h-4 text-slate-500 group-hover/link:text-white transition-colors"></i>
                    </a>
                </div>
            </div>
        </div>`;
    });
    lucide.createIcons();
}

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.filter);
    });
});

render('All');
