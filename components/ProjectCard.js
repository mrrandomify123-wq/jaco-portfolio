import Link from 'next/link';

export default function ProjectCard({ project, variant = 'list', delay = 0 }) {
  if (variant === 'grid') {
    return (
      <Link href={project.href}>
        <div
          className="project-card-grid fade-in"
          style={{ transitionDelay: `${delay}ms` }}
        >
          <div className="project-card-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
              loading="lazy"
            />
          </div>
          <div className="project-card-body">
            <p className="project-card-date">{project.date}</p>
            <h3 className="project-card-title">{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={project.href}>
      <div
        className="project-card fade-in"
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="project-card-meta">
          <p className="project-card-date">{project.date}</p>
          <h3 className="project-card-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="project-card-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-card-image"
            loading="lazy"
          />
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </Link>
  );
}
