// useStore.js
import { create } from "zustand";
import { login, refreshJwt } from "../api/auth/index";

const useStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  accessToken: null,
  refreshToken: null,

  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),

  login: async (email, password) => {
    try {
      const { accessToken, refreshToken } = await login(email, password);
      set({ accessToken, refreshToken });
    } catch (error) {
      console.log(error);
    }
  },

  logout: () => set({ accessToken: null, refreshToken: null }),

  refreshToken: async () => {
    try {
      const { accessToken } = await refreshJwt(useStore.getState().refreshToken);
      useStore.getState().setTokens(accessToken, useStore.getState().refreshToken);
    } catch (error) {
      console.error("Token refresh failed:", error);
      useStore.getState().logout();
    }
  },
}));

export default useStore;
