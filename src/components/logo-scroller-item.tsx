"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function LogoScrollerItem(props: {
  img: string;
  children?: ReactNode;
}) {
  console.log("scroller:", props.img);
  return (
    // <>
    //   <div className="h-[100px] w-[100px] flex-none border-medium border-blue-400 bg-slate-500"></div>
    // </>
    <div className="h-[100px] w-[100px] flex-none border-medium border-blue-400 bg-slate-500">
      <Image src={props.img} alt="logo" width={100} height={100} />
    </div>
  );
}
