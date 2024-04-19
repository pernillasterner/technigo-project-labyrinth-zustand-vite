import "./../MazeContent.scss";
import { useMazeStore } from "../../../stores/useMazeStore";
import { useState } from "react";
import { MazeDescription } from "./MazeDescription";

export const MazeCard = () => {
  const [toggleDescription, setToggleDescription] = useState(false);
  const { description } = useMazeStore();

  // Toggle the show description button.
  const handleToggleBtn = () => {
    // Get alla descriptionContainer
    setToggleDescription(!toggleDescription);
  };

  return (
    <div className="card__container">
      <button className="toggle__btn" type="button" onClick={handleToggleBtn}>
        Show Descriptions
      </button>
      {/* Display more info when toggle */}
      {!toggleDescription ? <p>{description}</p> : <MazeDescription />}
    </div>
  );
};
