"use client";

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
     toast.info("Logout successful!")
    router.push('/');
  };

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-green-800 rounded-xl p-8 shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome, you're logged in.
        </h1>
        <button
        onClick={handleLogout}
          className="w-full bg-gradient-to-r from-[#8a80ff] to-[#5c53bc] text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;