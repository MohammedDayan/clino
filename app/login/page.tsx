"use client"
import LoginForm from "@/components/LoginForm";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaApple, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Column - Image */}
      <div className="hidden lg:flex w-1/2 2xl:items-center justify-center bg-gray-100">
        <div
          className="bg-cover h-full w-full"
          style={{ backgroundImage: "url('/loginimg.jpeg')" }}
        >
          <div
        className="h-full w-full"
        style={{
          background: 'linear-gradient(180deg, #002E5B 0%, rgba(231, 230, 230, 0) 100%)',
          backgroundBlendMode: 'multiply',
        }}
          ></div>
        </div>
      </div>


      {/* Right Column - Login Form */}

      <div className="container px-[190px]  lg:w-1/2 flex flex-col   p-8">
        <div className=" ">
            <button className="flex items-center gap-2" type="button" onClick={() => window.location.href = "/"}> 
            <HiArrowLongLeft /> Home 
            </button>
        </div>
        <div className="pt-[80px]">

          <h1 className="text-[24px] font-bold ">Login to your account</h1>
          <p className="text-[12px] " >Explore open Career Opportunities</p>
          <LoginForm />

          {/* Horizontal Rule with OR */}
          <div className="flex items-center w-full my-2">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <Button className="w-full mb-1  border border-gray-200 bg-white text-black flex items-center justify-center gap-2">
            <FaApple /> Sign in with Apple
          </Button>

          <Button className="w-full mb-1 border border-gray-200 bg-white text-black flex items-center hover:text-white justify-center gap-2">
            <FaFacebook className="" color="blue" /> Sign in with Facebook
          </Button>

          <Button className="w-full mb-1 border border-gray-200 bg-white text-black flex items-center justify-center gap-2">
            <FcGoogle /> Sign in with Google
          </Button>



        </div>
        <div className="text-center text-[11px] text-blue-400 font-black mt-2">Can't sign in?</div>
        <div className="text-[13px] text-center ">Don't have an account yet? <span className="font-black text-blue-400" > <a href="/register">Register</a>  </span></div>
      </div>


    </div>
  );
}
