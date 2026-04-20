import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { caseStudies, siteConfig } from '../../data/projects';
import { CtaBanner, Footer } from '../../components/CtaBanner';
import { useScrollFade } from '../../hooks/useScrollFade';

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

      {/* ── PART 1: header, process, research ── */}
      <div className="project-detail">

        <Link href={backHref} className="project-back">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          {isUX ? 'UX Work' : 'Architecture'}
        </Link>

        {/* Title block */}
        <div className="project-header fade-in">
          <p className="project-header-label">{project.category}</p>
          <h1 className="project-header-title">{project.title}</h1>
          <div className="project-header-tags">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        {/* Hero image */}
        {project.heroImage && (
          <img src={project.heroImage} alt={project.title} className="project-hero-image fade-in" />
        )}

        {/* Metadata row */}
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

        {/* Small links bar (just below metadata) */}
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

        {/* Problem / Challenge */}
        <div className="project-section fade-in">
          <p className="project-section-label">{project.problem.title}</p>
          <div className="project-section-body">
            {project.problem.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {project.problem.insight && (
            <div className="project-insight fade-in"><p>{project.problem.insight}</p></div>
          )}
        </div>

        {/* Process */}
        {project.process && project.process.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Process</p>
            {project.processNote && (
              <div className="project-section-body" style={{ marginBottom: '36px' }}>
                <p>{project.processNote}</p>
              </div>
            )}
            <div className="project-process-steps">
              {project.process.map((step) => (
                <div key={step.num} className="process-step fade-in">
                  {step.image && (
                    <img src={step.image} alt={step.title} className="process-step-image" loading="lazy" />
                  )}
                  <div className="process-step-body">
                    <p className="process-step-num">{step.num}</p>
                    <p className="process-step-title">{step.title}</p>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Supporting design images */}
        {project.designImages && project.designImages.length > 0 && (
          <div className="project-section fade-in">
            <p className="project-section-label">Designs</p>
            <div className="project-design-images">
              {project.designImages.map((img, i) => (
                <div key={i} className="project-design-image-block fade-in">
                  <img src={img.src} alt={img.caption || project.title} loading="lazy" />
                  {img.caption && <p className="project-image-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key insights (People First Bank) */}
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

        {project.finalImage && (
          <div className="fade-in">
            <img src={project.finalImage} alt="Final design" className="project-image-full" loading="lazy" />
          </div>
        )}

      </div>

      {/* ── PART 2: Key features — alternating wide layout ── */}
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
                    {feature.link && (
                      <a href={feature.link} target="_blank" rel="noopener noreferrer" className="feature-link-btn">
                        <FigmaIcon />
                        {feature.linkLabel || 'View Prototype'} ↗
                      </a>
                    )}
                  </div>
                  {feature.link ? (
                    <a href={feature.link} target="_blank" rel="noopener noreferrer" className="feature-image-wrap">
                      <img src={feature.image} alt={feature.imageAlt || feature.title} loading="lazy" />
                    </a>
                  ) : (
                    <div className="feature-image-wrap">
                      <img src={feature.image} alt={feature.imageAlt || feature.title} loading="lazy" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PART 3: UI Principles (Big Issue) ── */}
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
                    <img src={item.image} alt={item.title} className="ui-principle-image" loading="lazy" />
                    <p className="ui-principle-title">{item.title}</p>
                    <p className="ui-principle-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PART 4: Testimonials, outcome, reflection ── */}
      <div className="project-detail">

        {/* Stakeholder feedback */}
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

        {/* Outcome */}
        <div className="project-section fade-in">
          <p className="project-section-label">{project.outcome.title}</p>
          <div className="project-section-body"><p>{project.outcome.body}</p></div>
        </div>

        {/* Reflection */}
        {project.reflection && (
          <div className="project-section fade-in">
            <p className="project-section-label">Reflection</p>
            <div className="project-section-body"><p>{project.reflection}</p></div>
          </div>
        )}

        {/* Prominent deliverables (large cards at the bottom) */}
        {project.projectLinks && project.projectLinks.length > 0 && (
          <div className="project-section fade-in" style={{ marginBottom: '0' }}>
            <p className="project-section-label">View the Work</p>
            <div className="project-deliverables">
              {project.projectLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="deliverable-card">
                  <div className="deliverable-card-icon">
                    <LinkIcon icon={link.icon} size="lg" />
                  </div>
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
