"use client";

import LogoutModal from '@/components/LogoutModal';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleLogoutClick = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleLogoutConfirm = () => {
    logout();
    toast.info("Logout successful!");
    router.push('/');
  };
  const handleLogoutCancel = () => {
    setIsModalOpen(false); // Close the modal without logging out
  };
  if (!isAuthenticated) {
    return null; // or a loading spinner
  }


  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-gray-100 p-8">
      
       
        <button
        onClick={handleLogoutClick}
          className="w-20 bg-gradient-to-r from-[#8a80ff] to-[#5c53bc] text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Logout
        </button>
        <LogoutModal
        isOpen={isModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </div>
  );
};

export default Dashboard;