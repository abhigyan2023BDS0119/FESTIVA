import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Tickets.css";

const eventPrices = {
  "Concert Night": 2000,
  "Dance Battle": 700,
  "Cultural Parade": 100,
  "DJ Party": 800,
  "Food Festival": 500,
  "Cricket": 750,
};

const Tickets = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: [],
    paymentMethod: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [receipt, setReceipt] = useState(null);

  const handleChange = (e, index) => {
    const updatedTickets = [...formData.tickets];
    updatedTickets[index][e.target.name] = e.target.value;
    setFormData({ ...formData, tickets: updatedTickets });
  };

  const handleAddTicket = () => {
    setFormData({
      ...formData,
      tickets: [...formData.tickets, { event: "", quantity: 1 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTickets = formData.tickets.map(ticket => ({
      ...ticket,
      total: eventPrices[ticket.event] * ticket.quantity
    }));
    const grandTotal = newTickets.reduce((sum, ticket) => sum + ticket.total, 0);
    setPurchasedTickets([...purchasedTickets, ...newTickets]);
    setReceipt({ ...formData, tickets: newTickets, grandTotal });
    setShowPopup(true);
    setFormData({ name: "", email: "", phone: "", tickets: [], paymentMethod: "" });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Ticket Purchase Receipt", 10, 10);
    doc.text(`Name: ${receipt.name}`, 10, 20);
    doc.text(`Email: ${receipt.email}`, 10, 30);
    doc.text(`Phone: ${receipt.phone}`, 10, 40);
    doc.text("Tickets Purchased:", 10, 50);
    receipt.tickets.forEach((ticket, index) => {
      doc.text(`${ticket.quantity} x ${ticket.event} - Rs${ticket.total}`, 10, 60 + index * 10);
    });
    doc.text(`Grand Total: Rs${receipt.grandTotal}`, 10, 80 + receipt.tickets.length * 10);
    doc.text(`Payment Method: ${receipt.paymentMethod}`, 10, 90 + receipt.tickets.length * 10);
    doc.save("Ticket_Receipt.pdf");
  };

  return (
    <div className="tickets-container">
      <h2>Buy Event Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />

        {formData.tickets.map((ticket, index) => (
          <div key={index} className="ticket-group">
            <label>Select Event</label>
            <select name="event" value={ticket.event} onChange={(e) => handleChange(e, index)} required>
              <option value="">Choose an Event</option>
              {Object.keys(eventPrices).map((event) => (
                <option key={event} value={event}>{event} - Rs{eventPrices[event]}</option>
              ))}
            </select>

            <label>Number of Tickets</label>
            <input type="number" name="quantity" min="1" value={ticket.quantity} onChange={(e) => handleChange(e, index)} required />
          </div>
        ))}

        <button type="button" className="add-ticket-btn" onClick={handleAddTicket}>Add Another Event</button>

        <label>Select Payment Method</label>
        <select name="paymentMethod" value={formData.paymentMethod} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} required>
          <option value="">Choose Payment Method</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
          <option value="QR Code">QR Code</option>
        </select>

        <button type="submit" className="submit-btn">Purchase Tickets</button>
      </form>

      {showPopup && receipt && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎟️ Ticket Purchase Successful! 🎟️</h2>
            <p>Thank you, <strong>{receipt.name}</strong>! You have successfully purchased tickets for multiple events.</p>
            <ul>
              {receipt.tickets.map((ticket, index) => (
                <li key={index}>{ticket.quantity} ticket(s) for <strong>{ticket.event}</strong> (Total: Rs{ticket.total})</li>
              ))}
            </ul>
            <h3>Grand Total: Rs{receipt.grandTotal}</h3>
            <h3>Payment Method: {receipt.paymentMethod}</h3>
            <button className="download-btn" onClick={generatePDF}>Download Receipt</button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
