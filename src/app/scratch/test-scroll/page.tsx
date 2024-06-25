"use client";
import React, { useEffect } from "react";
import LogoScrollerItem from "@/components/landing-page/logo-scroller-item";
import { useMeasure } from "@uidotdev/usehooks";
const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function TestScroll() {
  const [ref, { width, height }] = useMeasure();

  useEffect(() => {
    console.log("width", width);
  }, [width]);

  return (
    <>
      <div className="relative h-[100px] w-full overflow-hidden">
        <div
          ref={ref}
          className="absolute flex flex-row overflow-hidden border border-red-500"
        >
          {[...images].map((item, idx) => (
            <LogoScrollerItem key={idx} img={item.image} />
          ))}
        </div>
      </div>
    </>
  );
}
