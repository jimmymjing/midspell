import Link from "next/link";
import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
// import Image from  "next/image";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import urbanNinja from "@/assets/images/curate-images/jimmymjing_urban_ninja_in_fairy_kei_style_by_nick_knight_86909131-f2e5-4a96-b4b5-dec00476138c_2.png";
import { motion } from "framer-motion";

export default function MagicAcademySection() {
  return (
    <div>
      <div className="pointer-events-none z-50 flex h-[20px] flex-col justify-center bg-gradient-to-b from-[#1A1B1E]"></div>
      <div className="relative m-auto w-[90%] max-w-7xl">
        {/* s_content-w is--started */}

        <div className="relative py-40">
          {/* hl_headline-w */}
          <div className="mb-8 max-w-[850px]">
            {/* hero-title */}
            <h1 className="font-walsheim text-[85px] leading-[5rem]">
              Magic Academy will get you started
            </h1>
          </div>
          {/* gs_headline-flex */}
          <div className="mb-24 flex justify-between align-bottom">
            {/* hl_subheadline-w */}
            <div className="mb-0 max-w-[50%]">
              <p className="text-lg">
                Browse the Marketplace, educational videos, and customer stories
                to find what you need to succeed with Webflow.
              </p>
            </div>
            {/* swiper_arrow-w */}
            <div className="flex items-center gap-0">
              <Link
                href="#"
                className="flex cursor-pointer items-center justify-center p-4"
              >
                <ArrowLeftIcon className="w-6" />
              </Link>
              <Link
                href="#"
                className="flex cursor-pointer items-center justify-center p-4"
              >
                <ArrowRightIcon className="w-6" />
              </Link>
            </div>
          </div>
          {/* swiper-w is--getstarted */}
          <div className="box-border">
            <div className="relative z-10 m-auto block touch-pan-y overflow-visible">
              {/* swiper-wrapper */}
              <div className="relative z-10 box-content flex h-full w-full flex-row">
                {/* each swipe card */}
                {/* todo: indi card */}
                <ArticleItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleItem() {
  const variants = {
    hover: { x: 10 },
  };
  return (
    <div className="relative mr-8 block w-[30%] flex-none flex-shrink-0 drop-shadow-none hover:drop-shadow-lg hover:duration-300">
      {/* gs_card-outer */}
      <div className="relative h-full cursor-pointer">
        <Link
          href="https://www.google.com"
          target="_blank"
          className="relative z-10 inline-block h-full max-w-full overflow-hidden rounded-sm border-1 border-gray-200 bg-white p-6"
        >
          {/* gs_card-content */}
          <div className="relative z-10 flex h-full flex-col">
            {/* gs_img-w */}
            <div className="mb-4 aspect-video h-full w-full">
              {/* gs_img-clip */}
              <div className="relative flex w-full flex-col justify-center overflow-hidden">
                {/* <NextImage
                            src={urbanNinja}
                            alt="Urban Ninja"
                            fill
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full max-w-full flex-none object-cover"
                          /> */}
                <Image
                  isZoomed
                  radius="none"
                  alt="NextUI Fruit Image with Zoom"
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                />
              </div>
            </div>
            {/* gs_content-w */}
            <div className="box-border flex h-full flex-col items-start gap-4">
              <h3 className="text-2xl">
                <strong>The 2024 State of the Website</strong>
              </h3>
              <p>
                Discover key challenges today’s marketing teams are facing, as
                well as opportunities for businesses in 2024.
              </p>
              {/* ts_card-link-w is--grow */}
              <div className="flex flex-1 flex-col justify-end">
                {/* button cc-text-only ts_card */}
                <motion.div
                  whileHover="hover"
                  className="flex items-center overflow-visible align-middle text-base font-semibold"
                >
                  <div>Read report</div>
                  <motion.div variants={variants}>
                    <ArrowLongRightIcon className="ml-3 w-5" />
                  </motion.div>
                  {/* <div className="ml-3 inline-block">→</div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
