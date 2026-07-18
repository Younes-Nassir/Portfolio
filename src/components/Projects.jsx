import { FaGithub, FaFolderOpen, FaArrowUpRightFromSquare } from "react-icons/fa6";
import '../styles/Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Academic Social Network",
      description: "A collaborative social platform built for students and educators featuring robust module management, real-time communication modules, and active academic discussions.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername"
    },
    {
      title: "YOS-Care - Medical Management Platform",
      description: "A full-stack medical platform combining MySQL and MongoDB where doctors configure digital clinics and delegate access to secretary accounts, featuring real-time client booking and interactive calendars.",
      tags: ["React", "PHP", "MySQL", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <h2 className="projects-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <div key={idx} className="project-card">
              
              {/* Card Header */}
              <div className="project-card-header">
                <FaFolderOpen className="folder-icon" />
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code" className="project-icon-link">
                    <FaGithub />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Project" className="project-icon-link">
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-text">{project.description}</p>
              </div>

              {/* Card Footer */}
              <div className="project-card-footer">
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