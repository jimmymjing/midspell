"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Parallax } from "react-scroll-parallax";
import pastelCat from "@/assets/images/parallax-prompt-content/jimmymjing_pastel_colored_ccat_--ar_916_7ca0b51f-7fb5-46fb-bd6b-2ebe2c4cdc5b_0.png";
import beautifulUnique from "@/assets/images/parallax-prompt-content/jimmymjing_most_beautiful_unique_unconventional_mind-bending__a568b844-b104-4855-837a-5efd6a10915a_2.png";
import womanSmoke from "@/assets/images/parallax-prompt-content/jimmymjing_low_angle_shot_photo_of_a_woman_fiery_smoke_all_ar_ae3b49e3-496a-4093-8218-d4b530ecc2e0_0.png";
import miyazakiTemple from "@/assets/images/parallax-prompt-content/jimmymjing_by_hayao_miyazaki_spirit_away_animation_style_stud_cd09ff18-45f6-4b39-8248-3aff72ff7302_1.png";
import spaghettiDesign from "@/assets/images/parallax-prompt-content/jimmymjing_spaghetti_packaging_design_by_morag_myerscough_b5e00d4a-4873-4474-a2d6-ec52b59672f3_3.png";
import walkingCat from "@/assets/images/parallax-prompt-content/jimmymjing_little_cat_walking_over_puddles_in_red_raincoat_re_20739322-e86a-41b5-9e43-60d9f3e9a8f0_2.png";
import skatePark from "@/assets/images/parallax-prompt-content/jimmymjing_backyard_skatepark_with_trampolines_by_morag_myers_b418d815-fa4e-4cb6-9bce-004f7782c6f7_2.png";
import posterArt from "@/assets/images/parallax-prompt-content/jimmymjing_text_POSTER_ART_in_bold_letters._Minimalist_halfto_b28d5e95-e2dd-43d3-bf81-cd41a1181395_2.png";
import oldWoman from "@/assets/images/parallax-prompt-content/jimmymjing_old_woman_in_the_park_pixar_studio_style_--v_5.2_bd34cc3f-b36e-4612-b586-1c3b4e2b19ea_0.png";
import pixelArt from "@/assets/images/parallax-prompt-content/jimmymjing_Pixel_art_--ar_23_40d6ade5-6489-4dda-a01b-ae2630c1e496.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

function PromptParaItem({
  children,
  transX,
  top,
  factorX = 0.3,
  factorY = 0.5,
  z = 2,
  speed = 20,
}: {
  children: React.ReactNode;
  transX: string;
  top: string;
  factorX?: number;
  factorY?: number;
  z?: number;
  speed?: number;
}) {
  return (
    <MouseParallaxChild factorX={factorX} factorY={factorY}>
      <Parallax
        speed={speed}
        translateX={[transX, transX]}
        className={`absolute bottom-auto ${top} flex justify-center z-[${z}] max-w-full cursor-pointer overflow-visible rounded-sm brightness-75 hover:brightness-100 hover:duration-300`}
      >
        {children}
      </Parallax>
    </MouseParallaxChild>
  );
}

export default function PromptParaScroll() {
  return (
    <>
      {/* miw_content-track */}
      <div className="relative h-[150rem] overflow-clip bg-black">
        {/* miw_overlay-track */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10">
          {/* miw_overlay-content */}
          <div className="sticky top-0 flex h-screen items-center justify-center align-middle">
            {/* miw_badge-outer */}
            <div>
              <Link
                href="https://www.google.com"
                className="pointer-events-auto relative flex w-[37rem] max-w-full cursor-pointer justify-center overflow-hidden rounded-xl bg-slate-500 p-8 align-middle text-black"
              >
                {/* miw_badge-inner */}
                <div className="pointer-events-auto relative z-10 flex align-middle">
                  {/* symbo */}
                  Summoned in midspell
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* miw_content-w */}

        <div className="flex h-full flex-col overflow-clip">
          <MouseParallaxContainer
            globalFactorX={0.05}
            globalFactorY={0.05}
            className="h-full w-full"
            inverted={true}
          >
            <div className="relative ml-auto mr-auto flex h-full w-[90%] max-w-[1280px] flex-col items-center">
              <PromptParaItem
                transX="-400px"
                top="top-[2rem]"
                factorX={0.5}
                factorY={0.8}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={pastelCat}
                    alt="logo"
                    className="relative max-w-[20rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem transX="200px" top="top-[9rem]" speed={10}>
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={miyazakiTemple}
                    alt="logo"
                    className="relative max-w-[45rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem transX="-400px" top="top-[40rem]" speed={20}>
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={beautifulUnique}
                    alt="logo"
                    className="relative max-w-[30rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="350px"
                top="top-[37rem]"
                speed={10}
                factorX={0.3}
                factorY={0.3}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={womanSmoke}
                    alt="logo"
                    className="relative max-w-[40rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="270px"
                top="top-[52rem]"
                speed={15}
                factorX={0.4}
                factorY={0.4}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={spaghettiDesign}
                    alt="logo"
                    className="relative max-w-[25rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="-270px"
                top="top-[65rem]"
                speed={20}
                factorX={0.6}
                factorY={0.5}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={walkingCat}
                    alt="logo"
                    className="relative max-w-[25rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="350px"
                top="top-[85rem]"
                speed={10}
                factorX={0.3}
                factorY={0.3}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={skatePark}
                    alt="logo"
                    className="relative max-w-[45rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="-400px"
                top="top-[100rem]"
                speed={12}
                factorX={0.4}
                factorY={0.4}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={posterArt}
                    alt="logo"
                    className="relative max-w-[40rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="400px"
                top="top-[120rem]"
                speed={20}
                factorX={0.6}
                factorY={0.4}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={oldWoman}
                    alt="logo"
                    className="relative max-w-[30rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
              <PromptParaItem
                transX="-300px"
                top="top-[123rem]"
                speed={20}
                factorX={0.5}
                factorY={0.5}
              >
                <Link href="https://www.google.com" target="_blank">
                  <Image
                    src={pixelArt}
                    alt="logo"
                    className="relative max-w-[20rem] rounded-sm object-cover align-middle"
                  />
                </Link>
              </PromptParaItem>
            </div>
          </MouseParallaxContainer>
        </div>
      </div>
    </>
  );
}
