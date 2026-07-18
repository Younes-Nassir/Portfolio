import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <h2 className="about-title">About Me</h2>
        
        <div className="about-text">
          <p>
            Hello! I'm <span className="highlight-text">Younes Nassir</span>, a digital development student specializing in full-stack web development. I love building clean, scalable applications and turning complex problems into functional code.
          </p>
          <p>
            Whether working on robust backend systems or creating interactive, responsive user interfaces, I focus on writing maintainable code and following agile practices.
          </p>
        </div>

        {/* Inline Contact Links directly under the text */}
        <div className="about-links">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="about-link-item linkedin">
            <FaLinkedinIn /> LinkedIn
          </a>
          
          <a href="mailto:your.email@gmail.com" className="about-link-item email">
            <FaRegEnvelope /> Email
          </a>
        </div>

      </div>
    </section>
  );
}