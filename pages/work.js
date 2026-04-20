import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import { CtaBanner, Footer } from '../components/CtaBanner';
import { uxProjects, architectureProjects, siteConfig } from '../data/projects';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Work() {
  useScrollFade();

  return (
    <>
      <Head>
        <title>Work — {siteConfig.name}</title>
        <meta name="description" content="Projects by Jaco Yang — UX Design and Architecture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="work-hero">
        <p className="section-label">All Projects</p>
        <h1 className="work-headline">
          Selected work from<br />
          <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>2022 – 2025.</em>
        </h1>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <p className="section-label" style={{ marginBottom: '28px' }}>UX / Product Design</p>
        <div className="projects-grid">
          {uxProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="grid" delay={i * 100} />
          ))}
        </div>

        <p className="arch-label">Architecture</p>
        <div className="projects-grid">
          {architectureProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="grid" delay={i * 80} />
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
