import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { siteConfig } from '../data/projects';

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href) => router.pathname === href;
  const close = () => setOpen(false);

  return (
    <>
      <nav className="sidebar">
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
        </div>

        <div className="sidebar-divider" />

        <div className="sidebar-nav">
          <Link href="/work" className={`sidebar-link ${isActive('/work') ? 'active' : ''}`} onClick={close}>
            Work
          </Link>
          <Link href="/about" className={`sidebar-link ${isActive('/about') ? 'active' : ''}`} onClick={close}>
            About
          </Link>
        </div>

        <div className="sidebar-divider" />

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

        <div className="sidebar-bottom">
          <div className="sidebar-status">
            <span className="status-dot" />
            Open to opportunities
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sidebar-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            style={
              open
                ? { transform: 'rotate(45deg) translate(4px, 4px)' }
                : {}
            }
          />
          <span style={open ? { opacity: 0 } : {}} />
          <span
            style={
              open
                ? { transform: 'rotate(-45deg) translate(4px, -4px)' }
                : {}
            }
          />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <Link href="/" className="sidebar-link" onClick={close}>Home</Link>
          <Link href="/work" className="sidebar-link" onClick={close}>Work</Link>
          <Link href="/about" className="sidebar-link" onClick={close}>About</Link>
          <div className="mobile-menu-ext">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-ext-link"
              onClick={close}
            >
              LinkedIn <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-ext-link"
              onClick={close}
            >
              Resume <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="sidebar-ext-link"
              onClick={close}
            >
              Email <span className="ext-arrow" style={{ opacity: 1 }}>↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
