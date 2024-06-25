"use client";
import { BackgroundGradientAnimation } from "@/components/landing-page/background-gradient-animation";
import HomeHeader from "@/components/home-header";
import React from "react";

export default function Test() {
  return (
    <>
      <main className="flex flex-col">
        <HomeHeader />

        <div className="-z-10 mx-auto grid h-[400px] w-full place-items-center">
          <div className="z-10 col-start-1 col-end-1 row-start-1 row-end-1 w-full overflow-hidden bg-blue-500 bg-opacity-50">
            <BackgroundGradientAnimation />
          </div>
          <div className="z-20 col-start-1 col-end-1 row-start-1 row-end-1 h-48 w-48 bg-red-500 bg-opacity-50">
            Element 1
          </div>
        </div>
        <h1>sss</h1>
      </main>
    </>
  );
}
