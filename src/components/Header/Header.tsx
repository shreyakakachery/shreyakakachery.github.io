import "./Header.scss";

export default function Header() {
  const navLinks = ["Home", "Education", "Experience", "Projects", "Contact"];

  return (
    <header className="site-header">
      <nav className="nav-container">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
