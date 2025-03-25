document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            duration: 0.1,
            x: e.clientX - 10,
            y: e.clientY - 10
        });
    });

    document.querySelectorAll('.work-item, .team-member, .btn-outline, .social-link').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, background: '#00ffcc' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, background: '#ff007a' });
        });
    });

    // Navbar Animation
    gsap.to('.navbar', {
        background: 'rgba(26, 26, 26, 1)',
        padding: '1rem 3rem',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.nav-overlay', {
        opacity: 0.4,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Hero Section Animation
    gsap.from('.animated-text', {
        duration: 3,
        y: '120%',
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.3
    });

    gsap.to('.subtitle', {
        duration: 2,
        opacity: 1,
        y: -40,
        delay: 1.5,
        ease: 'power3.out'
    });

    gsap.from('.scroll-indicator', {
        duration: 1.5,
        opacity: 0,
        delay: 2.5,
        repeat: -1,
        yoyo: true
    });

    // Geometric Elements
    const geometric = document.querySelector('.geometric-overlay');
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.cssText = `
            position: absolute;
            width: ${50 + Math.random() * 250}px;
            height: ${50 + Math.random() * 250}px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            transform: rotate(${Math.random() * 360}deg);
        `;
        geometric.appendChild(shape);

        gsap.to(shape, {
            duration: 20 + Math.random() * 15,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotation: Math.random() * 1440,
            scale: 1 + Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // About Section Animation
    gsap.from('.about-section .section-title', {
        duration: 2.5,
        x: -300,
        opacity: 0,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%'
        }
    });

    gsap.from('.lead, .stat-item', {
        duration: 2,
        y: 120,
        opacity: 0,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%'
        }
    });

    // Stats Counter
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        gsap.to(stat, {
            duration: 2.5,
            innerHTML: target,
            roundProps: 'innerHTML',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.stats',
                start: 'top 80%'
            }
        });
    });

    // Floating Shapes in About
    const floatingShapes = document.querySelector('.floating-shapes');
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.cssText = `
            position: absolute;
            width: ${30 + Math.random() * 100}px;
            height: ${30 + Math.random() * 100}px;
            border-radius: 50%;
        `;
        floatingShapes.appendChild(shape);

        gsap.to(shape, {
            duration: 10 + Math.random() * 5,
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Parallax Effect
    gsap.to('.parallax-bg', {
        y: '-60%',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2.5
        }
    });

    // Works Section Animation
    gsap.from('.work-item', {
        duration: 2.5,
        y: 200,
        opacity: 0,
        stagger: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top 80%'
        }
    });

    // Timeline Section Animation
    gsap.from('.timeline-item', {
        duration: 2,
        x: (i) => i % 2 === 0 ? -150 : 150,
        opacity: 0,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 80%'
        }
    });

    // Team Section Animation
    gsap.from('.team-bg', {
        duration: 2.5,
        scale: 1.3,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%'
        }
    });

    gsap.from('.team-member', {
        duration: 2,
        opacity: 0,
        y: 100, /* Simplified to vertical animation to avoid overlap */
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%'
        }
    });

    // Contact Section Animation
    gsap.from('.contact-section .section-title, .contact-section .lead, .contact-section .btn, .social-link', {
        duration: 2.5,
        y: 150,
        opacity: 0,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        }
    });
});