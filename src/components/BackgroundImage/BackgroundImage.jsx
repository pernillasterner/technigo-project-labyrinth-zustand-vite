import "./BackgroundImage.scss";
import { useState, useEffect } from "react";
import backgroundImagesData from "../../data/backgroundImagesData.json";
import { useMazeStore } from "../../stores/useMazeStore";

export const BackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const { step } = useMazeStore();

  // This useEffect statement will handle background images.
  useEffect(() => {
    // Run if step is more than 0 and less than the length of the bg-image array
    if (step >= 0 && step < backgroundImagesData[0].backgroundImages.length) {
      setBackgroundImage(
        `url(${backgroundImagesData[0].backgroundImages[step]})`
      );
    }
  }, [step]);

  return (
    <div
      className="backgroundImage__container"
      style={{ backgroundImage: backgroundImage }}
    ></div>
  );
};
