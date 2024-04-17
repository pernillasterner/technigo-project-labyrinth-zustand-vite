import { create } from "zustand";

export const useMazeStore = create((set) => ({
  isLoading: false,

  // Make the first request to start the maze
  // I need to do an async function and also get the username from the startmaze component

  // Post username with fetchAPI to get the first action
  fetchMazeData: async (username) => {
    set({ isLoading: true });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ username }),
      });

      // Handle response
      if (!response.ok) {
        throw new Error("Fetching of maze data didn't work");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
      set({ isLoading: false, error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
