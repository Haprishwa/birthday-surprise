import React, { useState } from "react";
import CountdownTimer from "./components/CountdownTimer.js";
import BirthdayCelebration from "./components/Celebration";
import GiftBoxGame from "./components/GiftBoxes";
import VideoPlayer from "./components/VideoPlayer";
import WishesSection from "./components/Wishes";

const App = () => {
  const [stage, setStage] = useState("countdown");

  const handleCountdownEnd = () => setStage("celebration"); // After countdown, show celebration
  const handleCelebrationEnd = () => setStage("giftBox"); // After celebration, show gift boxes
  const handleFinalGiftOpened = () => setStage("video"); // After gift box, show video
  const handleVideoEnd = () => setStage("wishes"); // After video, show wishes

  return (
    <>
      {stage === "countdown" && <CountdownTimer onCountdownEnd={handleCountdownEnd} />}
      {stage === "celebration" && <BirthdayCelebration onCelebrationEnd={handleCelebrationEnd} />}
      {stage === "giftBox" && <GiftBoxGame onFinalGiftOpened={handleFinalGiftOpened} />}
      {stage === "video" && <VideoPlayer onVideoEnd={handleVideoEnd} />}
      {stage === "wishes" && <WishesSection />}
    </>
  );
};

export default App;
