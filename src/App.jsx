import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/Aboutus/Aboutus";
import { Navigation } from "./components/Navigation/Navigation";
import Events from "./components/Events/Events";
import Register from "./pages/Register"; // Import the Register Page
import Contactfooter from "./components/Footer/Contactfooter";
import Tickets from "./pages/Tickets";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Gallery />
            <Events />
            <Contactfooter/>
          </>
        }/>
        <Route path="/register" element={<Register />} />
        <Route path="/tickets" element={<Tickets/>}/>
      </Routes>
    </Router>
  );
};

export default App;
