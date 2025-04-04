import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Events.css";

const eventsData = [
  { image: "/src/assets/fest1.jpeg", title: "Concert Night", description: "Experience electrifying performances and live music." },
  { image: "/src/assets/fest2.jpeg", title: "Dance Battle", description: "Witness intense dance battles with top performers." },
  { image: "/src/assets/fest3.jpeg", title: "Cultural Parade", description: "Celebrate diverse cultures with a grand parade." },
  { image: "/src/assets/fest4.jpeg", title: "DJ Party", description: "Get ready to groove with top DJs and a vibrant crowd." },
  { image: "/src/assets/fest5.jpeg", title: "Food Festival", description: "Taste amazing cuisines from around the world." },
  { image: "/src/assets/fest7.jpeg", title: "Cricket11", description: "Make your Team11 and enjoy on 22 yards" },
];

const Events = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <section className="events" id='events'>
      <h2 className="events-title">Upcoming Events</h2>
      <p className="events-subtitle">Don't miss out on these exciting experiences!</p>

      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="get-started" onClick={() => window.open('/register', '_blank', 'noopener,noreferrer')}>Register Now!</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
