import "./../MazeContent.scss";
import { useMazeStore } from "../../../stores/useMazeStore";

export const MazeDirections = () => {
  const { actions } = useMazeStore();

  return (
    <>
      {actions.map((action, index) => (
        <div
          key={`direction-${index}`}
          className={action.direction.toLowerCase()}
        >
          <div className="direction__btn">svg</div>
          <p>{action.direction}</p>
        </div>
      ))}
    </>
  );
};
