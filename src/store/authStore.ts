import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  setUser: (user: User | null) => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openSignupModal: () => void;
  closeSignupModal: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoginModalOpen: false,
      isSignupModalOpen: false,
      setUser: (user) => set({ user }),
      openLoginModal: () => set({ isLoginModalOpen: true, isSignupModalOpen: false }),
      closeLoginModal: () => set({ isLoginModalOpen: false }),
      openSignupModal: () => set({ isSignupModalOpen: true, isLoginModalOpen: false }),
      closeSignupModal: () => set({ isSignupModalOpen: false }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);