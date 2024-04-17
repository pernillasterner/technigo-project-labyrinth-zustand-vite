import "./BackgroundImage.scss";
import { useState, useEffect } from "react";
import backgroundImagesData from "../../data/backgroundImagesData.json";

export const BackgroundImage = () => {
  const [gameOn, setGameOn] = useState(false);
  const [step, setStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  // This useEffect statement will handle background images.
  useEffect(() => {
    if (!gameOn && step === 0) {
      setBackgroundImage(`url(${backgroundImagesData[0].backgroundImages[0]})`);
    } else {
      console.log("Next background image");
    }
  }, [step, gameOn]);

  return (
    <div
      className="backgroundImage__container"
      style={{ backgroundImage: backgroundImage }}
    ></div>
  );
};
