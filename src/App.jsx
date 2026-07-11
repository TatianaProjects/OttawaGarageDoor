import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;