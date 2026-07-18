import { FaGithub, FaFolderOpen, FaArrowUpRightFromSquare } from "react-icons/fa6";
import '../styles/Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Academic Social Network",
      description: "A collaborative social platform built for students and educators featuring robust module management, real-time communication modules, and active academic discussions.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      // TODO: swap in a real screenshot, e.g. "/images/academic-social-network.png"
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com/Younes-Nassir" // TODO: link to the actual repo
    },
    {
      title: "YOS-Care - Medical Management Platform",
      description: "A full-stack medical platform combining MySQL and MongoDB where doctors configure digital clinics and delegate access to secretary accounts, featuring real-time client booking and interactive calendars.",
      tags: ["React", "PHP", "MySQL", "MongoDB"],
      // TODO: swap in a real screenshot, e.g. "/images/yos-care.png"
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com/Younes-Nassir" // TODO: link to the actual repo
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <p className="section-eyebrow">Featured Projects</p>

        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >

              {/* Thumbnail: shows the real screenshot once `image` is set,
                  otherwise falls back to a clean placeholder so the layout
                  never breaks while you're waiting on assets. */}
              <div className="project-card-thumb">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} className="project-thumb-img" />
                ) : (
                  <div className="project-thumb-placeholder">
                    <FaFolderOpen className="folder-icon" />
                  </div>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-card-header">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code" className="project-icon-link">
                      <FaGithub />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Project" className="project-icon-link">
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
                <p className="project-card-text">{project.description}</p>
                <div className="project-tags-wrapper">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-badge">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}