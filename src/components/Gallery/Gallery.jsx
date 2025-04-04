import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    { image: "/src/assets/fest1.jpeg", title: "Concert Night" },
    { image: "/src/assets/fest2.jpeg", title: "Dance Battle" },
    { image: "/src/assets/fest3.jpeg", title: "Cultural Parade" },
    { image: "/src/assets/fest4.jpeg", title: "DJ Party" },
    { image: "/src/assets/fest5.jpeg", title: "Food Festival" },
    { image: "/src/assets/fest6.jpg", title: "Singing" },
    { image: "/src/assets/fest7.jpeg", title: "Cricket" },
    { image: "/src/assets/fest8.jpg", title: "Running" },
    { image: "/src/assets/fest9.jpg", title: "GoKarting" },
  ];

  return (
    <section className="gallery" id='gallery'>
      <h2>Festival Highlights</h2>
      <p>Relive the best moments from our amazing festivals!</p>

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-item" key={index} onClick={() => setSelectedImage(item.image)}>
            <img src={item.image} alt={item.title} />
            <p className="photo-title">{item.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
