import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { caseStudies, siteConfig } from '../../data/projects';
import { CtaBanner, Footer } from '../../components/CtaBanner';
import { useScrollFade } from '../../hooks/useScrollFade';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  useScrollFade();

  if (!slug) return null;

  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Project not found.</p>
        <Link href="/#work" className="hero-cta" style={{ marginTop: '8px' }}>
          Back to work
        </Link>
      </div>
    );
  }

  const isUX = project.category === 'UX / Product Design';
  const backHref = isUX ? '/#work' : '/#architecture';

  return (
    <>
      <Head>
        <title>{project.title} — {siteConfig.name}</title>
        <meta name="description" content={project.overview} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="project-detail">

        {/* Back link */}
        <Link href={backHref} className="project-back">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          {isUX ? 'UX Work' : 'Architecture'}
        </Link>

        {/* Header */}
        <div className="project-header fade-in">
          <p className="project-header-label">{project.category}</p>
          <h1 className="project-header-title">{project.title}</h1>
          <div className="project-header-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.title}
            className="project-hero-image fade-in"
          />
        )}

        {/* Overview row */}
        <div className="project-overview fade-in">
          <div className="project-overview-item">
            <p className="project-overview-label">Role</p>
            <p className="project-overview-value">{project.role}</p>
          </div>
          <div className="project-overview-item">
            <p className="project-overview-label">Timeline</p>
            <p className="project-overview-value">{project.timeline}</p>
          </div>
          <div className="project-overview-item">
            <p className="project-overview-label">Tools</p>
            <p className="project-overview-value">{project.tools}</p>
          </div>
          <div className="project-overview-item">
            <p className="project-overview-label">Type</p>
            <p className="project-overview-value">{project.type}</p>
          </div>
        </div>

        {/* Overview text */}
        <div className="project-section fade-in">
          <p className="project-section-label">Overview</p>
          <div className="project-section-body">
            <p>{project.overview}</p>
          </div>
        </div>

        {/* Problem */}
        <div className="project-section fade-in">
          <p className="project-section-label">{project.problem.title}</p>
          <div className="project-section-body">
            {project.problem.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {project.problem.insight && (
            <div className="project-insight">
              <p>{project.problem.insight}</p>
            </div>
          )}
        </div>

        {/* Process */}
        {project.process && project.process.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Process</p>
            {project.processNote && (
              <p className="project-section-body" style={{ marginBottom: '24px' }}>
                {project.processNote}
              </p>
            )}
            <div className="project-process-grid">
              {project.process.map((step) => (
                <div key={step.num} className="process-step">
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="process-step-image"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="process-step-num">{step.num}</p>
                    <p className="process-step-title">{step.title}</p>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design gallery */}
        {project.designImages && project.designImages.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Designs</p>
            <div className="project-image-grid">
              {project.designImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 'var(--radius)', background: 'var(--surface)' }}
                    loading="lazy"
                  />
                  {img.caption && (
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--mono)', lineHeight: 1.5 }}>
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final full-width image */}
        {project.finalImage && (
          <img
            src={project.finalImage}
            alt="Final design"
            className="project-image-full fade-in"
            loading="lazy"
          />
        )}

        {/* Outcome */}
        <div className="project-section fade-in">
          <p className="project-section-label">{project.outcome.title}</p>
          <div className="project-section-body">
            <p>{project.outcome.body}</p>
          </div>
        </div>

        {/* Reflection */}
        {project.reflection && (
          <div className="project-section fade-in">
            <p className="project-section-label">Reflection</p>
            <div className="project-section-body">
              <p>{project.reflection}</p>
            </div>
          </div>
        )}

      </div>

      {/* Next project */}
      {project.next && (
        <Link href={`/work/${project.next.id}`} className="project-next-link">
          <div className="project-next">
            <div>
              <p className="project-next-label">Next project</p>
              <p className="project-next-title">{project.next.title}</p>
            </div>
            <span className="project-next-arrow">→</span>
          </div>
        </Link>
      )}

      <CtaBanner />
      <Footer />
    </>
  );
}
