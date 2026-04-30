// Scroll progress bar
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 100;
    progress.style.width = pct + '%';
}, { passive: true });

// Staggered section reveal on scroll
const sections = document.querySelectorAll('.section');
const delays = [0, 0.05, 0.1, 0.15, 0.2, 0.25];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.delay) || 0;
            entry.target.style.animationDelay = (delays[idx] || 0) + 's';
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

sections.forEach(s => observer.observe(s));
