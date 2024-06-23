"use client";
import { BackgroundGradientAnimation } from "@/components/landing-page/background-gradient-animation";
import HomeHeader from "@/components/home-header";
import { PlaceholdersAndVanishInputDemo } from "@/components/home-hero-searchbar";
import HomeVidSpline from "@/components/landing-page/home-vid-spline";

import HeroSuggestionChip from "@/components/hero-suggestion-chip";
import PlatformLogoScroller from "@/components/landing-page/platform-logo-scroller";
import PromptParaScroll from "../components/landing-page/PromptParaScroll";
import CuratedFreePromptSection from "@/components/landing-page/curate-free-prompt-section";
import { motion } from "framer-motion";
import MagicAcademySection from "@/components/landing-page/magic-academy-section";
import CategoryMarqueeSection from "@/components/landing-page/category-marquee-section";

const suggestionChipList: string[] = [
  "illustration",
  "modern art",
  "character design",
  "landscape",
  "portrait",
  "abstract",
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeader />
      {/* <SearchbarHeader width={400} /> */}
      <BackgroundGradientAnimation>
        <div className="absolute z-50 w-full items-center justify-center">
          <div className="pointer-events-none z-50 flex h-[150px] flex-col justify-center bg-gradient-to-b from-gray-900"></div>
          <div className="pointer-events-none mx-auto -mt-[100px] max-w-3xl text-center">
            <h1 className="pt-28 font-walsheim text-[112px] leading-[7rem] text-white">
              Find your next
              <br />
              AI spell
            </h1>
            <p className="pointer-events-none mt-6 text-xl leading-8 text-white/80">
              Explore a marketplace of enchanted AI prompts to empower your
              creativity and transform your ideas into magical realities
            </p>
          </div>
          <PlaceholdersAndVanishInputDemo />
          {/* <HeroBtn /> */}
          <div className="flex flex-row items-center justify-center gap-3 pt-5 align-middle">
            <div className="text-sm text-white/80">Trending searches</div>
            {suggestionChipList.map((s) => (
              <HeroSuggestionChip key={s} clr="primary">
                {s}
              </HeroSuggestionChip>
            ))}
          </div>
        </div>
      </BackgroundGradientAnimation>
      <div className="pointer-events-none z-50 -mt-[300px] flex h-[300px] flex-col justify-center bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative z-50 w-full items-center justify-center bg-black/100">
        <div className="relative z-50 -mt-64 w-full items-center justify-center">
          <motion.div
            className="overflow-hidden brightness-50"
            style={{ originY: 0, scale: 0.8 }}
            // initial={{ scale: 0.8 }}
            initial={false}
            whileInView={{ filter: "brightness(1)" }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <HomeVidSpline />
          </motion.div>
          {/* <div className="absolute top-0 flex h-[800px] w-full flex-col justify-center bg-black/30"></div> */}
        </div>
      </div>
      <PlatformLogoScroller />
      <PromptParaScroll />
      <CuratedFreePromptSection />
      <MagicAcademySection />
      <CategoryMarqueeSection />
      {/* <ParallaxScrollImages /> */}

      {/* <TagGroupFilter /> */}
      <div>
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </div>
    </main>
  );
}
