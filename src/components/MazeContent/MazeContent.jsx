import "./MazeContent.scss";
import { StartMaze } from "./StartMaze";
import { useMazeStore } from "../../stores/useMazeStore";

export const MazeContent = () => {
  const { gameOn, step } = useMazeStore();

  console.log(step, gameOn);
  return (
    <div className="maze__container">
      {/* If step is 0 and gameOn = false */}
      <StartMaze />
    </div>
  );
};
