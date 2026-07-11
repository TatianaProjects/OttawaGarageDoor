import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";
import CompletedInstallations from "../components/CompletedInstallations";
import RepairProjects from "../components/RepairProjects";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Reviews() {
  return (
    <>
      <Navbar />
      
      <RepairProjects />
      <CompletedInstallations/>
      <ReviewSection />
      <FAQ />
      <Footer />
    </>
  );
}

export default Reviews;