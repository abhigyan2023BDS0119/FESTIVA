import React from 'react'
import './Navigation.css'
import logo from '../../assets/main.png'

export const Navigation = () => {
  return (
    <nav>
        <img src={logo} className='logo'/>
        <ul>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#events'>Events</a></li>
            <li><a href='#gallery'>Gallery</a></li>
            <li><a href='#about'>About Us</a></li>
            <button className="btn" onClick={() => window.open('/tickets', '_blank', 'noopener,noreferrer')}>TICKETS</button>
            <li><button className='btn'><a href='#contact'>Contact Us</a></button></li>
        </ul>
    </nav>
  )
}