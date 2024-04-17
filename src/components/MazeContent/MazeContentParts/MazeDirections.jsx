import "./../MazeContent.scss";
import { useMazeStore } from "../../../stores/useMazeStore";

export const MazeDirections = () => {
  const { actions, incrementStep, fetchMazeAction, username } = useMazeStore();

  const handleDirection = (direction) => {
    console.log(`Handle Direction ${direction}`);
    incrementStep();
    fetchMazeAction(username, "move", direction);
  };

  return (
    <>
      {actions.map((action, index) => (
        <div
          key={`direction-${index}`}
          className={action.direction.toLowerCase()}
          role="presentation"
          onClick={() => handleDirection(action.direction)}
        >
          <div className="direction__btn">svg</div>
          <p>{action.direction}</p>
        </div>
      ))}
    </>
  );
};
