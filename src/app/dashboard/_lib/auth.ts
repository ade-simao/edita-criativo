import { dashboardUsers } from "./users";

export async function authenticate(email: string, password: string) {
  const user = dashboardUsers.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase().trim() &&
      user.password === password,
  );

  if (!user) {
    return null;
  }

  return {
    email: user.email,
    name: user.name,
    initials: user.initials,
    avatar: user.avatar,
  };
}
