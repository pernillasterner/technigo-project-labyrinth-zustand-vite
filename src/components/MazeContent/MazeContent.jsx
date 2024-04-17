import "./MazeContent.scss";
import { StartMaze } from "./StartMaze";
import { useMazeStore } from "../../stores/useMazeStore";
import { MazeCard } from "./MazeCard";

export const MazeContent = () => {
  const { gameOn } = useMazeStore();

  console.log(`Is Game ON: ${gameOn}`);

  return (
    <div className="maze__container">
      {/* Show MazeCard when gameOn is true */}
      {gameOn ? <StartMaze /> : <MazeCard />}
    </div>
  );
};
