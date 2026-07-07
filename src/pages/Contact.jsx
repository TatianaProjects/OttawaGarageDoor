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
          />

          <textarea
            name="Message"
            placeholder="Tell us about your garage door issue..."
            required
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