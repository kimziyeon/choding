import { create } from 'zustand';


interface T {
    isOpen: boolean,
    isOpenFunc: () => void
}

export const useQuestion = create<T>((set) => {
    return {
        isOpen: false,
        isOpenFunc: () => {
            set((state: any) => ({ isOpen: !state.isOpen }))
        }
    }
});