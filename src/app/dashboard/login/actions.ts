"use server";

import { redirect } from "next/navigation";

import { authenticate } from "../_lib/auth";
import { createSession } from "../_lib/session";

export async function loginAction(_: string | null, formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const user = await authenticate(email, password);

  if (!user) {
    return "E-mail ou palavra-passe inválidos.";
  }

  await createSession(user);

  redirect("/dashboard");
}
