"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Eye, EyeClosed, EyeOff, Sliders } from "lucide-react";
import Slider from '../components/carousal/Slider'

const Login: NextPage = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full relative rounded-xl bg-gray1-100 overflow-hidden flex flex-row items-start justify-start py-[1.5rem] pl-[4.5rem] pr-[1.5rem] box-border gap-[3rem] leading-[normal] tracking-[normal] text-left text-[1.125rem] text-neutral-10 font-days-one">
      <div className="h-[51.313rem] w-[37rem] flex flex-col items-start justify-start pt-[2.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4.375rem]">
          <div className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[0.375rem] gap-[1rem]">
            <div className="rounded-md [background:linear-gradient(135deg,_#8a80ff,_#5c53bc)] flex flex-row items-center justify-center p-[0.5rem]">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/materialsymbolsmeetingroom.svg"
              />
            </div>
            <div className="flex-1 relative">ROOM.ME</div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[2rem] text-[2.5rem] font-text-sm-normal">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit]">
                Welcome back to Room.me!
              </h1>
              <div className="self-stretch flex-1 relative text-[1.25rem] leading-[150%]">
                Room.me is an innovative video conference product that
                revolutionizes virtual meetings.
              </div>
            </div>
            <form className="m-0 self-stretch flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
              
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1rem]">
                <div className="self-stretch relative text-[1.375rem] leading-[150%] font-medium font-text-sm-normal text-neutral-10 text-left">
                  Email address
                </div>
                <div className="self-stretch rounded-lg bg-neutral-90 border-neutral-80 border-solid border-[1px] flex flex-row items-center justify-start py-[0.875rem] px-[1.437rem]">
                  <input
                    className="w-full [border:none] [outline:none] font-text-sm-normal text-[1.25rem] bg-[transparent] flex-1 relative leading-[150%] text-neutral-60 text-left inline-block min-w-[15.625rem] p-0"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <div className="self-stretch relative text-[1.375rem] leading-[150%] font-medium font-text-sm-normal text-neutral-10 text-left">
                  Password
                </div>
                <div className="self-stretch rounded-lg bg-neutral-90 border-neutral-80 border-solid border-[1px] flex flex-row items-center justify-start py-[0.875rem] px-[1.437rem] gap-[0.5rem]">
                  <input
                    className="w-[calc(100%_-_76px)] [border:none] [outline:none] font-text-sm-normal text-[1.25rem] bg-[transparent] flex-1 relative leading-[150%] text-neutral-60 text-left inline-block min-w-[18.75rem] p-0"
                    placeholder="Enter your password"
                    type={showPassword?"password":"name"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                  />
             <button 
    type="button" 
    className="focus:outline-none"
    onClick={() => setShowPassword(!showPassword)}
  >
{showPassword ? (
  <EyeClosed className="w-6 h-6 cursor-pointer" alt="Hide password" />
) : (
  <Eye className="w-6 h-6 cursor-pointer" alt="Show password" />
)}
  </button>
                </div>
              </div>
     <button 
        type="submit"
        className="cursor-pointer [border:none] py-[1.25rem] px-[2rem] bg-[transparent] self-stretch rounded-lg [background:linear-gradient(135deg,_#8a80ff,_#5c53bc)] overflow-hidden flex flex-row items-center justify-center disabled:opacity-70"
       
      >
    
          <div className="relative text-[1.125rem] leading-[120%] font-semibold font-text-sm-normal text-neutral-10 text-center">
            Sign in
          </div>
       
      </button>
              <button 
                type="button"
                className="cursor-pointer [border:none] py-[1.25rem] px-[2rem] bg-neutral-10 self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[1rem] hover:bg-neutral-40"
              >
                <Image
                  className="w-[1.375rem] relative h-[1.375rem] overflow-hidden shrink-0"
                  width={22}
                  height={22}
                  alt=""
                  src="/google-svg.svg"
                />
                <div className="relative text-[1.125rem] leading-[120%] font-semibold font-text-sm-normal text-neutral-90 text-center">
                  Sign in with Google
                </div>
              </button>
              <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px]">
                <div className="flex-1 flex flex-row items-start justify-center gap-[0.5rem] min-w-[19.438rem]">
                  <input className="m-0 w-[1rem]" type="checkbox" />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[18.5rem]">
                    <div className="self-stretch relative text-[0.875rem] leading-[150%] font-text-sm-normal text-neutral-40 text-left">
                      Remember for 30 days
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative text-[0.875rem] [text-decoration:underline] leading-[150%] font-medium font-text-sm-normal text-cornflowerblue text-left">
                    Forgot password
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-[1rem] leading-[150%] text-neutral-10 text-center">
                <span className="font-text-sm-normal">{`Doesn’t have account? `}</span>
                <span className="[text-decoration:underline] font-semibold font-text-sm-normal">
                  Sign up
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-[37.437rem] px-[1rem] pb-[1.5rem] box-border relative gap-[2rem] min-w-[28.625rem] max-w-full text-[2rem] font-text-sm-normal">
        <Image
          className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={704}
          height={976}
          alt=""
          src="/image@2x.png"
        />
   
      </div>
    </div>
  );
};

export default Login;
