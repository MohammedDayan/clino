"use client"
import RegisterForm from "@/components/RegisterForm"

import { RxCross2 } from "react-icons/rx";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Register() {
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
    <button className="flex items-center gap-2 " type="button" onClick={() => window.location.href = "/"}> <HiArrowLongLeft /> Go back  </button>
  </div>
  <div className="pt-[80px]">

    <h1 className="text-[24px] font-bold ">Register with us</h1>
    <p className="text-[12px] mb-2 " >Explore open Career Opportunities</p>

    <RegisterForm />

    {/* Horizontal Rule with OR */}
    <div className="grid grid-cols-2 gap-4 my-4 text-[11px]">
      <div className="flex items-center">
      <RxCross2 className="text-red-500 mr-2" />
      <span className="text-gray-700">At least 8 characters</span>
      </div>
      <div className="flex items-center">
      <RxCross2 className="text-red-500 mr-2" />
      <span className="text-gray-700">One uppercase letter</span>
      </div>
      <div className="flex items-center">
      <RxCross2 className="text-red-500 mr-2" />
      <span className="text-gray-700">One lowercase letter</span>
      </div>
      <div className="flex items-center">
      <RxCross2 className="text-red-500 mr-2" />
      <span className="text-gray-700">One special character</span>
      </div>
    </div>

 



  </div>
  <div className="text-[13px] text-center ">Already have an account? <span className="font-black text-blue-400" > <a href="/login">Register</a>  </span></div>
</div>


</div>



  )
}

