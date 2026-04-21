import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { caseStudies, siteConfig } from '../../data/projects';
import { CtaBanner, Footer } from '../../components/CtaBanner';
import { useScrollFade } from '../../hooks/useScrollFade';

// ── Icons ────────────────────────────────────────────────────
function FigmaIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function SmallDocIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
function LinkIcon({ icon, size = 'sm' }) {
  if (size === 'lg') return icon === 'figma' ? <FigmaIcon /> : <DocIcon />;
  return icon === 'figma' ? <FigmaIcon /> : <SmallDocIcon />;
}

// ── Lightbox ─────────────────────────────────────────────────
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image viewer">
      <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={src}
        alt="Expanded view"
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ── Bento span helper ─────────────────────────────────────────
function bentoSpan(index, total) {
  const pattern = ['wide', 'narrow', 'full', 'narrow', 'wide'];
  return pattern[index % pattern.length];
}

// ── Main page ─────────────────────────────────────────────────
export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = useCallback((src) => setLightboxSrc(src), []);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useScrollFade(slug);

  if (!slug) return null;
  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Project not found.</p>
        <Link href="/#work" className="hero-cta" style={{ marginTop: '8px' }}>Back to work</Link>
      </div>
    );
  }

  const isUX = project.category === 'UX / Product Design';
  const isArch = project.category === 'Architecture';
  const backHref = isUX ? '/#work' : '/#architecture';
  const bentoImages = project.galleryImages
    ? project.galleryImages.filter(src => src !== project.heroImage)
    : [];

  return (
    <>
      <Head>
        <title>{project.title} — {siteConfig.name}</title>
        <meta name="description" content={project.overview} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}

      {/* ── HEADER ── */}
      <div className="project-detail">
        <Link href={backHref} className="project-back">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" />
          </svg>
          {isUX ? 'UX Work' : 'Architecture'}
        </Link>

        <div className="project-header fade-in">
          <p className="project-header-label">{project.category}</p>
          <h1 className="project-header-title">{project.title}</h1>
          <div className="project-header-tags">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.title}
            className="project-hero-image fade-in zoomable"
            onClick={() => openLightbox(project.heroImage)}
          />
        )}

        <div className="project-overview fade-in">
          {[
            { label: 'Role', value: project.role },
            { label: 'Timeline', value: project.timeline },
            { label: 'Tools', value: project.tools },
            { label: 'Type', value: project.type },
          ].map((item) => (
            <div key={item.label} className="project-overview-item">
              <p className="project-overview-label">{item.label}</p>
              <p className="project-overview-value">{item.value}</p>
            </div>
          ))}
        </div>

        {project.projectLinks && project.projectLinks.length > 0 && (
          <div className="project-links-bar fade-in">
            {project.projectLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <LinkIcon icon={link.icon} size="sm" />
                {link.label}
                <span style={{ opacity: 0.5, marginLeft: 2 }}>↗</span>
              </a>
            ))}
          </div>
        )}

        {/* Overview */}
        <div className="project-section fade-in">
          <p className="project-section-label">Overview</p>
          <div className="project-section-body"><p>{project.overview}</p></div>
        </div>

        {/* HMW Statement — split layout (Big Issue) */}
        {project.hmwStatement && (
          <div className="project-section fade-in">
            <div className="split-section">
              <div className="split-left">
                <p className="split-label">{project.hmwStatement.label}</p>
                <h2 className="split-heading">{project.hmwStatement.heading}</h2>
                <p className="split-body">{project.hmwStatement.body}</p>
              </div>
              <div className="split-right">
                {project.hmwStatement.image && (
                  <div
                    className="zoomable"
                    onClick={() => openLightbox(project.hmwStatement.image)}
                  >
                    <img src={project.hmwStatement.image} alt="Project context" className="split-image" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Problem */}
        {project.problem && (
          <div className="project-section fade-in">
            <p className="project-section-label">{project.problem.title}</p>
            <div className="project-section-body">
              {project.problem.body.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            {project.problem.insight && (
              <div className="project-insight fade-in"><p>{project.problem.insight}</p></div>
            )}
          </div>
        )}

        {/* Stakeholder Findings — split layout (Big Issue) */}
        {project.stakeholderFindings && (
          <div className="project-section fade-in">
            <div className="split-section">
              <div className="split-left">
                <p className="split-label">{project.stakeholderFindings.label}</p>
                <h2 className="split-heading">{project.stakeholderFindings.heading}</h2>
                <p className="split-body">{project.stakeholderFindings.body}</p>
              </div>
              <div className="split-right">
                {project.stakeholderFindings.items.map((item, i) => (
                  <div key={i} className="split-right-item">
                    <p className="split-right-item-title">{item.title}</p>
                    <p className="split-right-item-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process (UX only) */}
        {!isArch && project.process && project.process.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Process</p>
            {project.processNote && (
              <div className="project-section-body" style={{ marginBottom: '36px' }}>
                <p>{project.processNote}</p>
              </div>
            )}
            <div className="project-process-steps">
              {project.process.map((step, idx) => (
                <div
                  key={idx}
                  className={`process-step fade-in${step.image ? ' process-step--has-image' : ''}${step.image && idx % 2 === 1 ? ' process-step--flip' : ''}`}
                >
                  <div className="process-step-body">
                    <p className="process-step-title">{step.title}</p>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="process-step-image zoomable"
                      loading="lazy"
                      onClick={() => openLightbox(step.image)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design Images */}
        {project.designImages && project.designImages.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Designs</p>
            <div className="project-design-images">
              {project.designImages.map((img, i) =>
                img.link ? (
                  <a
                    key={i}
                    href={img.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-design-image-block project-design-image-link fade-in"
                  >
                    <img src={img.src} alt={img.caption || project.title} loading="lazy" />
                    {img.caption && <p className="project-image-caption">{img.caption}</p>}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="project-design-image-block fade-in zoomable"
                    onClick={() => openLightbox(img.src)}
                  >
                    <img src={img.src} alt={img.caption || project.title} loading="lazy" />
                    {img.caption && <p className="project-image-caption">{img.caption}</p>}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Interactive Prototypes — side by side (Big Issue) */}
        {project.prototypes && project.prototypes.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Interactive Prototypes</p>
            <div className="prototypes-grid">
              {project.prototypes.map((proto) => (
                <a
                  key={proto.src}
                  href={proto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-image-wrap prototype-card"
                >
                  <img src={proto.src} alt={proto.label} loading="lazy" />
                  <span className="prototype-card-label">{proto.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* User Testing Results */}
        {project.userTesting && (
          <div className="project-section fade-in">
            <p className="project-section-label">User Testing</p>
            <div className="user-testing-header">
              <h2 className="user-testing-heading">{project.userTesting.heading}</h2>
              <p className="user-testing-body">{project.userTesting.body}</p>
            </div>
            <div className="user-testing-grid">
              <div className="user-testing-col">
                <p className="user-testing-col-label user-testing-col-label--positive">Positive Feedback</p>
                <div className="user-testing-items">
                  {project.userTesting.positive.map((item) => (
                    <div key={item.title} className="user-testing-item fade-in">
                      <p className="user-testing-item-title">{item.title}</p>
                      <p className="user-testing-item-body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="user-testing-col">
                <p className="user-testing-col-label user-testing-col-label--improvement">Areas for Improvement</p>
                <div className="user-testing-items">
                  {project.userTesting.improvements.map((item) => (
                    <div key={item.title} className="user-testing-item fade-in">
                      <p className="user-testing-item-title">{item.title}</p>
                      <p className="user-testing-item-body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Insights (PFB) */}
        {project.insights && project.insights.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Key Insights</p>
            <div className="project-insights-grid">
              {project.insights.map((insight) => (
                <div key={insight.num} className="project-insight-card fade-in">
                  <p className="project-insight-card-num">{insight.num}</p>
                  <div>
                    <p className="project-insight-card-title">{insight.title}</p>
                    <p className="project-insight-card-body">{insight.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {project.recommendations && project.recommendations.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Recommendations</p>
            <div className="project-recommendations">
              {project.recommendations.map((rec) => (
                <div key={rec.num} className="project-recommendation fade-in">
                  <p className="project-recommendation-num">{rec.num}</p>
                  <div>
                    <p className="project-recommendation-title">{rec.title}</p>
                    <p className="project-recommendation-body">{rec.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>{/* end project-detail */}

      {/* ── ARCHITECTURE BENTO — wide section outside constrained column ── */}
      {isArch && bentoImages.length > 0 && (
        <div className="project-bento-section fade-in">
          <div className="project-bento-inner">
            <p className="project-section-label">Project Images</p>
            <div className="arch-bento" key={`bento-${slug}`}>
              {bentoImages.map((src, i) => (
                <div
                  key={src}
                  className={`arch-bento-item fade-in arch-bento-item--${bentoSpan(i, bentoImages.length)} zoomable`}
                  onClick={() => openLightbox(src)}
                >
                  <img src={src} alt={`${project.title} — image ${i + 1}`} loading={i < 4 ? 'eager' : 'lazy'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── KEY FEATURES — alternating wide layout ── */}
      {project.features && project.features.length > 0 && (
        <div className="project-features-section fade-in">
          <div className="project-features-inner">
            <p className="project-section-label" style={{ color: 'var(--accent)', marginBottom: '0' }}>
              Key Features
            </p>
            <div className="project-features">
              {project.features.map((feature) => (
                <div key={feature.num} className="feature-item fade-in">
                  <div className="feature-text">
                    <p className="feature-num">{feature.num}</p>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-body">{feature.body}</p>
                  </div>
                  {feature.images ? (
                    <div className="feature-images-dual">
                      {feature.images.map((img) => (
                        <a key={img.src} href={img.link} target="_blank" rel="noopener noreferrer" className="feature-image-wrap">
                          <img src={img.src} alt={img.alt || feature.title} loading="lazy" />
                        </a>
                      ))}
                    </div>
                  ) : feature.link ? (
                    <a href={feature.link} target="_blank" rel="noopener noreferrer" className="feature-image-wrap">
                      <img src={feature.image} alt={feature.imageAlt || feature.title} loading="lazy" />
                    </a>
                  ) : (
                    <div
                      className="feature-image-wrap zoomable"
                      onClick={() => openLightbox(feature.image)}
                    >
                      <img src={feature.image} alt={feature.imageAlt || feature.title} loading="lazy" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── UI PRINCIPLES ── */}
      {project.uiPrinciples && (
        <div className="project-detail fade-in" style={{ marginTop: 0 }}>
          <div className="project-section" style={{ marginTop: 0 }}>
            <div className="ui-principles">
              <div className="ui-principles-header">
                <p className="ui-principles-label">{project.uiPrinciples.label}</p>
                <h2 className="ui-principles-heading">{project.uiPrinciples.heading}</h2>
                <p className="ui-principles-subtext">{project.uiPrinciples.subtext}</p>
              </div>
              <div className="ui-principles-grid">
                {project.uiPrinciples.items.map((item) => (
                  <div key={item.title} className="ui-principle-item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="ui-principle-image zoomable"
                      loading="lazy"
                      onClick={() => openLightbox(item.image)}
                    />
                    <p className="ui-principle-title">{item.title}</p>
                    <p className="ui-principle-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DESIGN SYSTEM — carousel ── */}
      {project.designSystem && (
        <div className="project-detail fade-in" style={{ marginTop: 0 }}>
          <div className="project-section">
            <p className="project-section-label">{project.designSystem.label}</p>
            <div className="design-system-header">
              <h2 className="design-system-heading">{project.designSystem.heading}</h2>
              {project.designSystem.subtext && (
                <p className="design-system-subtext">{project.designSystem.subtext}</p>
              )}
            </div>
            <div className="design-system-carousel">
              {project.designSystem.items.map((item, i) => (
                <div
                  key={i}
                  className="design-system-carousel-item zoomable"
                  onClick={() => openLightbox(item.image)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <p className="design-system-item-label">{item.title}</p>
                  {item.body && <p className="design-system-item-body">{item.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DEVELOPER HANDOFF ── */}
      {project.devHandoff && (
        <div className="project-detail fade-in" style={{ marginTop: 0 }}>
          <div className="project-section">
            <p className="project-section-label">{project.devHandoff.label}</p>
            <div className="design-system-header">
              <h2 className="design-system-heading">{project.devHandoff.heading}</h2>
              <p className="design-system-subtext">{project.devHandoff.body}</p>
            </div>
            <div className="dev-handoff-images">
              {project.devHandoff.images.map((img, i) => (
                <div
                  key={i}
                  className="project-design-image-block fade-in zoomable"
                  onClick={() => openLightbox(img.src)}
                >
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  {img.caption && <p className="project-image-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TESTIMONIALS, REFLECTION, LINKS ── */}
      <div className="project-detail">

        {project.testimonials && project.testimonials.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Feedback</p>
            <div className="project-testimonials">
              {project.testimonials.map((t) => (
                <div key={t.author} className="testimonial-card fade-in">
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <p className="testimonial-author-name">{t.author}</p>
                    <p className="testimonial-author-role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structured reflection (Big Issue) */}
        {project.reflection && typeof project.reflection === 'object' && (
          <div className="project-section fade-in">
            <p className="project-section-label">{project.reflection.label}</p>
            <div className="split-section">
              <div className="split-left">
                <h2 className="split-heading">{project.reflection.heading}</h2>
                {project.reflection.intro && <p className="split-body">{project.reflection.intro}</p>}
              </div>
              <div className="split-right">
                {project.reflection.items.map((item, i) => (
                  <div key={i} className="split-right-item">
                    <p className="split-right-item-title">{item.title}</p>
                    <p className="split-right-item-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Simple string reflection */}
        {project.reflection && typeof project.reflection === 'string' && (
          <div className="project-section fade-in">
            <p className="project-section-label">Reflection</p>
            <div className="project-section-body"><p>{project.reflection}</p></div>
          </div>
        )}

        {project.projectLinks && project.projectLinks.length > 0 && (
          <div className="project-section fade-in" style={{ marginBottom: '0' }}>
            <p className="project-section-label">View the Work</p>
            <div className="project-deliverables">
              {project.projectLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="deliverable-card">
                  <div className="deliverable-card-icon"><LinkIcon icon={link.icon} size="lg" /></div>
                  <div className="deliverable-card-text">
                    <p className="deliverable-card-label">{link.label}</p>
                    <p className="deliverable-card-sub">Open in {link.icon === 'figma' ? 'Figma' : 'Google Drive'} ↗</p>
                  </div>
                  <span className="deliverable-card-arrow">↗</span>
                </a>
              ))}
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
