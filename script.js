// Easter Egg: Console Message
console.log("%c🚀 You found the builder.", "color: #3b82f6; font-size: 16px; font-weight: bold;");

class SauravStudio {
    constructor() {
        this.accentColors = [
            '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'
        ];
        this.currentAccent = 0;
        this.init();
    }

    init() {
        this.loader();
        this.navbar();
        this.typingEffect();
        this.scrollEffects();
        this.statsCounter();
        this.tiltEffect();
        this.scrollReveal();
        this.progressBar();
        this.backToTop();
        this.easterEggs();
        this.mobileMenu();
        this.copyEmail();
        this.logoClick();
    }

    loader() {
        const loader = document.querySelector('.loader');
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1000);
        });
    }

    navbar() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            
            if (scroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = scroll;
        });

        // Navbar links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
                this.setActiveLink(link);
            });
        });
    }

    setActiveLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    typingEffect() {
        const textElement = document.getElementById('typedText');
        const texts = ['Creator', 'Developer', 'Editor', 'Dream Builder'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 150;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    scrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    statsCounter() {
        const stats = document.querySelectorAll('.stat-number[data-target]');
        
        const animateStats = () => {
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                const count = parseInt(stat.textContent);
                const increment = target / 100;
                
                if (count < target) {
                    stat.textContent = Math.ceil(count + increment);
                    requestAnimationFrame(animateStats);
                } else {
                    stat.textContent = target;
                }
            });
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelector('.stats-grid').addEventListener('mouseenter', animateStats);
    }

    tiltEffect() {
        const tiltCards = document.querySelectorAll('[data-tilt]');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    scrollReveal() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        let index = 0;

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 200);
                    index++;
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => timelineObserver.observe(item));
    }

    progressBar() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            document.querySelector('.progress').style.width = progress + '%';
        });
    }

    backToTop() {
        const btn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    easterEggs() {
        // Double click hero title confetti
        const heroTitle = document.getElementById('heroTitle');
        let clickCount = 0;
        
        heroTitle.addEventListener('dblclick', () => {
            this.createConfetti();
            heroTitle.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            setTimeout(() => {
                heroTitle.style.background = '';
            }, 1000);
        });

        // Mouse parallax
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            document.querySelectorAll('.floating-circle').forEach((circle, index) => {
                const speed = (index + 1) * 0.02;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            document.body.appendChild(confetti);
            
            const anim = confetti.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${Math.random() * 500 - 250}px, ${Math.random() * 500 - 250}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            anim.onfinish = () => confetti.remove();
        }
    }

    mobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    copyEmail() {
        const copyBtn = document.querySelector('.copy-btn[data-copy="email"]');
        const email = document.getElementById('email');
        
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(email.textContent);
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }

    logoClick() {
        const logoS = document.getElementById('logoS');
        logoS.addEventListener('click', () => {
            this.currentAccent = (this.currentAccent + 1) % this.accentColors.length;
            document.documentElement.style.setProperty('--accent-primary', this.accentColors[this.currentAccent]);
            
            // Glow effect
            logoS.style.textShadow = `0 0 30px ${this.accentColors[this.currentAccent]}40`;
            setTimeout(() => {
                logoS.style.textShadow = '';
            }, 500);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SauravStudio();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in class to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for fade-in
document.querySelectorAll('section').forEach(section => {
    fadeObserver.observe(section);
});
