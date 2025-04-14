import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

interface ThemeSlice {
    theme : 'dark' | 'light';
    toggleTheme: () => void;
}
interface NotificationSlice{
    notifications: string[];
    addNotification: (message: string) => void;
    clearNotifications: () => void;
}

type GlobalStore = ThemeSlice & NotificationSlice;

export const useGlobalStore = create<GlobalStore>()(
    devtools((set) => ({
        //theme
        theme: 'dark',
        toggleTheme: () => set((state) => ({theme: state.theme === 'dark' ? 'light' : 'dark'})),

        //notification
        notifications: [] as string[],
        addNotification: (message:string) => 
            set((state) => ({
                notifications: [...state.notifications, message]
            })),
        clearNotifications: () => set({notifications: []})

    })),
)