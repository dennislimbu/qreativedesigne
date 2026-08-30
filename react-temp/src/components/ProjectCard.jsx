import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const content = (
    <>
      <img src={project.cover || project.image} alt={project.title} />

      <div className="project-overlay">
        <div>
          <p className="project-card-category">
            {project.upcoming ? 'COMING SOON' : project.category}
          </p>

          <h2>{project.upcoming ? 'Upcoming Project' : project.title}</h2>
        </div>
      </div>
    </>
  );

  if (project.upcoming) {
    return (
      <div
        className={`project-card ${project.className} project-card-upcoming`}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${project.className}`}
    >
      {content}
    </Link>
  );
}

export default ProjectCard;
