import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaPython, 
  FaPhp, 
  FaLaravel, 
  FaFigma, 
  FaDocker,
  FaNodeJs,
  FaGitAlt,
  FaCode
} from "react-icons/fa6";

import { 
  SiJavascript, 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb,
  SiRabbitmq,
  SiPostman,
  SiExpress
} from "react-icons/si";
import '../styles/Skills.css'

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
        { name: "React JS", icon: <FaReact />, color: "#61dafb" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Node JS", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "Laravel", icon: <FaLaravel />, color: "#ff2d20" },
        { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
        { name: "RabbitMQ", icon: <SiRabbitmq />, color: "#ff6600" },
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
      ]
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f05032" },
        { name: "VS Code", icon: <FaCode />, color: "#007acc" },
        { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
        { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="section-eyebrow">Skills &amp; Tools</p>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="skills-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="category-title">{group.title}</h3>
              <div className="badges-wrapper">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge">
                    <span className="badge-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="badge-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}