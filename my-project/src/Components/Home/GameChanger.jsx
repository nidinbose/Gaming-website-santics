import React from "react";
import './CSS/GameChanger.css'; // Import the CSS file

const GameChanger = () => {
  return (
    <section
      className="top"
      style={{
        backgroundImage: "url('/images/Santics11.png')",  // Replace with your image path
        backgroundSize: 'cover',  // Make the background cover the entire section
        backgroundPosition: 'center',  // Center the background image
        backgroundRepeat: 'no-repeat',  // Prevent the background from repeating
   
        height: '60vh',  // Full viewport height
        transition: 'background-position 0.1s ease-out',
      }}
    >
      <div className="scroll">
        <div>SANTICS GAMING - <span>COMPLETE GAME CHANGER</span> - <span>BEST RATE EVER</span>  - <span>EASY RETURNS ASSURED</span> - <span>BRANDED PRODUCTS</span></div>
      </div>
      <div className="scroll2">
        <div>-COMPLETE GAME CHANGER</div>
      </div>
      <div className="sp1">
        <div>- BEST RATE EVER</div>
      </div>
      <div className="sp2">
        <div>- EASY RETURNS ASSURED</div>
      </div>
    </section>
  );
};

export default GameChanger;






