import { useState } from "react";
import { useMazeStore } from "../../stores/useMazeStore";

import "./StartMaze.scss";

export const StartMaze = () => {
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const { setGlobalUserName, fetchMazeData } = useMazeStore();

  // Function that will get the username and
  // pass that to the startMaze function in the global store
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure username only contains letters
    const regex = "^[a-zA-Z _-]+$";
    if (!username.match(regex)) {
      setErrorMessage("Username can only contain letters");
      setUsername("");
      return;
    }

    // Pass username to the global store
    setGlobalUserName(username);
    fetchMazeData(username);
    setUsername("");
  };

  const handleChange = (e) => {
    setErrorMessage("");
    setUsername(e.target.value);
  };

  return (
    <div className="start__container maze__card">
      <h1>The Maze</h1>
      <p>Enter the labyrinth on your own risk</p>
      <p>Can you find a way out of the maze?</p>
      <form onSubmit={handleSubmit}>
        <p className="errorMsg">{errorMsg}</p>
        <label>
          Enter your username
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};