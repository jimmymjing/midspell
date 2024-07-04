import { createClient } from "@/utils/supabase/client";
import React from "react";

export default function TestGoogleOAuth() {
  const handleLogin = async () => {
    const supabase = createClient();
    // supabase.auth.signInWithOAuth({
    //   provider: "google",
    // });
    console.log("googleLogin");
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log("done");
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>;
    </>
  );
}
