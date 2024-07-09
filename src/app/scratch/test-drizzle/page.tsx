import { db } from "@/db/db";
import { user } from "@/db/schema/schema";
import React from "react";

export default async function TestDrizzle() {
  const res = await db.insert(user).values({
    name: "John Doe",
    email: "daa@midspell.io",
  });
  console.log("res", res);
  const result = await db.select().from(user);
  console.log("user result:", result);
  return <div></div>;
}
