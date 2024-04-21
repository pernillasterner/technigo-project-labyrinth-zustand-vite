import { useMazeStore } from "../../../stores/useMazeStore";

export const MazeDescription = () => {
  const { actions, incrementStep, fetchMazeAction, username } = useMazeStore();

  // Function the will increment the global variable step with + 1 and pass data to API that handles actions
  const handleDirection = (direction) => {
    incrementStep();
    fetchMazeAction(username, "move", direction);
  };

  return (
    <div className="direction__container">
      {actions.map((action, index) => (
        <div key={index} className="direction__card">
          <p>{action.description}</p>
          <button
            type="button"
            onClick={() => handleDirection(action.direction)}
          >
            {action.direction}
          </button>
        </div>
      ))}
    </div>
  );
};
