"use client";
import { login, signup, socialLogin } from "./actions";
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
        {/* <button formAction={googleLogin}>Login google</button> */}
        <input
          id="providerName"
          name="providerName"
          value="google"
          type="hidden"
        />
        <button formAction={socialLogin}>Login google</button>
      </form>
      <form>
        {/* <button formAction={discordLogin}>Login discord</button> */}
        <input
          id="providerName"
          name="providerName"
          value="discord"
          type="hidden"
        />
        <button formAction={socialLogin}>Login discord</button>
      </form>
      <form>
        <input
          id="providerName"
          name="providerName"
          value="github"
          type="hidden"
        />
        <button formAction={socialLogin}>Login github</button>
      </form>
      <form>
        <input
          id="providerName"
          name="providerName"
          value="twitter"
          type="hidden"
        />
        <button formAction={socialLogin}>Login twitter</button>
      </form>
      <button onClick={handleLogin}>Client-side Login Google </button>;
    </>
  );
}
