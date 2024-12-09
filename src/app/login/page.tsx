'use client';

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F6F5FF] px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#101750]">Log in</h1>
          <p className="text-sm text-gray-600">Enter your details below</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email/Phone Input */}
          <div>
            <Input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-2 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
          </div>

          {/* Password Input */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full border-2 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="#" className="text-sm text-[#FB2E86] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#e61d76] transition"
          >
            Login
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#FB2E86] hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}


