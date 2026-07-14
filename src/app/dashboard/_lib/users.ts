// export type DashboardUser = {
//   email: string;
//   password: string;
//   name: string;
//   initials: string;
// };

export type DashboardUser = {
  email: string;
  password: string;

  name: string;

  initials: string;

  avatar: string;
};

export const dashboardUsers: DashboardUser[] = [
  {
    email: process.env.DASHBOARD_USER_1_EMAIL!,
    password: process.env.DASHBOARD_USER_1_PASSWORD!,
    name: process.env.DASHBOARD_USER_1_NAME!,
    initials: process.env.DASHBOARD_USER_1_INITIALS!,
    avatar: process.env.DASHBOARD_USER_1_AVATAR!,
  },
  {
    email: process.env.DASHBOARD_USER_2_EMAIL!,
    password: process.env.DASHBOARD_USER_2_PASSWORD!,
    name: process.env.DASHBOARD_USER_2_NAME!,
    initials: process.env.DASHBOARD_USER_2_INITIALS!,
    avatar: process.env.DASHBOARD_USER_2_AVATAR!,
  },
];
