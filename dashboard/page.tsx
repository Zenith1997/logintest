"use client";

import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const router = useRouter();
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome, you're logged in.
        </h1>
        <button
      
          className="w-full bg-gradient-to-r from-[#8a80ff] to-[#5c53bc] text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;