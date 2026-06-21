import "./EducationCard.scss";

interface EducationCardProps {
  program: string;
  institution: string;
  start: string;
  end: string;
}

export default function EducationCard({
  program,
  institution,
  start,
  end,
}: EducationCardProps) {
  return (
    <div className="portfolio-card education-card">
      <div className="card-header">
        <h3 className="title">{program}</h3>
        <span className="duration">
          {start} - {end}
        </span>
        <h4 className="subtitle">{institution}</h4>
      </div>
    </div>
  );
}
