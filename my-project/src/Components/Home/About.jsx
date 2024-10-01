import React, { useState } from 'react';
import './CSS/About.css'; // Import your CSS file for styling

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI1ZRJJemfY9-wgcpNVsVu18JjaQxIgJcHg&s",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="about-container">
      <div className="background-text">
        {/* <h1>Your Stock Text Here</h1> */}
        {/* <p>This is an example of an overlay text on the background.</p> */}
      </div>
      <div className="slider-container">
        <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
        <div className="image-container">
          <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="about-image"
              />
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default About;
