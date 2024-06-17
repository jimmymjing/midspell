import React from "react";
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

export default function ScrollerLogos() {
  return (
    <>
      {/* <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
      <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
      <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
      <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
      <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
      <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div> */}
      <Image
        src={lumaLogoSrc}
        alt="Luma AI Logo"
        className="w-[150px] min-w-[150px]"
      />
      <Image
        src={haiperLogoSrc}
        alt="Haiper Logo"
        className="w-[100px] min-w-[100px]"
      />
      <Image
        src={openAILogoSrc}
        alt="Openai Logo"
        className="w-[100px] min-w-[100px]"
      />
      <Image
        src={midjourneyLogoSrc}
        alt="Midjourney Logo"
        className="w-[40px] min-w-[40px]"
      />
      <Image
        src={runwayLogoSrc}
        alt="Runway Logo"
        className="w-[100px] min-w-[100px]"
      />
      <Image
        src={stabilityLogoSrc}
        alt="stability Logo"
        className="w-[100px] min-w-[100px]"
      />
      <Image
        src={pikaLogoSrc}
        alt="pika Logo"
        className="w-[50px] min-w-[50px]"
      />
      <Image
        src={leonardoLogoSrc}
        alt="leonardo Logo"
        className="w-[150px] min-w-[150px]"
      />
      <Image
        src={fireflyLogoSrc}
        alt="firefly Logo"
        className="w-[150px] min-w-[150px]"
      />
      <Image
        src={geminiLogoSrc}
        alt="Gemini Logo"
        className="w-[80px] min-w-[80px] pb-2"
      />
    </>
  );
}
