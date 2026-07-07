import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceAreas from "../components/ServiceAreas";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Tell us about your garage door issue..."
          ></textarea>

          <button type="submit">
            Get Free Quote
          </button>
        </form>
      </section>



      <ServiceAreas />
      <Footer />
    </>
  );
}

export default Contact;