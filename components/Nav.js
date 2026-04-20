import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { siteConfig } from '../data/projects';

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const isHomePage = router.pathname === '/';
  const isProjectPage = router.pathname.startsWith('/work/');

  // Track URL hash (updated by IntersectionObserver on homepage)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => setActiveHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [router.pathname]);

  const isActive = (section) => {
    if (isProjectPage) return section === 'work';
    if (!isHomePage) return false;
    if (section === 'work') return activeHash === '#work' || activeHash === '' || activeHash === '#home';
    if (section === 'architecture') return activeHash === '#architecture';
    if (section === 'about') return activeHash === '#about';
    return false;
  };

  const close = () => setOpen(false);

  const navHref = (hash) => isHomePage ? hash : `/${hash}`;

  return (
    <>
      <nav className="sidebar">
        {/* Identity block — status lives here now */}
        <div className="sidebar-top">
          <Link href="/" className="sidebar-logo" onClick={close}>
            <div className="sidebar-monogram">JY</div>
            <div className="sidebar-identity">
              <span className="sidebar-name">{siteConfig.name}</span>
              <span className="sidebar-title">Designer</span>
              <span className="sidebar-location">
                <span className="sidebar-dot" />
                Melbourne, AU
              </span>
            </div>
          </Link>

          {/* Status badge — near the name */}
          <div className="sidebar-status" style={{ marginTop: '10px' }}>
            <span className="status-dot" />
            Open to work
          </div>
        </div>

        <div className="sidebar-divider" />

        {/* Section nav */}
        <div className="sidebar-nav">
          <a
            href={navHref('#work')}
            className={`sidebar-link ${isActive('work') ? 'active' : ''}`}
            onClick={close}
          >
            Work
          </a>
          <a
            href={navHref('#architecture')}
            className={`sidebar-link ${isActive('architecture') ? 'active' : ''}`}
            onClick={close}
          >
            Architecture
          </a>
          <a
            href={navHref('#about')}
            className={`sidebar-link ${isActive('about') ? 'active' : ''}`}
            onClick={close}
          >
            About
          </a>
        </div>

        <div className="sidebar-divider" />

        {/* External links */}
        <div className="sidebar-external">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-ext-link"
          >
            LinkedIn <span className="ext-arrow">↗</span>
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-ext-link"
          >
            Resume <span className="ext-arrow">↗</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="sidebar-ext-link">
            Email <span className="ext-arrow">↗</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sidebar-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={open ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}} />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <a href="/#work" className="sidebar-link" onClick={close}>Work</a>
          <a href="/#architecture" className="sidebar-link" onClick={close}>Architecture</a>
          <a href="/#about" className="sidebar-link" onClick={close}>About</a>
          <div className="mobile-menu-ext">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="sidebar-ext-link" onClick={close}>
              LinkedIn <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
            <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="sidebar-ext-link" onClick={close}>
              Resume <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="sidebar-ext-link" onClick={close}>
              Email <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
