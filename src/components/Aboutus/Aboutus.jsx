import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container" id="about">
        <h2>23BDS0119 ABHIGYAN PRAKASH TIWARY</h2>
        <h2>About Us</h2>
        <p className="tagline">
          Welcome to <span>FESTIVA</span> – The Ultimate College Festival Experience! 🎭
        </p>
        
        <div className="about-content">
          <p>
            At <strong>VIT</strong>, we believe college life is more than just academics—it’s about 
            celebrating creativity, talent, and unforgettable moments. Our annual festival, **[Festival Name]**, is the heart 
            of our vibrant student community, bringing together **music, dance, art, culture, and sports** under one 
            electrifying roof.
          </p>

          <h3> What We Do</h3>
          <p>
            FESTIVA is a 7 day extravaganza filled with thrilling competitions, mesmerizing 
            performances, and engaging workshops. Whether you're a **music enthusiast, a dance lover, a foodie, or a sports 
            fanatic—there’s something for everyone!
          </p>

          <h3> Why Join Us?</h3>
          <ul>
            <li>*<strong>Exciting Events:</strong> From concerts to tech fests, witness jaw-dropping performances & competitions.</li>
            <li>*<strong>Celebrity Guests:</strong> Get a chance to see and interact with artists & influencers.</li>
            <li>*<strong>Networking & Fun:</strong> Meet students from different colleges and make lifelong memories.</li>
            <li>*<strong>Learn & Grow:</strong> Participate in workshops, panel discussions, and creative sessions.</li>
          </ul>

          <h3> Our Vision</h3>
          <p>
            Our mission is to create a platform where students can showcase their skills, break boundaries, and celebrate 
            diversity. FESTIVA is more than just an event—it’s a movement to bring people together through passion 
            and talent.
          </p>

          <p className="cta">Join us and make <strong>FESTIVA</strong> bigger and better this year! Let’s create moments that last a lifetime! 🎶🎭🔥</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
