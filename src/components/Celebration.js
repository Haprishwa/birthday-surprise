import React, { useEffect } from "react";
import "../styles.css";

const BirthdayCelebration = ({ onCelebrationEnd }) => {
  useEffect(() => {
    setTimeout(onCelebrationEnd, 6400); // Celebration lasts 10 seconds
  }, [onCelebrationEnd]);

  return (
    <div className="celebration-page">
      {/* Fireworks Video Background */}
      <video className="fireworks-video" autoPlay loop muted>
        <source src="/images/fireworks.mp4" type="video/mp4" />
      </video>

      {/* Floating Text & Emojis */}
      <h1 className="flip-text">HAPPY BIRTHDAY PRANEE!!</h1>
      <div className="floating-emojis">
        <span>🎈</span>
        <span>🎆</span>
        <span>🎊</span>
        <span>🎂</span>
        <span>🎁</span>
      </div>
    </div>
  );
};

export default BirthdayCelebration;
