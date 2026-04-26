import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { CtaBanner, Footer } from '../components/CtaBanner';
import { uxProjects, architectureProjects, sideProjects, siteConfig } from '../data/projects';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Home() {
  useScrollFade();

  // Track which section is in view and update the URL hash
  // so the sidebar nav can highlight the correct link
  useEffect(() => {
    const sectionIds = ['work', 'apps', 'architecture', 'about'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, '', `#${entry.target.id}`);
            window.dispatchEvent(new Event('hashchange'));
          }
        });
      },
      // Trigger when a section enters the top 40% of the viewport
      { rootMargin: '-10% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.name} — Designer</title>
        <meta name="description" content={`${siteConfig.name} — ${siteConfig.tagline}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <section id="home" className="hero">
        <p className="hero-label">{siteConfig.tagline}</p>
        <h1 className="hero-title">
          Hi, I&apos;m Jaco,<br />
          a designer bridging<br />
          <em>architecture</em> and digital<br />
          experience.<span className="hero-cursor" />
        </h1>
        <p className="hero-body">{siteConfig.intro}</p>
        <div className="hero-actions">
          <a href="#work" className="hero-cta">
            View my work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="19" x2="19" y2="5" />
              <polyline points="5 5 19 5 19 19" />
            </svg>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hero-cta-secondary">
            Get in touch ↗
          </a>
        </div>
        <p className="hero-scroll">Scroll to explore</p>
      </section>

      {/* UX / PRODUCT DESIGN */}
      <section id="work" className="section">
        <div className="section-header">
          <p className="section-label">UX / Product Design</p>
        </div>
        <div className="projects-list">
          {uxProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 120} />
          ))}
        </div>
      </section>

      {/* SIDE PROJECTS / APPS */}
      <section id="apps" className="section">
        <div className="section-header">
          <p className="section-label">Apps</p>
        </div>
        <div className="apps-grid">
          {sideProjects.map((app, i) => (
            <div
              key={app.id}
              className="app-card fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="app-card-header">
                <div className="app-card-icon">
                  {app.id === 'peckish' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  )}
                  {app.id === 'arch-buddy' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  )}
                  {app.id === 'flashstacks' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  )}
                </div>
                <span className="app-coming-soon">{app.status}</span>
              </div>
              <div>
                <p className="app-name">{app.name}</p>
                <p className="app-tagline">{app.tagline}</p>
              </div>
              <p className="app-description">{app.description}</p>
              <div className="app-tags">
                {app.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="section">
        <div className="section-header">
          <p className="section-label">Architecture</p>
        </div>
        <div className="arch-cards-grid">
          {architectureProjects.map((project, i) => (
            <Link
              key={project.id}
              href={project.href}
              className="arch-card fade-in"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="arch-card-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="arch-card-image"
                  loading="lazy"
                />
              </div>
              <div className="arch-card-body">
                <p className="arch-card-date">{project.date}</p>
                <p className="arch-card-title">{project.title}</p>
                <div className="arch-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-header">
          <p className="section-label">About</p>
        </div>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I began my design journey in architecture, inspired by my father who built homes for his clients. Growing up, I was fascinated by how a physical space could be transformed into somewhere people truly feel at home.
            </p>
            <p>
              I pursued this through a Bachelor&apos;s and Master&apos;s degree in Architecture at the University of South Australia, working with Metro Homes, GHD Design, and Startari Architects across commercial, residential, defence, and automotive projects.
            </p>
            <p>
              Each project reinforced a core truth: design is fundamentally about people. Balancing what clients need, what users experience, and what the broader context demands. After three years in architecture, I found myself drawn to digital product design, where that same human-centred thinking shapes how millions of people interact with the world.
            </p>
            <p>
              Architecture and product design share a core philosophy: understand the person, design the experience, sweat the details. I bring that cross-disciplinary perspective to every project I work on.
            </p>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="about-resume-btn"
            >
              View resume ↗
            </a>
          </div>

          <div className="about-sidebar-panel fade-in" style={{ transitionDelay: '150ms' }}>
            <h6>Design Skills</h6>
            <ul>
              {['Figma', 'Design Systems', 'UI Design', 'UX Research', 'Hi-Fi Prototyping', 'User Testing', 'Spatial Design'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h6>Strengths</h6>
            <ul>
              {['Systems Thinking', 'Empathy', 'Stakeholder Management', 'Communication', 'Adaptability'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h6>Education</h6>
            <div>
              {[
                { degree: 'Masters of Architecture', school: 'UniSA', year: '2021' },
                { degree: 'Bach. of Architectural Studies', school: 'UniSA', year: '2019' },
                { degree: 'UX Career Launcher', school: 'Harness Projects', year: '2024' },
              ].map((e) => (
                <div key={e.degree} className="edu-item">
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-school">{e.school}, {e.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
