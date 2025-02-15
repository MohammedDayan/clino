import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaApple, FaFacebook , FaArrowLeft } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Column - Image */}
      <div className="hidden lg:flex w-1/2 2xl:items-center justify-center bg-gray-100">
        <img src="/loginimg.jpeg" height={100}  alt="Login Illustration"  />
      </div>
      
      {/* Right Column - Login Form */}
      
      <div className="container px-[190px]  lg:w-1/2 flex flex-col   p-8">
      <div className=" ">
        <button className="flex items-center gap-2 " type="button"> <FaArrowLeft  /> Home </button>
      </div>
      <div className="pt-[80px]">

      <h1 className="text-[24px] font-bold ">Login to your account</h1>
        <p className="text-[13px] " >Explore open Career Opportunities</p>
        <LoginForm />

        {/* Horizontal Rule with OR */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <Button className="w-full mb-2 bg-blue-600 text-white flex items-center justify-center gap-2">
          <FaGoogle /> Sign in with Google
        </Button>
        <Button className="w-full mb-2 bg-black text-white flex items-center justify-center gap-2">
          <FaApple /> Sign in with Apple
        </Button>
        <Button className="w-full mb-2 bg-blue-800 text-white flex items-center justify-center gap-2">
          <FaFacebook /> Sign in with Facebook
        </Button>

      </div>
        
      </div>
    </div>
  );
}
