"use client";
import { Button } from "@nextui-org/button";
import React, { ReactNode } from "react";

export default function HeroSuggestionChip(props: {
  clr: string;
  children?: ReactNode;
}) {
  const signInHandler = () => {
    console.log("signInHandler ");
  };
  return (
    <div>
      <Button
        color="primary"
        variant="bordered"
        radius="full"
        size="sm"
        className="border-white text-white"
      >
        {props.children}
      </Button>
    </div>
  );
}
