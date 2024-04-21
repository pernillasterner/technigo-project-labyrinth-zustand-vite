import "./../MazeContent.scss";
import { useMazeStore } from "../../../stores/useMazeStore";
import { East, North, South, West } from "../../../assets/Icons";

export const MazeDirections = () => {
  const { actions, incrementStep, fetchMazeAction, username } = useMazeStore();

  const handleDirection = (direction) => {
    incrementStep();
    fetchMazeAction(username, "move", direction);
  };

  // Function that selects the direction icons depending on the data from the API
  const getDirectionIcon = (direction) => {
    switch (direction) {
      case "North":
        return <North />;
      case "South":
        return <South />;
      case "East":
        return <East />;
      case "West":
        return <West />;
      default:
        return null;
    }
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
          <div className="direction__btn">
            {/* Display correct icon depending on direction */}
            {getDirectionIcon(action.direction)}
          </div>
          <p>{action.direction}</p>
        </div>
      ))}
    </>
  );
};
