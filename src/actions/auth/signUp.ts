"use server";

import { auth } from "~/lib/auth";

export const signUp = async (email: string, name: string, password: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
};
