import React from "react";
import "./Contactfooter.css"; // Import CSS file

const Contactfooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-container" id='contact'>
        <h3>Get in Touch</h3>
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Fill out the form below, and our
          team will get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h4><span>FESTIVA</span></h4>
          <p>Plan, Manage & Enjoy College Events Effortlessly</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href='#hero'>HOME</a></li>
            <li><a href='#events'>EVENTS</a></li>
            <li><a href='#about'>ABOUT US</a></li>
            <li><a href='#gallery'>GALLERY</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get in Touch</h4>
          <p>+91 7050120333</p>
          <p>contact@abhigyanfestiva.com</p>
          <p>VIT Vellore, 632014</p>
        </div>
      </div>

      <p className="copyright">© 2025 AbhigyanFestiva. All Rights Reserved.</p>
    </footer>
  );
};

export default Contactfooter;
