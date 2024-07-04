"use client";
import { login, signup, googleLogin } from "./actions";
import { createClient } from "@/utils/supabase/client";
import React from "react";

export default function TestGoogleOAuth() {
  const handleLogin = async () => {
    const supabase = createClient();
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <form>
        <button formAction={googleLogin}>Login google</button>
      </form>
      <button onClick={handleLogin}>Login</button>;
    </>
  );
}
