import './Footer.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="copyright">
                    &copy; {currentYear} Shreya Kakachery. All rights reserved.
                </p>
                <span className="tagline"> 
                    Stay curious.
                </span>
            </div>
        </footer>
    )
}