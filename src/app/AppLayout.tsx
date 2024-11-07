"use client";

import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import { useAppStore } from "@/state/core";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isSidebarCollapsed = useAppStore((state) => state.isSidebarCollapsed);
  const isDarkMode = useAppStore((state) => state.isDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}
