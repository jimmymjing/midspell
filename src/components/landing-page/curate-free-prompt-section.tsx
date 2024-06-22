"use client";
import React from "react";
import Video from "next-video";
import BackgroundVideo from "next-video/background-video";
import Player from "next-video/player";
import wonderWoman from "/videos/-82f4-48e5-8867-5b3c6c1344e4.mp4";
import goldenWoman from "/videos/golden-woman.mp4";
import glass from "/videos/glass.mp4";
import spaceman from "/videos/Final_00027.mp4";
import urbanNinja from "@/assets/images/curate-images/jimmymjing_urban_ninja_in_fairy_kei_style_by_nick_knight_86909131-f2e5-4a96-b4b5-dec00476138c_2.png";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CuratedFreePromptSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 bg-[#1A1B1E]">
      <div className="pointer-events-none z-50 flex h-[150px] flex-col justify-center bg-gradient-to-b from-black"></div>
      <h1 className="m-auto font-walsheim text-[85px] text-white">
        Curated free prompts
      </h1>
      <h1 className="m-auto max-w-[900px] text-lg text-gray-100">
        Download free promoted assets on Creative Market. Become a member to
        access additional hand picked free asset Drops worth up to $1,000 every
        month. Plans start at $9.95/mo
      </h1>

      <div className="m-auto flex flex-row gap-4 overflow-hidden pt-14">
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <Image
            src={urbanNinja}
            alt="Urban Ninja"
            fill
            className="object-cover"
          />
        </PromptItem>
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <BackgroundVideo src={wonderWoman} autoPlay />;
          {/* <Player src={awesomeVideo} /> */}
        </PromptItem>
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <BackgroundVideo src={goldenWoman} autoPlay />;
        </PromptItem>
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <BackgroundVideo src={spaceman} autoPlay />;
        </PromptItem>
      </div>

      <motion.div
        className="m-auto flex w-full justify-center pt-3"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Button color="primary" endContent={<ArrowRightIcon className="w-5" />}>
          Browse more free prompts
        </Button>
      </motion.div>
    </div>
  );
}

function PromptItem({
  children,
  modelTxt,
  durTxt,
}: {
  children: React.ReactNode;
  modelTxt: string;
  durTxt: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="relative flex h-[492px] w-[320px] flex-col justify-center overflow-hidden rounded-md bg-slate-400"
    >
      {children}
      <div className="absolute left-2 top-2 rounded-sm bg-black/60 px-4 py-2 text-sm text-white">
        {modelTxt}
      </div>
      <div className="absolute bottom-2 z-30 m-auto flex w-full justify-center">
        <Button
          color="secondary"
          size="lg"
          className="mx-2"
          radius="full"
          fullWidth
        >
          {durTxt}
        </Button>
      </div>
    </motion.div>
  );
}
