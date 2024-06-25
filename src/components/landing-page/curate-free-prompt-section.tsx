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
import { Spotlight } from "../ui/Spotlight";

export default function CuratedFreePromptSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 overflow-hidden bg-[#1A1B1E]">
      <div className="pointer-events-none z-50 flex h-[150px] flex-col justify-center overflow-hidden bg-gradient-to-b from-black"></div>
      <Spotlight
        className="absolute z-0 overflow-hidden max-md:hidden"
        fill="white"
      />
      <h1 className="m-auto px-4 font-walsheim text-[85px] leading-[4.5rem] text-white">
        Curated free prompts
      </h1>
      <h1 className="m-auto max-w-[900px] px-4 pt-6 text-lg text-gray-100">
        Download free promoted assets on Creative Market. Become a member to
        access additional hand picked free asset Drops worth up to $1,000 every
        month. Plans start at $9.95/mo
      </h1>

      {/* <div className="m-auto flex flex-row flex-wrap items-center justify-center gap-4 overflow-hidden pt-14 lg:flex-nowrap"> */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <PromptItem
            modelTxt="Midjourney | V6"
            durTxt="Free – Mar 21st"
            pid="1"
          >
            <div className="aspect-h-1 aspect-w-1 sm:aspect-h-4 sm:aspect-w-3 md:aspect-h-4 md:aspect-w-3 lg:aspect-none w-full overflow-hidden rounded-md bg-black group-hover:opacity-75 sm:h-[360px] md:h-[360px] lg:h-[430px]">
              <Image
                src={urbanNinja}
                alt="Urban Ninja"
                // fill
                className="h-full w-full rounded-md object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </PromptItem>
          <PromptItem
            modelTxt="Midjourney | V6"
            durTxt="Free – Mar 21st"
            pid="2"
          >
            <BackgroundVideo
              src={wonderWoman}
              autoPlay
              className="h-full w-full object-cover object-center"
            />
            ;{/* <Player src={awesomeVideo} /> */}
          </PromptItem>
          <PromptItem
            modelTxt="Midjourney | V6"
            durTxt="Free – Mar 21st"
            pid="3"
          >
            <BackgroundVideo
              src={goldenWoman}
              autoPlay
              className="h-full w-full object-cover object-center"
            />
            ;
          </PromptItem>
          <PromptItem
            modelTxt="Midjourney | V6"
            durTxt="Free – Mar 21st"
            pid="4"
          >
            <BackgroundVideo
              src={spaceman}
              autoPlay
              className="h-full w-full object-cover object-center"
            />
            ;
          </PromptItem>
        </div>
      </div>
      <motion.div
        className="m-auto mb-7 flex w-full justify-center pt-3"
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
  pid,
}: {
  children: React.ReactNode;
  modelTxt: string;
  durTxt: string;
  pid: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      key={pid}
      className="group relative"
    >
      <div className="aspect-none h-full w-full overflow-hidden rounded-md bg-black group-hover:-translate-y-0 group-hover:duration-75 sm:h-[360px] md:h-[360px] lg:h-[420px]">
        {children}
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

function PromptItemBak({
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
      className="relative flex h-[492px] w-[320px] justify-center overflow-hidden rounded-md md:h-[492px] md:w-[320px]"
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
