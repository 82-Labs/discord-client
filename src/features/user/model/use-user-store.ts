import { create } from "zustand";

type UserState = {
  userId: number;
};

type UserActions = {
  setUserId: (userId: number) => void;
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  userId: 0,
  setUserId: (userId) => set({ userId }),
}));
