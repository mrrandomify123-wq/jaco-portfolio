import Head from 'next/head';
import { CtaBanner, Footer } from '../components/CtaBanner';
import { siteConfig } from '../data/projects';
import { useScrollFade } from '../hooks/useScrollFade';

export default function About() {
  useScrollFade();

  return (
    <>
      <Head>
        <title>About — {siteConfig.name}</title>
        <meta name="description" content="About Jaco Yang — Designer based in Melbourne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="about-hero">
        <h1 className="about-headline">
          From architecture<br />
          <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>to digital design.</em>
        </h1>
        <p className="about-sub">
          My background in architecture taught me to think about structure, flow, and how spaces make people feel. I bring that same systems-thinking lens to digital products.
        </p>
      </div>

      <div className="about-body">
        <div className="about-text fade-in">
          <p>
            I began my design journey in architecture, inspired by my father who built homes for his clients. Growing up, I was fascinated by how a physical space could be transformed into somewhere people truly feel at home.
          </p>
          <p>
            I pursued this passion through both a Bachelor's and Master's degree in Architecture at the University of South Australia. Over the years I worked with Metro Homes, GHD Design, and Startari Architects — gaining experience across commercial, residential, defence, and automotive architecture.
          </p>
          <p>
            Each project reinforced how design is fundamentally about people: balancing what clients need, what users experience, and what the broader context demands. After three years in architecture, I found myself drawn to digital product design — where that same human-centred thinking shapes how millions of people interact with the world.
          </p>
          <p>
            The transition felt natural. Architecture and product design share a core philosophy: understand the person, design the experience, sweat the details. I'm now applying everything I learned from physical space to digital space — and I genuinely believe that cross-disciplinary perspective is rare and valuable.
          </p>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="about-resume-btn"
          >
            View my resume ↗
          </a>
        </div>

        <div className="about-sidebar fade-in" style={{ transitionDelay: '150ms' }}>
          <h6>Design Skills</h6>
          <ul>
            {[
              'Figma',
              'Design Systems',
              'UI Design',
              'UX Research',
              'Hi-Fi Prototyping',
              'User Testing',
              'Webflow',
              'Spatial Design',
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h6>Strengths</h6>
          <ul>
            {[
              'Systems Thinking',
              'Empathy',
              'Stakeholder Management',
              'Communication',
              'Adaptability',
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h6>Education</h6>
          <div>
            {[
              {
                degree: 'Masters of Architecture',
                school: 'University of South Australia',
                year: '2021',
              },
              {
                degree: 'Bach. of Architectural Studies',
                school: 'University of South Australia',
                year: '2019',
              },
              {
                degree: 'UX Career Launcher',
                school: 'Harness Projects',
                year: '2024',
              },
            ].map((e) => (
              <div key={e.degree} className="edu-item">
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-school">
                  {e.school}, {e.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </>
  );
}
