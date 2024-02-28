import { create } from 'zustand';
import { myProjectPostType } from '@/types/datatype';

interface MyProjectStore {
    result: myProjectPostType;
    setResult: (item: object) => void;
}
export const myProjectStore = create<MyProjectStore>(set => ({
    result: {},
    setResult: (result) => set({ result })
}));
