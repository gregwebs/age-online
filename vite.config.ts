import preact from "@preact/preset-vite";
import { existsSync, readFileSync } from "node:fs";
import { defineConfig } from "vite";

const certExists = existsSync("./age-online-dev.localhost.pem");

// When deploying to GitHub Pages as a project site, the app is served from
// https://<user>.github.io/<repo>/, so assets must be referenced relative to
// that sub-path. Allow overriding via BASE_PATH for custom domains / forks.
const base = process.env.BASE_PATH ?? "/age-online/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? base : "/",
  plugins: [preact()],
  server: certExists
    ? {
        https: {
          cert: readFileSync("./age-online-dev.localhost.pem"),
          key: readFileSync("./age-online-dev.localhost-key.pem"),
        },
      }
    : {},
}));
