import repairImg from "../assets/repair.png";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-header">

        <span>RECENT WORK</span>

        <h2>Recent Garage Door Projects</h2>

        <p>
          Proudly serving Ottawa, Kanata,
          Stittsville, Barrhaven and Nepean.
        </p>

      </div>

      <div className="projects-grid">

        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Garage Door Project"
          />
          <h3>Garage Door Installation</h3>
        </div>

        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1772652376695-6b3de826ff9f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Garage Door Project"
          />
          <h3>Spring Replacement</h3>
        </div>

        <div className="project-card">
          <img
            src={repairImg}
            alt="Garage Door Project"
          />
          <h3>Emergency Repair</h3>
        </div>

      </div>

    </section>
  );
}

export default Projects;