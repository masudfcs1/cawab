import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // 1. Tell Lovable to disable Cloudflare bundling defaults
  cloudflare: false,

  // 2. Redirect TanStack Start's bundled server entry
  tanstackStart: {
    server: { entry: "server" },
  },

  // 3. Inject Nitro configured for Vercel
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // Forces Nitro to build Vercel Functions
      }),
    ],
  },
});
