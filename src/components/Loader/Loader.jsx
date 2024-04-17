import "./Loader.scss";
import Lottie from "lottie-react";
import animation from "../../lotties/compass-animation.json";

export const Loader = () => {
  return (
    <div className="loader__container">
      <Lottie animationData={animation} />
    </div>
  );
};
