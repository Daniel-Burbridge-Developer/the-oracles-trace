import { create } from "zustand";
import { ReactNode } from "react";

export type sidebarType = "navigation" | "input";

interface SidebarState {
  type: sidebarType;
  title: string;
  content: ReactNode;
  footer: ReactNode;
}

interface SidebarAction {
  setTitle: (title: string) => void;
  setContent: (content: ReactNode) => void;
  setFooter: (footer: ReactNode) => void;
  setPreset: (type: sidebarType, title: string) => void;
}

const useSidebarStore = create<SidebarState & SidebarAction>((set) => ({
  type: "navigation",
  title: "",
  content: null,
  footer: null,
  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setFooter: (footer) => set({ footer }),
  setPreset: (type, title) => set({ type, title, content: null, footer: null }),
}));

export default useSidebarStore;
