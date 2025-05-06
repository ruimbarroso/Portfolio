import { createContext, useContext, type ReactNode } from "react";

export interface Skill { title: string; description: string }
export interface Experience { title: string; description: string; tasks: string[] }
export interface Project { title: string; description: string; link: string }

export interface AppState {
  homeContent: string[] | null,
  skills: Skill[] | null,
  experiences: Experience[] | null,
  projects: Project[] | null
}
export interface AppContextType {
  element: ReactNode,
  setElement: React.Dispatch<React.SetStateAction<ReactNode>>,
  state: AppState
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};