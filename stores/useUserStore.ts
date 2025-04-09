import {create} from 'zustand';

interface UserState{
    userName:string;
    isLoggedIn: boolean;
    setUserName: (userName:string) => void;
    login: () => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    userName: '',
    isLoggedIn: false,

    setUserName: (userName) => set({userName}),
    login: () => set({isLoggedIn: true}),
    logout: () => set({userName:'', isLoggedIn:false})
}));
