"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
// import GalleryIcon from "@/components/icons/image-01.svg";
// import VideoIcon from "@/components/icons/film-01.svg";
import { GalleryIcon } from "@/components/icons/GalleryIcon";
import { VideoIcon } from "@/components/icons/VideoIcon";

export default function VidImgToggle() {
  return (
    <div className="flex">
      <Tabs
        color="primary"
        aria-label="Options"
        variant="solid"
        radius="full"
        classNames={{
          tabList: "bg-slate-800",
        }}
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon /> */}
              <GalleryIcon />
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>Videos</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
