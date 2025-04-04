import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    registrationId: "",
    event: "",
  });

  const [registrations, setRegistrations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrations([...registrations, formData]);
    setShowPopup(true);
  };

  return (
    <div className="register-container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />

        <label>Registration ID</label>
        <input type="text" name="registrationId" placeholder="Enter your Registration ID" value={formData.registrationId} onChange={handleChange} required />

        <label>Select Event</label>
        <select name="event" value={formData.event} onChange={handleChange} required>
          <option value="">Choose an Event</option>
          <option value="Concert Night">Concert Night</option>
          <option value="Dance Battle">Dance Battle</option>
          <option value="Cultural Parade">Cultural Parade</option>
          <option value="DJ Party">DJ Party</option>
          <option value="Food Festival">Food Festival</option>
          <option value="Cricket">Cricket</option>
        </select>

        <button type="submit" className="submit-btn">Register</button>
      </form>

      {/* Success Pop-Up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Registration Successful! 🎉</h2>
            <p>Thank you, <strong>{formData.name}</strong>! You have successfully registered for <strong>{formData.event}</strong>.</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Stored Registrations */}
      <div className="registration-list">
        <h3>Registered Participants</h3>
        <ul>
          {registrations.map((reg, index) => (
            <li key={index}>
              <strong>{reg.name}</strong> - {reg.event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Register;
