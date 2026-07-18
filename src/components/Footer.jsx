import { FaRegEnvelope } from "react-icons/fa6";
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        
        {/* Left Side: Name and Current Year */}
        <p className="footer-brand">
          <span className="footer-name">Younes Nassir</span> &mdash; {currentYear}
        </p>

        {/* Right Side: Clean Contact Hook */}
        <div className="footer-contact">
          <a href="mailto:your.email@gmail.com" className="footer-email-link">
            <FaRegEnvelope /> Contact
          </a>
        </div>

      </div>
    </footer>
  );
}