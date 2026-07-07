import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ReviewSection from "../components/ReviewSection";
import CTA from "../components/CTA";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ReviewSection />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;