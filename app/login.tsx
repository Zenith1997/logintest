"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from 'react';
import { Eye, EyeClosed } from "lucide-react";
import Slider from '../components/carousal/Slider';

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
<div className="flex justify-center items-center min-h-screen bg-gray1-100">
  <div className="w-full h-screen max-w-[1200px] flex flex-col lg:flex-row mx-auto overflow-hidden text-neutral-10 text-left text-[1rem] font-days-one">
    
    {/* Left Pane */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-10 py-6 gap-4 h-full">
        
        
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-[#8a80ff] to-[#5c53bc] p-2">
            <Image
              src="/materialsymbolsmeetingroom.svg"
              width={24}
              height={24}
              alt="Logo"
            />
          </div>
          <div className="text-lg font-bold">ROOM.ME</div>
        </div>

        {/* Welcome Text */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Welcome back to Room.me!
          </h1>
          <p className="text-sm sm:text-base text-neutral-500">
            Room.me is an innovative video conference product that revolutionizes virtual meetings.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-800 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "password" :"text" }
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-neutral-300 px-4 py-2 pr-10 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-neutral-500"
              >
                {showPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-md bg-gradient-to-br from-[#8a80ff] to-[#5c53bc] text-white font-semibold hover:opacity-90 transition"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 rounded-md bg-white text-neutral-800 border border-neutral-300 flex items-center justify-center gap-2 hover:bg-neutral-100 transition"
          >
            <Image src="/google-svg.svg" width={20} height={20} alt="Google" />
            Sign in with Google
          </button>

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember for 30 days
            </label>
            <button className="underline text-cornflowerblue">Forgot password?</button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <span className="underline font-semibold cursor-pointer text-cornflowerblue">
              Sign up
            </span>
          </div>
        </form>
      </div>

      {/* Right Pane with Slider */}
      <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center px-4 py-6 bg-black h-full">
        <Slider />
      </div>
    </div>
    </div>
  
  );
};

export default Login;
