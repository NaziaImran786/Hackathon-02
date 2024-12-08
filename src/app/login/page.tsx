'use client'

import * as React from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
  <section className=" w-full py-10 ">
       <div className="w-full px-[40px] md:pl-[120px] h-[286px] bg-[#F6F5FF] ">
        {/* Banner content can be added here */}

        <div className="w-[314px] pt-[106px] ">
          <h1 className="text-[36px] leading-[42px] font-['Josefin_Sans'] text-[#101750] text-center mb-2">
            My Account
          </h1>

          <div className="flex items-center justify-center gap-1 text-base font-medium font-['Lato']">
            <span className="text-black">Home</span>
            <span className="text-black">.</span>
            <span className="text-black">Pages</span>
            <span className="text-black">.</span>
            <span className="text-[#FB2E86]">My Account</span>
          </div>
        </div>
      </div>
    
    <div  className=" w-[544px] h-[453px] mx-auto flex mt-[60px] mb-[140px] ">
   
    
    <div className="flex w-full items-center justify-center mb-10 px-[135px] p-4">
      <div className="w-full mx-auto ">

        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-inter text-[36px] font-medium ">
          Log in 
          </h1>
          <p className="font-poppins ">
            Enter your details below
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 ">
                        

            {/* Email/Phone Input */}
            <div className="space-y-2">
              <Input 
                type="text"
                placeholder="Email or Phone Number"
                className=" w-[400px] mt-4 border-2  rounded-black px-2 font-poppins placeholder:text-black/40 focus-visible:ring-0"
              />
            </div>

            {/* Password Input */}
            <div className="">
              <Input 
                type="password"
                placeholder="Password"
                className="w-[400px] mt-4 border-2  rounded-black px-2 font-poppins placeholder:text-black/40 focus-visible:ring-0"
              />
            </div>
          </div>
          </form>

          <span className="text-[#FB2E86] mt-8">forget password?</span>
          {/* Create Account Button */}
          <div className="flex flex-col items-center justify-center space-x-4 font-poppins text-base">
          <Link href="/">
          <Button 
            className="w-[400px] bg-[#FB2E86] hover:bg-[#FB2E86]/90 font-poppins h-8 mt-[20px] ml-[100px] text-base"
            type="submit"
          >
            Login
          </Button>  </Link>    
        
        {/* Footer */}        
                   
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

