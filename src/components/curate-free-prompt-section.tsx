"use client";
import React from "react";
import urbanNinja from "@/assets/images/curate-images/jimmymjing_urban_ninja_in_fairy_kei_style_by_nick_knight_86909131-f2e5-4a96-b4b5-dec00476138c_2.png";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
export default function CuratedFreePromptSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 bg-[#1A1B1E]">
      <div className="pointer-events-none z-50 flex h-[150px] flex-col justify-center bg-gradient-to-b from-black"></div>
      <h1 className="m-auto font-walsheim text-5xl text-white">
        Curated free prompts
      </h1>
      <h1 className="m-auto max-w-[900px] text-lg text-gray-100">
        Download free promoted assets on Creative Market. Become a member to
        access additional hand picked free asset Drops worth up to $1,000 every
        month. Plans start at $9.95/mo
      </h1>

      <div className="m-auto flex flex-row gap-4 overflow-hidden pt-6">
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <Image
            src={urbanNinja}
            alt="Urban Ninja"
            fill
            className="object-cover"
          />
        </PromptItem>
        <PromptItem modelTxt="Midjourney | V6" durTxt="Free – Mar 21st">
          <Image
            src={urbanNinja}
            alt="Urban Ninja"
            fill
            className="object-cover"
          />
        </PromptItem>
      </div>

      <h1 className="m-auto w-[700px] pt-28 text-center font-walsheim text-[84px] leading-[6rem] text-black">
        abc
      </h1>
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
      whileHover={{ y: -20 }}
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
          color="primary"
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
