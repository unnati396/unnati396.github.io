const ICONS = {
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
};

function icon(name) { return ICONS[name] || ''; }
function esc(s) { return s; }

function renderHero(d, el) {
    const stats = d.stats.map((s, i) => {
        const divider = i < d.stats.length - 1 ? '<div class="stat-divider"></div>' : '';
        return `<div class="stat">
            <span class="stat-value" data-count="${s.value}">0</span><span class="stat-suffix">${s.suffix}</span>
            <span class="stat-label">${s.label}</span>
        </div>${divider}`;
    }).join('');

    const actions = d.actions.map(a => {
        const dl = a.download ? ' download target="_blank"' : '';
        const ico = a.download ? `<span class="btn-icon">${icon('download')}</span>` : '';
        return `<a href="${a.href}" class="btn btn-${a.variant}"${dl}>${ico}${a.text}</a>`;
    }).join('');

    el.innerHTML = `
        <div class="hero-badge fade-up">${d.badge}</div>
        <h1 class="hero-name fade-up" style="--delay:0.1s">${d.name}</h1>
        <p class="hero-title fade-up" style="--delay:0.2s">${d.title}</p>
        <p class="hero-desc fade-up" style="--delay:0.3s">${d.description}</p>
        <div class="hero-actions fade-up" style="--delay:0.4s">${actions}</div>
        <div class="hero-stats fade-up" style="--delay:0.5s">${stats}</div>`;
}

function renderAbout(d, el) {
    const paras = d.paragraphs.map(p => `<p>${p}</p>`).join('');
    const highlights = d.highlights.map(h => `
        <div class="highlight-card">
            <div class="highlight-icon">${icon(h.icon)}</div>
            <h3>${h.title}</h3>
            <p>${h.description}</p>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">01</span><h2 class="section-title">About Me</h2></div>
        <div class="about-grid">
            <div class="about-text fade-up">${paras}</div>
            <div class="about-highlights fade-up">${highlights}</div>
        </div>`;
}

function renderScale(d, el) {
    const cards = d.items.map(item => `
        <div class="scale-card fade-up">
            <span class="scale-value">${item.value}</span>
            <span class="scale-label">${item.label}</span>
            <span class="scale-sub">${item.sub}</span>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-header fade-up" style="text-align:center">
            <h2 class="section-title">${d.heading}</h2>
        </div>
        <div class="scale-grid">${cards}</div>`;
}

function renderExperience(items, el) {
    const timeline = items.map((item, i) => {
        const isLast = i === items.length - 1;
        const dot = item.active
            ? '<div class="timeline-dot active"></div>'
            : '<div class="timeline-dot"></div>';
        const line = !isLast ? '<div class="timeline-line"></div>' : '';
        const note = item.companyNote ? ` <span class="timeline-note">${item.companyNote}</span>` : '';
        const summary = item.summary ? `<p class="timeline-summary">${item.summary}</p>` : '';

        let progression = '';
        if (item.roleProgression.length) {
            const steps = item.roleProgression.map(r =>
                `<div class="role-step"><span class="role-badge">${r.years}</span><span>${r.desc}</span></div>`
            ).join('');
            progression = `<div class="role-progression">${steps}</div>`;
        }

        let bullets = '';
        if (item.bullets.length) {
            bullets = '<ul class="timeline-list">' +
                item.bullets.map(b => `<li>${b}</li>`).join('') +
                '</ul>';
        }

        let tech = '';
        if (item.tech.length) {
            tech = '<div class="timeline-tech">' +
                item.tech.map(t => `<span class="tech-tag">${t}</span>`).join('') +
                '</div>';
        }

        return `<div class="timeline-item fade-up">
            <div class="timeline-marker">${dot}${line}</div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-role">${item.role}</h3>
                        <div class="timeline-company">${item.company}${note} <span class="timeline-location">· ${item.location}</span></div>
                    </div>
                    <span class="timeline-date">${item.date}</span>
                </div>
                ${summary}${progression}${bullets}${tech}
            </div>
        </div>`;
    }).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">02</span><h2 class="section-title">Experience</h2></div>
        <div class="timeline">${timeline}</div>`;
}

function renderProjects(items, el) {
    const cards = items.map(p => {
        const cls = p.featured ? 'project-card featured fade-up' : 'project-card fade-up';
        const metrics = p.metrics.map(m =>
            `<div class="metric"><span class="metric-value">${m.value}</span><span class="metric-label">${m.label}</span></div>`
        ).join('');
        const tech = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        return `<div class="${cls}">
            <div class="project-label">${p.label}</div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-metrics">${metrics}</div>
            <div class="project-tech">${tech}</div>
        </div>`;
    }).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">03</span><h2 class="section-title">Notable Projects</h2></div>
        <div class="projects-grid">${cards}</div>`;
}

function renderSkills(items, el) {
    const groups = items.map(g => {
        const tags = g.tags.map(t =>
            `<span class="skill-tag${t.primary ? ' primary' : ''}">${t.name}</span>`
        ).join('');
        return `<div class="skill-group fade-up">
            <h3 class="skill-group-title">${icon(g.icon) ? `<span class="skill-icon">${icon(g.icon)}</span>` : ''}${g.title}</h3>
            <div class="skill-tags">${tags}</div>
        </div>`;
    }).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">04</span><h2 class="section-title">Technical Skills</h2></div>
        <div class="skills-grid">${groups}</div>`;
}

function renderOSS(items, el) {
    const cards = items.map(p => {
        const isLink = !!p.url;
        const tag = isLink ? 'a' : 'div';
        const linkAttrs = isLink ? ` href="${p.url}" target="_blank" rel="noopener noreferrer"` : '';
        const externalIcon = isLink ? `<span class="oss-external">${icon('external')}</span>` : '';
        const cardIcon = isLink ? icon('doc') : icon('star');
        const tech = p.tech.map(t => `<span>${t}</span>`).join('');

        return `<${tag}${linkAttrs} class="oss-card fade-up">
            <div class="oss-card-header"><span class="oss-icon">${cardIcon}</span>${externalIcon}</div>
            <h3 class="oss-title">${p.title}</h3>
            <p class="oss-desc">${p.description}</p>
            <div class="oss-tech">${tech}</div>
        </${tag}>`;
    }).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">05</span><h2 class="section-title">Open Source & Side Projects</h2></div>
        <div class="oss-grid">${cards}</div>`;
}

function renderAwards(items, el) {
    const cards = items.map(a => `
        <div class="award-card fade-up">
            <div class="award-icon">${icon(a.icon)}</div>
            <div class="award-content">
                <h3>${a.title}</h3>
                <p>${a.org}</p>
                <span class="award-desc">${a.description}</span>
            </div>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">06</span><h2 class="section-title">Awards & Recognition</h2></div>
        <div class="awards-grid">${cards}</div>`;
}

function renderTestimonials(items, el) {
    const cards = items.map(t => `
        <div class="testimonial-card fade-up">
            <div class="testimonial-quote"><span class="quote-icon">${icon('quote')}</span></div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.initials}</div>
                <div><strong>${t.name}</strong><span>${t.role}</span></div>
            </div>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">07</span><h2 class="section-title">What People Say</h2></div>
        <div class="testimonials-grid">${cards}</div>`;
}

function renderContact(d, el) {
    const links = d.links.map(l => `
        <a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''} class="contact-card">
            ${icon(l.type)}
            <span class="contact-label">${l.label}</span>
            <span class="contact-value">${l.value}</span>
        </a>`).join('');

    el.innerHTML = `
        <div class="section-header fade-up"><span class="section-tag">08</span><h2 class="section-title">Let's Connect</h2></div>
        <div class="contact-content fade-up">
            <p class="contact-desc">${d.description}</p>
            <div class="contact-links">${links}</div>
        </div>`;
}

function renderFooter(d, el) {
    const links = d.links.map(l =>
        `<a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="${l.label}">${icon(l.type)}</a>`
    ).join('');
    const text = d.text.replace('{{YEAR}}', new Date().getFullYear());

    el.innerHTML = `<p>${text}</p><div class="footer-links">${links}</div>`;
}

function setMeta(meta) {
    document.title = `${meta.name} — ${meta.title}`;
    document.querySelector('meta[name="description"]').content = meta.description;
    document.querySelector('meta[name="keywords"]').content = meta.keywords;
    document.querySelector('meta[property="og:title"]').content = `${meta.name} — ${meta.title}`;
    document.querySelector('meta[property="og:description"]').content = meta.ogDescription;
    document.querySelector('meta[property="og:url"]').content = meta.url;
}

function initInteractions() {
    const glow = document.getElementById('cursorGlow');
    if (glow && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
            }
        });
    }, { passive: true });

    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('open');
        document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
    });
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const countObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { animateCounters(); countObs.unobserve(entry.target); }
            });
        }, { threshold: 0.5 });
        countObs.observe(statsSection);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        }, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.body.classList.add('loaded');
}

function animateCounters() {
    document.querySelectorAll('.stat-value[data-count]').forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const duration = 1500;
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('data.json');
    const data = await res.json();

    setMeta(data.meta);
    renderHero(data.hero, document.getElementById('heroContent'));
    renderAbout(data.about, document.getElementById('aboutContent'));
    renderExperience(data.experience, document.getElementById('experienceContent'));
    renderProjects(data.projects, document.getElementById('projectsContent'));
    renderSkills(data.skills, document.getElementById('skillsContent'));
    renderOSS(data.openSource, document.getElementById('ossContent'));
    renderAwards(data.awards, document.getElementById('awardsContent'));
    renderTestimonials(data.testimonials, document.getElementById('testimonialsContent'));
    renderContact(data.contact, document.getElementById('contactContent'));
    renderFooter(data.footer, document.getElementById('footerContent'));
    initInteractions();
});
