import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;