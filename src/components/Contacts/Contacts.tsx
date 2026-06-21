import profileData from '../../data/profile.json'
import './Contacts.scss'

interface ContactInfo {
    platform: string;
    url: string;
    iconPath: string | null;
}

export default function Contacts() {
    const contactsList: ContactInfo[] = profileData.contacts;
    return (
        <section className="contacts-container">
            <h2 className="section-title">
                Let's Connect!
            </h2>

            <p className="contacts-text">
                I'd love to hear from you :)
            </p>

            <div className="links-grid">
                {contactsList.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-card">
                        {link.platform}
                    </a>
                ))}
            </div>
        </section>
    );
}
