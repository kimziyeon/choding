import { create } from 'zustand';
import { myProjectPostType } from '@/types/datatype';

interface MyProjectStore {
    selectItem: myProjectPostType;
    setSelectItem: (item: object) => void;
}
export const myProjectStore = create<MyProjectStore>(set => ({
    selectItem: {},
    setSelectItem: (selectItem) => set({ selectItem })
}));
