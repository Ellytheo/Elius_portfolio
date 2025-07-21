import pic from './images/pic1.jpg';
import React, { useState, useEffect } from 'react';

const materialIconsLink = "https://fonts.googleapis.com/icon?family=Material+Icons";

function loadMaterialIcons() {
  if (!document.querySelector(`link[href="${materialIconsLink}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = materialIconsLink;
    document.head.appendChild(link);
  }
}

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'Fullstack e-commerce application with React, Node.js, and MySqlDB, featuring real-time inventory management and payment integration.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8cd0570-a047-4647-b1b9-f3e37634ba5c.png',
    alt: 'Screenshot of E-commerce platform user interface showcasing product listings and shopping cart',
    tech: ['React', 'Node.js', 'Express', 'MySQLDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Personal Finance Manager',
    description:
      'Financial management app with budgeting, transaction tracking, and investment portfolio visualization built using React and Firebase.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b45f5d56-8d0f-43ca-9cd9-abf1e68ad2cf.png',
    alt: 'Interface of Personal Finance Manager showing dashboard and charts',
    tech: ['React', 'Firebase', 'Chart.js', 'Material UI']
  },
  {
    id: 3,
    title: 'bussiness advertising Site',
    description:
      'A scalable social platform developed with Next.js and GraphQL supporting real-time chat and infinite scrolling feed.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e17bc224-37af-4be7-ba14-213995330692.png',
    alt: 'Screenshot of social networking site feed and messaging panel',
    tech: ['Next.js', 'GraphQL', 'Apollo', 'MySQL']
  }
];

const skillsData = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 96 },
  { name: 'Node.js', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'GraphQL', level: 75 },
  { name: 'CSS3 & HTML5', level: 100 },
  { name: 'GDscripting', level: 70 },
  { name: 'Android Studio', level: 75 }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    loadMaterialIcons();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  function handleNavClick(section) {
    setActiveSection(section);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <>
      <style>{`
        :root {
          --color-bg: #0f172a;
          --color-bg-alt: #1e293b;
          --color-accent: #22c55e;
          --color-text-primary: #f8fafc;
          --color-text-secondary: #94a3b8;
          --color-shadow: rgba(34, 197, 94, 0.4);
          --font-family-sans: 'Inter', system-ui, sans-serif;
          --border-radius: 12px;
          --spacing-sm: 12px;
          --spacing-md: 24px;
          --spacing-lg: 40px;
          --transition-fast: 0.25s ease-in-out;
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: var(--font-family-sans);
          background-color: var(--color-bg);
          color: var(--color-text-primary);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.6;
          overflow-x: hidden;
        }

        a {
          color: var(--color-accent);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        a:hover,
        a:focus {
          color: #86efac;
          outline: none;
        }

        header {
          position: sticky;
          top: 0;
          background: linear-gradient(90deg, #059669 0%, #16a34a 100%);
          padding: var(--spacing-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 2px 8px var(--color-shadow);
          animation: slideDownFade 0.8s ease forwards;
        }

        @keyframes slideDownFade {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-photo-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 120px;
}

.profile-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid var(--color-accent);
  box-shadow: 0 0 12px var(--color-accent);
  object-fit: cover;
  user-select: none;
  flex-shrink: 0;
}

.logo {
  font-weight: 900;
  font-size: 1.0rem;
  letter-spacing: 3px;
  cursor: default;
  user-select: none;
  color: var(--color-text-primary);
  text-shadow: 0 0 12px #16a34a;
  white-space: nowrap;
  text-align: left;
}

        nav.desktop-nav {
          display: flex;
          gap: var(--spacing-lg);
        }

        nav.desktop-nav button {
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: var(--border-radius);
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        nav.desktop-nav button:hover,
        nav.desktop-nav button:focus {
          background-color: #149243;
          outline: none;
          box-shadow: 0 0 10px #22c55e99;
        }

        nav.desktop-nav button.active {
          background-color: #22c55e;
          color: #0f172a;
          font-weight: 700;
          box-shadow: 0 0 16px var(--color-accent);
          cursor: default;
        }

        /* Mobile menu */
        .mobile-menu-button {
          display: none;
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          font-size: 2rem;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--border-radius);
          transition: background-color var(--transition-fast);
          user-select: none;
        }

        .mobile-menu-button:hover,
        .mobile-menu-button:focus {
          background-color: #149243;
          outline: none;
        }

        /* Mobile navigation overlay */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 50vh;
          width: 50vw;
          background-color: var(--color-bg-alt);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 2000;
          padding: var(--spacing-lg);
          animation: fadeInScale 0.3s ease forwards;
          font-size: 1.5rem;
          border-radius:5px;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .mobile-menu button {
          background: none;
          border: none;
          color: var(--color-text-primary);
          font-weight: 700;
          cursor: pointer;
          padding: 12px 24px;
          border-radius: var(--border-radius);
          transition: background-color var(--transition-fast);
        }

        .mobile-menu button:hover,
        .mobile-menu button:focus {
          background-color: var(--color-accent);
          color: var(--color-bg);
          outline: none;
        }

        .mobile-menu button.active {
          background-color: var(--color-accent);
          color: var(--color-bg);
          cursor: default;
        }

        .close-menu {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          font-size: 2.5rem;
          background: none;
          border: none;
          color: var(--color-text-primary);
          cursor: pointer;
          user-select: none;
        }
        .close-menu:hover,
        .close-menu:focus {
          color: #86efac;
          outline: none;
        }

        main {
          max-width: 1200px;
          margin: var(--spacing-lg) auto;
          padding: 0 var(--spacing-md);
          min-height: 80vh;
          animation: fadeSlideUp 0.7s ease forwards;
          scroll-behavior: smooth;
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          margin-bottom: var(--spacing-lg);
          background-color: var(--color-bg-alt);
          border-radius: var(--border-radius);
          padding: var(--spacing-lg);
          box-shadow: 0 10px 15px -5px var(--color-shadow);
          transition: box-shadow 0.3s ease;
        }

        section:hover {
          box-shadow: 0 15px 25px -5px var(--color-shadow);
        }

        h2.section-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-accent);
          text-align: center;
          text-shadow: 0 0 8px var(--color-accent);
        }

        /* Hero / About Section */
        .hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--spacing-lg);
          justify-content: center;
          text-align: center;
        }

        .hero-text {
          flex: 1 1 360px;
          animation: slideInLeft 0.8s ease forwards;
        }

        .hero-text h1 {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
          font-weight: 900;
          text-wrap: balance;
          line-height: 1.1;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-image {
          flex: 1 1 320px;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 20px 40px -10px var(--color-shadow);
          animation: slideInRight 0.8s ease forwards;
          max-width: 100%;
          max-height: 350px;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: var(--border-radius);
          transition: transform 0.5s ease;
        }

        .hero-image img:hover,
        .hero-image img:focus {
          transform: scale(1.05);
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Skills Section */
        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--spacing-md);
          justify-items: center;
        }

        .skill-card {
          background: #111827;
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          width: 100%;
          max-width: 180px;
          text-align: center;
          color: var(--color-text-primary);
          animation: fadeInUp 0.5s ease forwards;
          box-shadow: 0 6px 15px -5px var(--color-shadow);
          position: relative;
          overflow: hidden;
        }

        .skill-name {
          margin-bottom: var(--spacing-sm);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .progress-bar-bg {
          background-color: #334155;
          border-radius: 9999px;
          height: 14px;
          width: 100%;
          overflow: hidden;
        }

        .progress-bar-fill {
          background-color: var(--color-accent);
          height: 100%;
          border-radius: 9999px;
          width: 0%;
          max-width: 100%;
          animation-fill-mode: forwards;
          animation-duration: 1s;
          animation-timing-function: ease;
        }

        /* Animate progress bars individually */
        ${skillsData
          .map(
            (skill, i) => `.progress-bar-fill:nth-child(${i + 1}) { animation-name: fill-${i + 1}; }`
          )
          .join('\n')}

        ${skillsData
          .map(
            (skill, i) => `
              @keyframes fill-${i + 1} {
                from { width: 0; }
                to { width: ${skill.level}%; }
              }
            `
          )
          .join('\n')}

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Projects Section */
        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));
          gap: var(--spacing-lg);
          justify-items: center;
        }

        .project-card {
          background-color: #111827;
          border-radius: var(--border-radius);
          box-shadow: 0 12px 25px -5px var(--color-shadow);
          overflow: hidden;
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
          position: relative;
        }

        .project-card:hover,
        .project-card:focus-within {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 35px -5px var(--color-shadow);
          z-index: 10;
          outline: none;
          cursor: pointer;
        }

        .project-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }

        .project-card:hover .project-image img,
        .project-card:focus-within .project-image img {
          transform: scale(1.05);
        }

        .project-content {
          padding: var(--spacing-md);
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
        }

        .project-description {
          flex-grow: 1;
          color: var(--color-text-secondary);
        }

        .project-tech {
          margin-top: var(--spacing-md);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          background-color: #22c55ecc;
          color: #0f172a;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 8px;
          user-select: none;
          transition: background-color 0.3s ease;
        }

        .tech-tag:hover,
        .tech-tag:focus {
          background-color: #86efac;
          outline: none;
        }

        /* Contact Section */
        .contact-info {
        
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          align-items: center;
          font-size: 1.1rem;
          color: var(--color-text-primary);
          text-align: center;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .contact-link:hover,
        .contact-link:focus {
          color: #86efac;
          outline: none;
        }

        .material-icons.md-18 {
          font-size: 18px;
          vertical-align: middle;
        }

      @media (max-width: 768px) {
  nav.desktop-nav {
    display: none;
  }

  .mobile-menu-button {
    display: inline-block;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-sm);
  }

  .hero-text h1 {
    font-size: 2.0rem; /* Reduced from 3rem */
    line-height: 1.0;
    margin-bottom: var(--spacing-md);
  }

  .hero-text p {
    font-size: 1.0rem; /* Reduced from 1.25rem */
    margin-bottom: var(--spacing-md);
    padding: 0 var(--spacing-sm);
  }

 .btn-primary {
    font-size: 1rem;
    padding: 5px 20px;
    border-radius: 20px;
    box-shadow: 0 0 8px var(--color-accent);
    text-align: center;
    display: inline-block;
    margin-top: var(--spacing-sm);
  }

  .hero-text,
  .hero-image {
    flex: 1 1 360px;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 0 20px 8px var(--color-accent);
    animation: slideInRight 0.8s ease forwards;
    max-width: 100%;
    max-height: 400px;
    transition: box-shadow 0.4s ease, transform 0.4s ease;
    cursor: pointer;
    margin: var(--spacing-xs) 0;
  }

  .hero-image:hover,
  .hero-image:focus-within {
    box-shadow: 0 0 32px 14px #86efac;
    transform: scale(1.03);
    outline: none;
    z-index: 5;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    border-radius: var(--border-radius);
    transition: transform 0.5s ease;
  }

  .hero-image img:hover,
  .hero-image img:focus {
    transform: scale(1.05);
  }

  main {
    margin: var(--spacing-md);
    padding: 0 var(--spacing-sm);
  }

  .skills-list,
  .projects-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .project-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none;
  }
}
          
@media (max-width: 400px) {
  .btn-primary {
    font-size: 0.95rem;
    padding: 10px 16px;
    width: 100%;
    max-width: 90%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .hero-text {
    padding: 0 12px;
  }
    .hero-text h1 {
    font-size: 1.3rem; /* Reduced from 3rem */
    line-height: 0.9;
    margin-bottom: var(--spacing-md);
  }

  .hero-text p {
    font-size: 1rem; /* Reduced from 1.25rem */
    margin-bottom: var(--spacing-md);
    padding: 0 var(--spacing-sm);
  }
}

      `}</style>

      <header role="banner" aria-label="Main navigation">
  <div className="logo-photo-container">
     <img
      src={pic}
      alt="Portrait"
      className="profile-photo"
      loading="lazy"
      width={64}
      height={64}
      tabIndex={-1}
    />
    <div className="logo" tabIndex={-1}>FULLSTACK DEV</div>
   
  </div>
  <nav className="desktop-nav" aria-label="Primary navigation">
    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
      <button
        key={section}
        className={activeSection === section ? 'active' : ''}
        onClick={() => handleNavClick(section)}
        aria-current={activeSection === section ? 'page' : undefined}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>
    ))}
  </nav>
  <button
    className="mobile-menu-button"
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={menuOpen}
    aria-controls="mobile-menu"
    onClick={() => setMenuOpen(!menuOpen)}
    title={menuOpen ? 'Close menu' : 'Open menu'}
  >
    <span className="material-icons" aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
  </button>
</header>

      {menuOpen && (
        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Mobile primary navigation"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-icons">close</span>
          </button>
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleNavClick(section)}
              aria-current={activeSection === section ? 'page' : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}

      <main>
        {activeSection === 'home' && (
          <section aria-label="Introduction" className="hero" id="home">
            <div className="hero-text">
              <h1 tabIndex={0}>Hello, I'm a Fullstack Developer</h1>
              <p tabIndex={0}>
                I build modern, scalable web applications,mobile applications and setting cybersecurity measures using the latest technologies and best practices.  
                My expertise lies in creating efficient, clean, and user-centric solutions.
              </p>
              <a href="#projects" onClick={() => handleNavClick('projects')} className="btn-primary" style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                padding: '12px 28px',
                borderRadius: '24px',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer',
                userSelect: 'none',
                boxShadow: '0 0 12px var(--color-accent)'
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#16a34a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                onFocus={e => e.currentTarget.style.backgroundColor = '#16a34a'}
                onBlur={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
              >
                View My Projects
              </a>
            </div>
            <div className="hero-image">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6e62424-89d1-406c-adba-430ea6e94889.png"
                alt="Modern workspace with dual monitors showing code editor and terminal on dark theme"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section aria-label="About me" id="about">
            <h2 className="section-title">About Me</h2>
            <p tabIndex={0} style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.15rem', color: 'var(--color-text-primary)', lineHeight: 1.7 }}>
              I am a passionate fullstack developer with over 6 years of experience building robust web applications for startups, SMBs, and scalable enterprise systems.  
              My skill set ranges from building beautiful, interactive frontends with React and Vue to architecting and implementing server-side APIs with Node.js and PostgreSQL.
              <br /><br />
              I focus on writing clean, maintainable code, with a keen eye on performance and user experience. Continuous learning and adapting to new technologies are core to my development philosophy.
            </p>
          </section>
        )}

        {activeSection === 'skills' && (
          <section aria-label="Skills and expertise" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list" aria-live="polite">
              {skillsData.map(({ name, level }) => (
                <div key={name} className="skill-card" role="listitem">
                  <div className="skill-name">{name}</div>
                  <div
                    className="progress-bar-bg"
                    aria-label={`${name} proficiency`}
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={level}
                  >
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section aria-label="Completed projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-list" role="list">
              {projectsData.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  tabIndex={0}
                  aria-describedby={`project-desc-${project.id}`}
                  role="listitem"
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      width={400}
                      height={250}
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p
                      id={`project-desc-${project.id}`}
                      className="project-description"
                    >
                      {project.description}
                    </p>
                    <div className="project-tech" aria-label="Technologies used">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag" tabIndex={-1}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}


        {activeSection === 'contact' && (
           <section id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-info">
              <a href="mailto:mmaginelius@gmail.com">📧 maginelius@gmail.com</a>
              <a href="https://github.com/Ellytheo" target="_blank" rel="noreferrer">💻 github.com/Ellytheo</a>
              <a href="https://peopleperhour.com/Ellytheo" target="_blank" rel="noreferrer">💼 peopleperhour.com/Elius Magin</a>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

