import React, { ReactNode } from "react";

export default function TestB(props: { clr: string; children?: ReactNode }) {
  console.log(props); // { title: "React" }

  return <div>{props.children}</div>;
}
