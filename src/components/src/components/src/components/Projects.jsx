import React from "react";

const projectList = [
  {
    name: "TaskNest",
    desc: "Collaborative task management app",
    link: "#",
  },
  {
    name: "PayFlow",
    desc: "Secure expense & payment tracker",
    link: "#",
  },
  {
    name: "Eventify",
    desc: "Event discovery & booking platform",
    link: "#",
  },
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {projectList.map((project, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 300px",
              padding: "20px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link}>
              <button>View</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
