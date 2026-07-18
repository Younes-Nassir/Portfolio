import { FaGithub, FaLinkedin, FaRegEnvelope, FaSun, FaMoon } from "react-icons/fa6";
import '../styles/Header.css';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="portfolio-header">
      <div className="header-brand">
        <span className="brand-bracket">{'<'}</span>Younes Nassir<span className="brand-bracket">{' />'}</span>
      </div>
      
      <nav className="header-nav">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>

        <span className="nav-divider"></span>

        {/* Theme Toggle Button */}
        <button 
          onClick={onToggleTheme} 
          className="theme-toggle-btn"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FaSun size={18} color="#f59e0b" /> : <FaMoon size={18} color="#475569" />}
        </button>

        <span className="nav-divider"></span>

        <ul className="social-links">
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="mailto:your.email@gmail.com">
              <FaRegEnvelope size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}