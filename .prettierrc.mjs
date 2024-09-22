/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 300,
        tabWidth: 2,
        useTabs: true,
      },
    },
  ],
};
