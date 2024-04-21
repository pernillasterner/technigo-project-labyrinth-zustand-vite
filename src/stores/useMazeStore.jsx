import { create } from "zustand";

export const useMazeStore = create((set) => ({
  username: "",
  gameOn: false,
  step: 0,
  actions: [],
  description: "",
  isLoading: false,

  setGlobalUsername: (localUsername) => set({ username: localUsername }),
  incrementStep: () => set((state) => ({ step: state.step + 1 })),
  toggleGameOn: () => set((state) => ({ gameOn: !state.gameOn })),

  // Start the maze by posting username with fetchAPI to get the first action
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

      // Get result
      const data = await response.json();
      set({ actions: data.actions, description: data.description });
    } catch (error) {
      console.error("Error: ", error);
      set({ isLoading: false, error });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchMazeAction: async (username, type, direction) => {
    set({ isLoading: true });

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ username, type, direction }),
      });

      // Handle response
      if (!response.ok) {
        throw new Error("Fetching of maze data didn't work");
      }

      // Get result
      const data = await response.json();
      set({ actions: data.actions, description: data.description });
    } catch (error) {
      console.error("Error: ", error);
      set({ isLoading: false, error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
