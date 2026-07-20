import next from "eslint-config-next/core-web-vitals";

const config = [
  ...next,
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "next-env.d.ts",
      ".tools/**",
      "skills/**",
      "playbook-references/**",
    ],
  },
];

export default config;
