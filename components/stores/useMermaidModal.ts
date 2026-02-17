import { create } from "zustand";

interface MermaidModalState {
  isOpen: boolean;
  svg: string;
  open: (svg: string) => void;
  close: () => void;
}

export const useMermaidModal = create<MermaidModalState>((set) => ({
  isOpen: false,
  svg: "",
  open: (svg) => set({ isOpen: true, svg }),
  close: () => set({ isOpen: false, svg: "" }),
}));
