import "./ProjectCard.scss";

interface ProjectCardProps {
  title: string;
  githubLink: string | null;
  liveLink: string | null;
  description: string;
  why: string;
  tools: string[];
}

export default function ProjectCard({
  title,
  githubLink,
  liveLink,
  description,
  why,
  tools,
}: ProjectCardProps) {
  return (
    <div className="portfolio-card project-card">
      <div className="card-header">
        <h3 className="title">{title}</h3>
        <div className="links-container">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
      <p className="description">
        <strong>What:</strong>
        {description}
      </p>
      <p className="description why-text">
        <strong>Why: </strong> {why}
      </p>

      {tools && tools.length > 0 && (
        <div className="tags-container">
          {tools.map((tool, index) => (
            <span key={index} className="tag">
              {tool}{" "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
