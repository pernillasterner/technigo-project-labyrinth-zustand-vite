import { useMazeStore } from "../../../stores/useMazeStore";

export const MazeDescription = () => {
  const { actions } = useMazeStore();

  return (
    <div className="direction__container">
      {actions.map((action, index) => (
        <div key={index} className="direction__card">
          <p>{action.description}</p>
          <button type="button">{action.direction}</button>
        </div>
      ))}
    </div>
  );
};
