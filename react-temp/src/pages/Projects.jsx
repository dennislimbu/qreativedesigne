import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../styles/projects.css';

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-wrap">
        <header className="projects-heading">
          <p>SELECTED WORK</p>
          <h1>Projects</h1>
        </header>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const cardContent = (
              <>
                <img src={project.cover || project.image} alt={project.title} />

                {!project.upcoming && (
                  <div className="project-hover">
                    <div>
                      <p>{project.category}</p>
                      <h2>{project.title}</h2>
                    </div>
                  </div>
                )}

                {project.upcoming && (
                  <div className="upcoming-content">
                    <h2>Upcoming</h2>
                    <p>COMING SOON</p>
                  </div>
                )}
              </>
            );

            if (project.upcoming) {
              return (
                <div
                  key={project.id}
                  className={`portfolio-card ${project.className} upcoming-card`}
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className={`portfolio-card ${project.className}`}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Projects;
