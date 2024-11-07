/* eslint-disable @typescript-eslint/no-explicit-any */
// make a global state store for zustand
import { create } from "zustand";

interface AppState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
  setIsDarkMode: () => void;
}

export const useAppStore = create<AppState>((set: any) => ({
  isSidebarCollapsed: false,
  isDarkMode: false,
  setIsSidebarCollapsed: (isCollapsed: boolean) => set({ isSidebarCollapsed: isCollapsed }),
  setIsDarkMode: () => set((state: any) => {
    const newMode = !state.isDarkMode;

    // Toggle between "dark" and "light" classes
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    return { isDarkMode: newMode };
  }),
}));