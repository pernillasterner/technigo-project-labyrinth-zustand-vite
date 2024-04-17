import "./MazeContent.scss";
import { useMazeStore } from "../../stores/useMazeStore";
import { useState } from "react";
import { MazeDirection } from "./MazeDirection";

export const MazeCard = () => {
  const [toggleDirection, setToggleDirection] = useState(false);
  // actions, description, step
  const { description } = useMazeStore();

  const handleToggleBtn = () => {
    // Get alla directionContainer
    setToggleDirection(!toggleDirection);
  };

  return (
    <>
      <button className="toogle__btn" type="button" onClick={handleToggleBtn}>
        Show Directions
      </button>
      <p>{description}</p>
      {/* Show direction choices when clicking the toggle btn */}
      {toggleDirection && <MazeDirection />}
    </>
  );
};
