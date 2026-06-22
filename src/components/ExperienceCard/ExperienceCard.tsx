import './ExperienceCard.scss'

interface ExperienceCardProps {
    role: string;
    location1: string;
    start: string;
    end: string;
    description: string;
    skills: string[];
}

export default function ExperienceCard({
    role, 
    location1, 
    start, 
    end, 
    description, 
    skills
}: ExperienceCardProps) {
    return (
        <div className="portfolio-card experience-card">
            <div className="card-header">
                <h3 className="title">
                    {role}
                </h3>
                <span className="date-badge">
                    {start} - {end}
                </span>
            </div>

            <h4 className="subtitle">
                {location1}
                {/* {location1} {location2 && <span className="location-divider">| {location2}</span>}  */}
            </h4>

            <p className="description">
                {description}
            </p>

            {skills && skills.length >0 && (
                <div className="tags-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="tag">
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}