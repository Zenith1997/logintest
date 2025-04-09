import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};


export const useAuthStore = create<AuthState>()(
persist(
    (set) => ({
      isAuthenticated: false,
      login: async (email, password) => {
  
        const isValid = email === 'test@visionexdigital.com.au' && password === 'password123';
        if (isValid) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', 
    }
  )
  );