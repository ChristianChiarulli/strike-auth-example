"use client";

import { createAuthClient } from "better-auth/client";
import { Button } from "~/components/ui/button";
const authClient = createAuthClient();

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};

export default function SignIn() {
  async function handleSignInWithGitHub() {
    await signIn();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button type="button" onClick={handleSignInWithGitHub}>
        Sign in with Github
      </Button>
    </div>
  );
}
