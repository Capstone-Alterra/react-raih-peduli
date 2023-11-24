import { create } from "zustand";
import axiosWithConfig from "../setAxiosWithConfig";


const useStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  accessToken: null,
  refreshToken: null,

  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),

  login: async (email, password) => {
    try {
      const response = await axiosWithConfig.post('/auth/login', { email, password });
      set({ accessToken: response.data.accessToken, refreshToken: response.data.refreshToken });
    } catch (error) {
      console.log(error);
    }
  },

  logout: () => set({ accessToken: null, refreshToken: null }),

  refreshToken: async () => {
    try {
      const response = await axiosWithConfig.post('/auth/refresh-jwt', { refreshToken });
      useStore.getState().setTokens(response.data.accessToken, useStore.getState().refreshToken);
    } catch (error) {
      console.error("Token refresh failed:", error);
      useStore.getState().logout();
    }
  }
}));
export default useStore;
