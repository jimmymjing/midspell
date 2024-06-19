"use client";
import React from "react";
import Test from "./test";
import Link from "next/link";
import Image from "next/image";

export default function TestParaScroll() {
  return (
    // <main className="flex min-h-[300vh] flex-col items-center justify-between p-24">
    //   <Test />
    // </main>

    <>
      {/* miw_content-track */}
      <div className="relative h-[150rem] overflow-clip">
        {/* miw_overlay-track */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10">
          {/* miw_overlay-content */}
          <div className="sticky top-0 flex h-screen justify-center align-middle">
            {/* miw_badge-outer */}
            <div>
              <Link
                href="https://www.google.com"
                className="pointer-events-auto relative flex w-[37rem] max-w-full cursor-pointer justify-center overflow-hidden rounded-xl bg-slate-500 p-8 align-middle text-black"
              >
                {/* miw_badge-inner */}
                <div className="pointer-events-auto relative z-10 flex align-middle">
                  {/* symbo */}
                  made in webflow
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* miw_content-w */}
        <div className="flex h-full flex-col overflow-clip">
          <div className="relative ml-auto mr-auto flex h-full w-[90%] max-w-[1280px] flex-col items-center">
            {/* <div className="flex h-full w-full flex-col items-center gap-1 bg-slate-500"> */}
            {/* <div className="h-[100px] w-[100px] bg-red-300">abc</div>
            <div className="h-[100px] w-[100px] bg-red-300">abc</div> */}
            <Link
              href="https://www.google.com"
              target="_blank"
              className="absolute bottom-auto top-16 z-[2] inline-block max-w-full -translate-x-[27rem] cursor-pointer overflow-visible rounded-sm"
            >
              <Image
                src="https://cdn.prod.website-files.com/6515a6d5f30daec433d0abe2/6515a6d5f30daec433d0acaf_wf-miw-attentive-p-500.webp"
                alt="logo"
                width={500}
                height={1000}
                className="relative max-w-[15rem] rounded-sm object-cover align-middle"
              />
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              className="absolute -top-8 bottom-auto z-[1] inline-block max-w-full translate-x-[20rem] cursor-pointer overflow-visible rounded-sm"
            >
              <Image
                src="https://cdn.prod.website-files.com/6515a6d5f30daec433d0abe2/6515a6d5f30daec433d0acb4_wf-miw-gumroad-p-500.webp"
                alt="logo"
                width={500}
                height={1000}
                className="relative w-[45rem] max-w-none rounded-sm object-cover align-middle"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}