import React from "react";
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";
import cm1 from "@/assets/images/category-marquee/cm1.jpg";
import cm2 from "@/assets/images/category-marquee/cm2.jpg";
import cm3 from "@/assets/images/category-marquee/cm3.jpg";
import cm4 from "@/assets/images/category-marquee/cm4.jpg";
import cm5 from "@/assets/images/category-marquee/cm5.png";
import cm6 from "@/assets/images/category-marquee/cm6.png";
import cm7 from "@/assets/images/category-marquee/cm7.png";
import cm8 from "@/assets/images/category-marquee/cm8.png";
import cm9 from "@/assets/images/category-marquee/cm9.png";
import cm10 from "@/assets/images/category-marquee/cm10.png";
import cm11 from "@/assets/images/category-marquee/cm11.png";
import cm12 from "@/assets/images/category-marquee/cm12.png";
import cm13 from "@/assets/images/category-marquee/cm13.png";
import cm14 from "@/assets/images/category-marquee/cm14.png";
import cm15 from "@/assets/images/category-marquee/cm15.png";
import cm16 from "@/assets/images/category-marquee/cm16.png";
import cm17 from "@/assets/images/category-marquee/cm17.png";
import cm18 from "@/assets/images/category-marquee/cm18.png";
import Link from "next/link";

export default function CategoryMarqueeSection() {
  return (
    <>
      <Marquee pauseOnHover={true} className="bg-black py-4">
        <CategoryItem title="Characters" link="/illustration" img={cm1} />
        <CategoryItem title="Animals" link="/illustration" img={cm2} />
        <CategoryItem title="Landscapes" link="/illustration" img={cm3} />
        <CategoryItem title="Letters" link="/illustration" img={cm4} />
        <CategoryItem title="Patterns" link="/illustration" img={cm5} />
        <CategoryItem title="City" link="/illustration" img={cm6} />
        <CategoryItem title="Concept Art" link="/illustration" img={cm7} />
        <CategoryItem title="Illustration" link="/illustration" img={cm8} />
        <CategoryItem title="Graphic Design" link="/illustration" img={cm9} />
        <CategoryItem title="Photography" link="/illustration" img={cm10} />
        <CategoryItem title="Products" link="/illustration" img={cm11} />
        <CategoryItem title="Architecture" link="/illustration" img={cm12} />
        <CategoryItem title="Anime & Manga" link="/illustration" img={cm13} />
        <CategoryItem
          title="Cartoon & Comics"
          link="/illustration"
          img={cm14}
        />
        <CategoryItem title="Traditional Art" link="/illustration" img={cm15} />
        <CategoryItem title="2D Animation" link="/illustration" img={cm16} />
        <CategoryItem title="3D Animation" link="/illustration" img={cm17} />
        <CategoryItem title="MOtion Graphics" link="/illustration" img={cm18} />
      </Marquee>
    </>
  );
}

function CategoryItem({
  //   children,
  link,
  title,
  img,
}: {
  //   children: React.ReactNode;
  link: string;
  title: string;
  img: StaticImageData;
}) {
  return (
    <Link href={link} target="_blank" className="">
      <div className="flex w-[200px] flex-shrink-0 flex-col items-start gap-3 p-3">
        <div className="group relative h-full w-full">
          <div className="absolute -top-[8px] left-[8px] h-[150px] w-[176px] rounded-sm bg-green-200 group-hover:-top-[12px] group-hover:left-[12px] group-hover:delay-75 group-hover:duration-200"></div>
          <div className="absolute -top-[4px] left-[4px] h-[150px] w-[176px] rounded-sm bg-purple-300 group-hover:-top-[6px] group-hover:left-[6px] group-hover:duration-200"></div>
          <Image
            src={img}
            alt="logo"
            className="relative h-[150px] w-[180px] rounded-sm object-cover align-middle"
          />
        </div>
        <div className="text-base font-semibold leading-normal text-white">
          {title}
        </div>
      </div>
    </Link>
  );
}
