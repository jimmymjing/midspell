"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import GalleryIcon from "@/components/icons/image-01.svg";
import VideoIcon from "@/components/icons/film-01.svg";

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
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
