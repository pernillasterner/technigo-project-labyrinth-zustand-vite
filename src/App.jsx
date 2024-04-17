import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";
import { Loader } from "./components/Loader/Loader";
import { MazeContent } from "./components/MazeContent/MazeContent";
import { useMazeStore } from "./stores/useMazeStore";

export const App = () => {
  const { isLoading } = useMazeStore();

  console.log(`Is Loading: ${isLoading}`);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <BackgroundImage />
      <MazeContent />
    </>
  );
};
