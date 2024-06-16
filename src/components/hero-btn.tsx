"use client";
import { Button } from "@nextui-org/button";
import React from "react";

export default function HeroBtn() {
  const signInHandler = () => {
    console.log("signInHandler ");
  };
  return (
    <div>
      <Button color="primary" disableAnimation={false} onPress={signInHandler}>
        Click me
      </Button>
    </div>
  );
}
