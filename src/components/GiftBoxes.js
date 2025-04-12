import React, { useState } from "react";
import "../styles.css";

const giftMessages = [
  "Are you ready for your surprise?",
  "It's something very special!",
  "You're getting closer!",
  "Almost there!",
  "Here's the final surprise!"
];

const GiftBoxGame = ({ onFinalGiftOpened }) => {
  const [currentGift, setCurrentGift] = useState(0);

  const handleGiftClick = () => {
    if (currentGift < giftMessages.length - 1) {
      setCurrentGift(currentGift + 1);
    } else {
      onFinalGiftOpened();
    }
  };

  return (
    <div className="gift-box-container">
      <div className="gift-box" onClick={handleGiftClick}></div>
      <p className="gift-message">{giftMessages[currentGift]}</p>
      {currentGift === giftMessages.length - 1 && (
        <button className="open-video-btn" onClick={onFinalGiftOpened}>
          Let's go Girl !
        </button>
      )}
    </div>
  );
};

export default GiftBoxGame;
