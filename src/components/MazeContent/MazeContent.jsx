import "./MazeContent.scss";
import { StartMaze } from "./MazeContentParts/StartMaze";
import { useMazeStore } from "../../stores/useMazeStore";
import { MazeCard } from "./MazeContentParts/MazeCard";
import { MazeDirections } from "./MazeContentParts/MazeDirections";

export const MazeContent = () => {
  const { gameOn } = useMazeStore();

  return (
    <div className="maze__wrapper">
      {/* Show MazeCard when gameOn is true */}
      {!gameOn ? (
        <StartMaze />
      ) : (
        <>
          <MazeCard /> <MazeDirections />
        </>
      )}
    </div>
  );
};
