import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceAreas from "../components/ServiceAreas";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <h1>Contact Us</h1>

        <form className="contact-form"
              action="https://formsubmit.co/efimova.tatalex@gmail.com"
              method="POST">

          <input
            type="hidden"
            name="_subject"
            value="New Garage Door Request"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            minLength="2"
          />

          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Phone Number"
            required
            pattern="^\+?[0-9\s()-]{10,20}$"
            title="Example: 613-854-2109"
          />

          <textarea
            name="Message"
            placeholder="Tell us about your garage door issue..."
            required
            minLength="15"
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