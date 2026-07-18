import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <p className="section-eyebrow">About</p>

        <div className="about-card">
          <p>
            I'm <span className="highlight-text">Younes Nassir</span>, a full-stack developer studying digital development. I like taking a project from a blank repo to something people actually use — most recently a social platform for students and a clinic management tool for doctors and their staff.
          </p>
          <p>
            Backend: Laravel or Node/Express, with MySQL or MongoDB. Frontend: React with Tailwind. I care about the parts that don't show up in a demo — clean data models, sane API design, code someone else (or future me) can actually maintain.
          </p>

          <div className="about-links">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="about-link-item linkedin">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="mailto:your.email@gmail.com" className="about-link-item email">
              <FaRegEnvelope /> Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}