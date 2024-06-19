import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import HomeHeader from "@/components/home-header";
import { PlaceholdersAndVanishInputDemo } from "@/components/home-hero-searchbar";
import HomeVidSpline from "@/components/home-vid-spline";

import HeroSuggestionChip from "@/components/hero-suggestion-chip";
import PlatformLogoScroller from "@/components/platform-logo-scroller";
import { ParallaxScrollImages } from "@/components/parallaxScrollPromptImages";

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
          <div className="pointer-events-none z-50 flex h-[150px] flex-col justify-center bg-gradient-to-b from-gray-900 to-transparent"></div>
          <div className="pointer-events-none mx-auto -mt-[100px] max-w-3xl text-center">
            <h1 className="pt-28 font-walsheim text-[112px] leading-[7rem] text-white">
              Find your next
              <br />
              AI spell
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
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
          <HomeVidSpline />
          {/* <div className="absolute top-0 flex h-[800px] w-full flex-col justify-center bg-black/30"></div> */}
        </div>
      </div>
      <PlatformLogoScroller />
      <ParallaxScrollImages />
      <h1 className="m-auto w-[700px] pt-28 text-center font-walsheim text-[84px] leading-[6rem] text-black">
        abc
      </h1>
      {/* <TagGroupFilter /> */}
    </main>
  );
}
