/** @format */

module.exports = {
  reactStrictMode: true,
  env: {
    appName: "Belajar NextJs",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/Login",
      },
      {
        source: "/register",
        destination: "/auth/Register",
      },
      {
        source: "/dashboard",
        destination: "/home/Dashboard",
      },
    ];
  },
};
