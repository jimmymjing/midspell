"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import SearchbarHeader from "./searchbar-header";

const navigation = [
  { name: "Explore", href: "#" },
  { name: "Magic Academy", href: "#" },
  { name: "Go Pro", href: "#" },
];

const signInHandler = () => {
  console.log("signInHandler ");
};

export default function HomeHeader() {
  return (
    <header className="bg-gray-900">
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
          <Button onClick={signInHandler}>Sign In</Button>
        </div>
      </nav>
    </header>
  );
}
