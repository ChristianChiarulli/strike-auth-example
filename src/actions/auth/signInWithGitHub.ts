"use server";

import { auth } from "~/lib/auth";

export const signInWithGithub = async () => {
  await auth.api.signInSocial({
    body: {
      provider: "github",
      redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/github`,
    },
  });
};
