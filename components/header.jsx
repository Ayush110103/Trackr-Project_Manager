"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import UserLoading from "./user-loading";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import "@/app/globals.css";
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-black to-purple-900">
      {/* Render the background gradient component if needed */}
      <BackgroundGradient className="absolute inset-0 z-[-1]" />
      <div className="container mx-auto bg-transparent">
        <nav className="py-6 px-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              <Image
                src={"/logo2.png"}
                alt="Trackr Logo"
                width={200}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/project/create">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Create Project
                </span>
              </button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <button className="buttonx">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>
        </nav>
        <UserLoading />
      </div>
    </header>
  );
}

export default Header;