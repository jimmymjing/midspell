import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import HomeHeader from "@/components/home-header";
import SearchbarHeader from "@/components/searchbar-header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeader />
      {/* <SearchbarHeader width={400} /> */}
      <BackgroundGradientAnimation />
    </main>
  );
}
