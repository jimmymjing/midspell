"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import SearchbarHeader from "./searchbar-header";
import CharacterIcon from "./icons/user-01.svg";
import Palette from "./icons/palette.svg";
import MediaImage from "./icons/media-image.svg";
import Journal from "./icons/journal.svg";
import VideoProjector from "./icons/video-projector.svg";
import Building07 from "./icons/building-07.svg";
import SleeperChair from "./icons/sleeper-chair.svg";
import VidImgToggle from "./vid-img-toggle";

const navigation = [
  { name: "Explore", href: "#" },
  { name: "Magic Academy", href: "#" },
  { name: "Go Pro", href: "#" },
];

const secondaryNavigation = [
  { name: "Character Design", href: "#", current: true, icon: CharacterIcon },
  { name: "Concept Art", href: "#", current: false, icon: Palette },
  { name: "Graphic Design", href: "#", current: false, icon: MediaImage },
  { name: "Advertising", href: "#", current: false, icon: Journal },
  { name: "Product", href: "#", current: false, icon: VideoProjector },
  { name: "Architecture", href: "#", current: false, icon: Building07 },
  { name: "Interior Design", href: "#", current: false, icon: SleeperChair },
];

const signInHandler = () => {
  console.log("signInHandler ");
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeHeader() {
  return (
    <header className="bg-gray-900">
      {/* <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8"> */}
      <div className="mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
        <nav
          className="mx-auto flex items-center justify-between p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1">
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <a href="#" className="-m-1.5 flex flex-row gap-1 p-1.5">
            <Image
              src="/midspell_graphic_logo_gradient_compressed.svg"
              alt="Midspell Graphic Logo"
              width={45}
              height={45}
            />
            <Image
              src="/midspell_logo_white_compressed.svg"
              alt="Midspell Text Logo"
              width={126}
              height={51.79}
            />
          </a>
          <div className="flex flex-1 items-center justify-end gap-2">
            <SearchbarHeader />
            <Button className="ml-2" onClick={signInHandler}>
              Sign In
            </Button>
          </div>
        </nav>

        <nav
          className="hidden lg:flex lg:space-x-8 lg:py-2"
          aria-label="Global"
        >
          <VidImgToggle />
          {secondaryNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "inline-flex flex-row items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
