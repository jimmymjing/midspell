"use client";
import * as React from "react";
import { Image } from "@nextui-org/react";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CarouselSize() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  //   React.useEffect(() => {
  //     if (!api) {
  //       return;
  //     }

  //     setCount(api.scrollSnapList().length);
  //     setCurrent(api.selectedScrollSnap() + 1);

  //     api.on("select", () => {
  //       setCurrent(api.selectedScrollSnap() + 1);
  //     });
  //   }, [api]);

  return (
    <div className="flex flex-col">
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex w-full max-w-full flex-col"
        setApi={setApi}
      >
        <CarouselContent className="ml-[300px]">
          <CarouselItem key={111111} className="basis-[420px] pl-12">
            <ArticleItem link="https://www.google.com" title="abc" brief="aaa">
              <Image
                isZoomed
                radius="none"
                alt="NextUI Fruit Image with Zoom"
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
              />
            </ArticleItem>
          </CarouselItem>
          {Array.from({ length: 10 }).map((_, index) => (
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
          ))}
        </CarouselContent>
      </Carousel>
      <div>
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
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
