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
import { motion } from "framer-motion";
import { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@nextui-org/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

const contentArray = [
  {
    link: "https://www.google.com",
    title: "Graphic Design Trends 2024",
    brief:
      "From vibrant book covers to stylish advertising banners, graphic design gives color and shape to our lives. ",
    imgSrc: "/magic-academy/ma1.jpg",
  },
  {
    link: "https://www.google.com",
    title: "11 Most Colorful Styles",
    brief:
      "From vibrant book covers to stylish advertising banners, graphic design gives color and shape to our lives. ",
    imgSrc: "/magic-academy/ma2.jpg",
  },
  {
    link: "https://www.google.com",
    title: "General Modifiers in Midjourney",
    brief:
      "In a nutshell, a GenMod is a keyword that can be used to modify the behavior of a spell.",
    imgSrc: "/magic-academy/ma3.jpg",
  },
  {
    link: "https://www.google.com",
    title: "In Focus Claude Cahun",
    brief:
      "The protagonist of today's In Focus episode is the extraordinary Lucy Schwob, better known by her pseudonym—Claude Cahun.",
    imgSrc: "/magic-academy/ma4.webp",
  },
  {
    link: "https://www.google.com",
    title: "Study Manuscripts, Codices, and Bestiaries",
    brief:
      "Many of these fascinating artifacts continue to captivate and inspire study in the modern age. Some served as legitimate",
    imgSrc: "/magic-academy/ma5.webp",
  },
  {
    link: "https://www.google.com",
    title: "Midjourney's Super-Tiling Technique",
    brief:
      "Let’s say you want to create “Where’s Waldo?”-like artwork: intricate, detailed, expansive, and with a hand-drawn look. After trial and error",
    imgSrc: "/magic-academy/ma6.webp",
  },
  {
    link: "https://www.google.com",
    title: "The Midjourney Halloween",
    brief:
      "As Halloween approaches, it's time to get ready with your creepy costumes, scary masks, eerie decorations, and, of course, horror-themed postcards",
    imgSrc: "/magic-academy/ma7.jpg",
  },
  {
    link: "https://www.google.com",
    title: "In Focus Sandro Botticelli",
    brief:
      "How Sandro Botticelli, one of the greatest painters of the Florentine Renaissance, is linked to Italian fascist dictator Benito Mussolini",
    imgSrc: "/magic-academy/ma8.jpg",
  },
  {
    link: "https://www.google.com",
    title: "15 Styles Favored by Midlibrary Collectors",
    brief:
      "There are two fundamental changes in how we approach Style Tops that this edition signifies. First, we're shifting from a benchmark-style approach",
    imgSrc: "/magic-academy/ma9.jpg",
  },
];

export default function MagicAcademySection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <div className="h-full w-full overflow-hidden">
      <AuroraBackground className="h-full w-full overflow-hidden">
        <div className="pointer-events-none z-50 flex h-[20px] flex-col justify-center bg-gradient-to-b from-[#1A1B1E]"></div>
        <div className="relative m-auto w-[90%] max-w-7xl">
          {/* s_content-w is--started */}

          <div className="relative pt-40">
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
                  Browse the Marketplace, educational videos, and customer
                  stories to find what you need to succeed with Webflow.
                </p>
              </div>
              {/* swiper_arrow-w */}
              <div className="flex items-center gap-0">
                <div
                  onClick={scrollPrev}
                  className="flex cursor-pointer items-center justify-center p-4"
                >
                  <ArrowLeftIcon className="w-6" />
                </div>
                <div
                  onClick={scrollNext}
                  className="flex cursor-pointer items-center justify-center p-4"
                >
                  <ArrowRightIcon className="w-6" />
                </div>
              </div>
            </div>
            {/* swiper-w is--getstarted */}
            <div className="box-border">
              <div className="relative z-10 m-auto block touch-pan-y overflow-visible">
                {/* swiper-wrapper */}
                <div className="relative z-10 box-content flex h-full w-full flex-row">
                  {/* each swipe card */}
                  {/* todo: indi card */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
            setApi={setApi}
          >
            <CarouselContent className="ml-[5%] pb-16">
              {contentArray.map((content, index) => (
                <CarouselItem key={index} className="basis-[420px] pl-12">
                  <ArticleItem
                    link={content.link}
                    title={content.title}
                    brief={content.brief}
                  >
                    <Image
                      isZoomed
                      radius="none"
                      alt="NextUI Fruit Image with Zoom"
                      src={content.imgSrc}
                    />
                  </ArticleItem>
                </CarouselItem>
              ))}
              ;
              {/* {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[420px] pl-12">
                <ArticleItem
                  link="https://www.google.com"
                  title="The 2024 State of the Website"
                  brief="Discover key challenges today’s marketing teams are facing, as
                well as opportunities for businesses in 2024."
                >
                  <Image
                    isZoomed
                    radius="none"
                    alt="NextUI Fruit Image with Zoom"
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  />
                </ArticleItem>
              </CarouselItem>
            ))} */}
            </CarouselContent>
          </Carousel>
        </div>
        <motion.div
          className="m-auto mb-7 flex w-full justify-center pt-3"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Button
            color="primary"
            endContent={<ArrowRightIcon className="w-5" />}
          >
            Browse more in Magic Academy
          </Button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

function ArticleItem({
  children,
  link,
  title,
  brief,
}: {
  children: React.ReactNode;
  link: string;
  title: string;
  brief: string;
}) {
  const variants = {
    hover: { x: 10 },
  };
  return (
    <div className="h-[468px] w-[385px] drop-shadow-none hover:drop-shadow-lg hover:duration-300">
      {/* <div className="relative mr-8 block w-[30%] flex-none flex-shrink-0 drop-shadow-none hover:drop-shadow-lg hover:duration-300"> */}
      {/* gs_card-outer */}
      <div className="relative h-full cursor-pointer">
        <Link
          href={link}
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
                {children}
              </div>
            </div>
            {/* gs_content-w */}
            <div className="box-border flex h-full flex-col items-start gap-4">
              <h3 className="text-2xl">
                <strong>{title}</strong>
              </h3>
              <p>{brief}</p>
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
