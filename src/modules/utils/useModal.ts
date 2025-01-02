import { create } from 'zustand'

interface ModalStateTypes {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useModal = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))

export { useModal }
export type { ModalStateTypes }
