import React, { useState, useEffect } from "react";
import "../styles.css";

const CountdownTimer = ({ onCountdownEnd }) => {
  const targetDate = new Date("2025-04-13T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        clearInterval(timer);
        onCountdownEnd();
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onCountdownEnd]); 

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="countdown-page">
      <h1>Are you excited for the surprise?🎁  </h1>
      <h1>I know you are!😊 So Pls hang over here..⏳</h1>
      <h2 className="countdown-timer">{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownTimer;
