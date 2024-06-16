import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import HomeHeader from "@/components/home-header";
import { PlaceholdersAndVanishInputDemo } from "@/components/home-hero-searchbar";
import HomeVidSpline from "@/components/home-vid-spline";
import SearchbarHeader from "@/components/searchbar-header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeader />
      {/* <SearchbarHeader width={400} /> */}
      <BackgroundGradientAnimation>
        <div className="absolute z-50 w-full items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="pt-28 font-walsheim text-[112px] leading-[7rem] text-white">
              Find your next
              <br />
              AI spell
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Explore a Marketplace of Enchanted AI Prompts to Empower Your
              Creativity and Transform Your Ideas into Magical Realities
            </p>
          </div>
          <PlaceholdersAndVanishInputDemo />
          {/* <HomeVidSpline /> */}
        </div>
      </BackgroundGradientAnimation>
      <div className="z-50 -mt-96 w-full items-center justify-center">
        <HomeVidSpline />
      </div>
      <h1 className="m-auto w-[700px] pt-28 text-center font-walsheim text-[84px] leading-[6rem] text-black">
        abc
      </h1>
    </main>
  );
}
