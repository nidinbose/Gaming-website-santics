import React from "react";
import './CSS/GameChanger.css'; // Import the CSS file

const GameChanger = () => {
  return (
    <div className="h-96 w-full flex justify-center items-center overflow-hidden bg-black">
      <div className="animate-scroll text-white text-3xl font-bold h-full flex items-center space-x-10">
        <h1 className="text-9xl whitespace-nowrap overflow-hidden" id="text1">
          THE PERFECT GAME CHANGER      <span> GAMING STORE</span>
        </h1>
      
      </div>
    </div>
  );
};

export default GameChanger;


