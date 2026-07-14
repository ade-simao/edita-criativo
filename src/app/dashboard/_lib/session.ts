"use server";

import { cookies } from "next/headers";

export type DashboardSession = {
  email: string;
  name: string;
  initials: string;
  avatar: string;
};

const COOKIE_NAME = "dashboard-session";

export async function createSession(session: DashboardSession) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, JSON.stringify(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function getSession(): Promise<DashboardSession | null> {
  const cookieStore = await cookies();

  const value = cookieStore.get(COOKIE_NAME);

  if (!value) {
    return null;
  }

  return JSON.parse(value.value);
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}
