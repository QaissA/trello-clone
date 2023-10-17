import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModel: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  openModel: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
