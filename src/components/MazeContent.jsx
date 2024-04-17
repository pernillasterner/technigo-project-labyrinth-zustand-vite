import "./MazeContent.scss";
import { StartMaze } from "./StartMaze/StartMaze";

export const MazeContent = () => {
  return (
    <div className="maze__container">
      {/* If step is 0 and gameOn = false */}
      <StartMaze />
    </div>
  );
};
