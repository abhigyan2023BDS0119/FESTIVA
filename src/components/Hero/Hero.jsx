import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="overlay"></div>
      <div className="content">
        <div className="square"></div>
        <h1>LET'S PLAN THE EVENT</h1>
        <div className="underline"></div>
        <p>
        Plan, Manage & Enjoy College Events Effortlessly!
        </p>
        <button className="cta-button"><a href='#events'>Explore Events</a></button>
      </div>
    </div>
  );
};

export default Hero;
