import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { CtaBanner, Footer } from '../components/CtaBanner';
import { uxProjects, siteConfig } from '../data/projects';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Home() {
  useScrollFade();

  return (
    <>
      <Head>
        <title>{siteConfig.name} — Designer</title>
        <meta name="description" content={`${siteConfig.name} — ${siteConfig.tagline}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="hero">
        <p className="hero-label">Portfolio · 2025</p>
        <h1 className="hero-title">
          Hi, I'm Jaco,<br />
          a designer bridging<br />
          <em>architecture</em> &amp; digital<br />
          experience.<span className="hero-cursor" />
        </h1>
        <p className="hero-body">{siteConfig.intro}</p>
        <div className="hero-actions">
          <Link href="/work" className="hero-cta">
            View my work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="19" x2="19" y2="5" />
              <polyline points="5 5 19 5 19 19" />
            </svg>
          </Link>
          <a href={`mailto:${siteConfig.email}`} className="hero-cta-secondary">
            Get in touch ↗
          </a>
        </div>
        <p className="hero-scroll">Scroll to explore</p>
      </section>

      {/* Selected Work */}
      <section className="section">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <Link href="/work" className="section-link">
            All projects ↗
          </Link>
        </div>
        <div className="projects-list">
          {uxProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 120} />
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
