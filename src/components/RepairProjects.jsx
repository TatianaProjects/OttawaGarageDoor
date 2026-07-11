function RepairProjects() {

  const repairs = [

    {
      image: "/images/repair1.JPG",
      title: "Garage Door Torsion Spring Replacement",
      description:
        "Replaced old worn-out torsion springs with a new balanced spring system for safe and smooth operation."
    },

    {
      image: "/images/repair2.jpg",
      title: "Garage Door Opener Repair",
      description:
        "Diagnosed electrical issues, reconnected wiring, and restored smooth garage door operation."
    },

    {
      image: "/images/repair3.jpg",
      title: "Cable & Drum Inspection",
      description:
        "Performed a complete inspection of cables, drums, rollers and hardware to ensure reliable performance."
    },

    {
      image: "/images/repair4.JPG",
      title: "Panel Replacement",
      description:
        "Removed damaged garage door panels."
    },

     {
      image: "/images/repair5.JPG",
      title: "Panel Replacement",
      description:
        "Installed matching replacement panels to restore appearance and functionality."
    },

    {
      image: "/images/repair6.png",
      title: "Off-Track Door Repair",
      description:
        "Realigned an off-track garage door, replaced damaged rollers, adjusted the track system and completed a full safety inspection."
    }
    

  ];

  return (

    <section id="projects" className="repair-projects">

      <div className="section-header">

        <span>ON-SITE REPAIRS</span>

        <h2>Keeping Garage Doors Running Smoothly</h2>

        <p>
          Every repair is completed with safety, reliability, and long-lasting performance in mind.
        </p>

      </div>

      <div className="repair-grid">

        {repairs.map((repair, index) => (

          <div
            className="repair-card"
            key={index}
          >

            <img
              src={repair.image}
              alt={repair.title}
            />

            <div className="repair-info">

              <h3>{repair.title}</h3>

              <p>{repair.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default RepairProjects;