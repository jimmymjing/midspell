"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function LogoScrollerItem(props: {
  img: string;
  children?: ReactNode;
}) {
  //console.log("scroller:", props.img);
  return (
    <div className="relative h-[100px] min-w-[100px] flex-none overflow-hidden border-medium border-blue-400 bg-slate-500"></div>
    // <div className="h-[32px] flex-none bg-slate-500">
    //   <Image src={props.img} alt="logo" width={100} height={32} />
    // </div>
  );
}
