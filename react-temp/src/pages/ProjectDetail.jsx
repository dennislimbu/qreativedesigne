import { useParams, Link } from 'react-router-dom';

import { projects } from '../data/projects';
import '../styles/projectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found</h1>

        <Link to="/projects">← Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-detail">
      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero-image">
          <img src={project.cover} alt={project.title} />
        </div>

        <div className="project-hero-content">
          <p className="project-category">{project.category}</p>

          <h1>{project.title}</h1>

          {project.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      {project.video && (
        <section className="project-video-section">
          <div className="section-heading">
            <p>MOTION GRAPHICS</p>
            <h2>{project.title}</h2>
          </div>

          <div className="project-video-wrapper">
            <video controls playsInline preload="metadata">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}

      {/* BRAND IDENTITY */}
      {project.brand && (
        <section className="brand-section">
          <h2>{project.title} · Brand Identity</h2>

          <div className="brand-grid">
            <article className="brand-introduction">
              <h3>Introduction</h3>

              <p>{project.brand.introduction}</p>
            </article>

            <article>
              <h3>Brand Vision</h3>

              <p>{project.brand.vision}</p>
            </article>

            <article>
              <h3>Brand Mission</h3>

              <p>{project.brand.mission}</p>
            </article>
          </div>
        </section>
      )}

      {/* LOGOS */}
      {project.logos?.length > 0 && (
        <section className="project-section">
          <div className="section-heading">
            <p>BRAND SYSTEM</p>
            <h2>Logo Identity</h2>
          </div>

          <div className="logo-grid">
            {project.logos.map((logo, index) => (
              <figure className="logo-card" key={index}>
                <img src={logo.image} alt={`${project.title} ${logo.label}`} />

                <figcaption>{logo.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* COLOUR PALETTE */}
      {project.colors?.length > 0 && (
        <section className="project-section">
          <div className="section-heading">
            <p>VISUAL IDENTITY</p>
            <h2>Colour Palette</h2>
          </div>

          <div className="colour-grid">
            {project.colors.map((color) => (
              <div className="colour-item" key={color}>
                <div
                  className="colour-circle"
                  style={{
                    backgroundColor: color,
                  }}
                />

                <span>{color}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TYPOGRAPHY */}
      {project.typography?.length > 0 && (
        <section className="project-section">
          <div className="section-heading">
            <p>TYPE SYSTEM</p>
            <h2>Typography</h2>
          </div>

          <div className="typography-grid">
            {project.typography.map((font, index) => (
              <div className="type-item" key={index}>
                <div
                  className="type-example"
                  style={{
                    fontWeight: font.value,
                  }}
                >
                  Aa
                </div>

                <p>{font.name}</p>

                <span>{font.weight}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {project.gallery?.length > 0 && (
        <section className="project-gallery">
          <div className="section-heading">
            <p>PROJECT GALLERY</p>
            <h2>Selected Work</h2>
          </div>

          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} project image ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}

      {/* BACK */}
      <section className="project-navigation">
        <Link to="/projects">← All Projects</Link>
      </section>
    </main>
  );
}

export default ProjectDetail;
