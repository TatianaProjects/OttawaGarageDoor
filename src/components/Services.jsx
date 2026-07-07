import {
  FaTools,
  FaBolt,
  FaScrewdriver,
  FaLink,
  FaCog,
  FaWarehouse,
  FaWrench,
} from "react-icons/fa";

function Services() {
  return (
    <section className="services">

      <div className="section-header">
        <span>WHAT WE DO</span>

        <h2>Professional Garage Door Services</h2>

        <p>
          Fast, reliable and affordable garage door
          solutions for homeowners across Ottawa.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>Emergency Repair</h3>
          <p>24/7 emergency garage door repair service.</p>
        </div>

        <div className="service-card">
          <FaWarehouse className="service-icon" />
          <h3>Door Installation</h3>
          <p>New garage door installation and replacement.</p>
        </div>

        <div className="service-card">
          <FaScrewdriver className="service-icon" />
          <h3>Spring Replacement</h3>
          <p>Broken torsion and extension spring replacement.</p>
        </div>

        <div className="service-card">
          <FaLink className="service-icon" />
          <h3>Cable Repair</h3>
          <p>Safe replacement of worn or broken cables.</p>
        </div>

        <div className="service-card">
          <FaCog className="service-icon" />
          <h3>Opener Repair</h3>
          <p>Repair and troubleshooting for garage openers.</p>
        </div>

        
        <div className="service-card">
          <FaWrench className="service-icon" />
          <h3>Maintenance</h3>
          <p>Preventative maintenance to extend door life.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;