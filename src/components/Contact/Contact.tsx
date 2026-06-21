import profileData from '../../data/profile.json'
import './Contact.scss'

interface ContactInfo {
    platform: string;
    url: string;
    iconPath: string | null;
}

export default function Contact() {
    const contactList: ContactInfo[] = profileData.contact;
    return (
        <section id="contact" className="contact-container">
            <h2 className="section-title">
                Let's Connect!
            </h2>

            <p className="contact-text">
                I'd love to hear from you :)
            </p>

            <div className="links-grid">
                {contactList.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-card">
                        {link.platform}
                    </a>
                ))}
            </div>
        </section>
    );
}
