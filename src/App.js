import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import ContactMe from "./Pages/Home/ContactMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from "./Pages/Home/AboutMe";
import Testimonial from "./Pages/Home/Testimonials";
import MySkills from "./Pages/Home/MySkills";
import Footer from "./Pages/Home/Footer";
import HeroSection from "./Pages/Home/HeroSection";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/contact_us" element={<ContactMe />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/skills" element={<MySkills />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
