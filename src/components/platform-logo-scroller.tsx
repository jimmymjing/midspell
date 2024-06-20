"use client";
import React, { useEffect } from "react";
import LogoScrollerItem from "./logo-scroller-item";

import { animate, motion, useMotionValue } from "framer-motion";
import lumaLogoSrc from "@/assets/images/hp-platform-logos/luma-ai-logo.svg";
import haiperLogoSrc from "@/assets/images/hp-platform-logos/haiper-logo.svg";
import openAILogoSrc from "@/assets/images/hp-platform-logos/openai-logo.svg";
import midjourneyLogoSrc from "@/assets/images/hp-platform-logos/midjourney-white.svg";
import runwayLogoSrc from "@/assets/images/hp-platform-logos/runway-white.svg";
import stabilityLogoSrc from "@/assets/images/hp-platform-logos/stability-ai-seeklogo-white.svg";
import pikaLogoSrc from "@/assets/images/hp-platform-logos/pika-white.svg";
import nightcafeLogoSrc from "@/assets/images/hp-platform-logos/night-cafe-logo-white.webp";
import geminiLogoSrc from "@/assets/images/hp-platform-logos/google-gemini-logo-white.svg";
import leonardoLogoSrc from "@/assets/images/hp-platform-logos/leonardo-logo-white.svg";
import fireflyLogoSrc from "@/assets/images/hp-platform-logos/firefly-white.svg";
import Image from "next/image";
import ScrollerLogos from "./scroller-logos";
import { useMeasure } from "@uidotdev/usehooks";

const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function PlatformLogoScroller() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 56;
    console.log("width", width);

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [width, xTranslation]);

  return (
    <>
      <div className="relative h-[100px] w-full overflow-hidden bg-black">
        <motion.div
          ref={ref}
          className="absolute flex flex-row gap-28 overflow-hidden bg-black"
          style={{ x: xTranslation }}
        >
          <ScrollerLogos />
          <ScrollerLogos />
          {/* <ScrollerLogos />
        <ScrollerLogos /> */}

          {/* {[...images, ...images].map((item, idx) => (
            <LogoScrollerItem key={idx} img={item.image} />
          ))} */}
          {/* <div className="absolute h-full w-full bg-gradient-to-l from-black from-0% to-white to-100%"></div> */}
        </motion.div>
        <div className="absolute h-[50px] w-screen bg-gradient-to-r from-black from-5% to-30%"></div>
        <div className="absolute h-[50px] w-screen bg-gradient-to-l from-black from-5% to-30%"></div>
        {/* <div className="absolute h-full w-screen bg-gradient-to-r from-black from-0% to-white to-20%"></div> */}
      </div>
    </>
  );
}
