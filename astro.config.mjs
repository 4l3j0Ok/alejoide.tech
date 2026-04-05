// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from "astro-icon";
import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://alejoide.tech",
  integrations: [icon(), react()],

  env: {
    schema: {
      SEND_EMAIL_FROM: envField.string({ context: "server", access: "secret" }),
      SEND_EMAIL_TO: envField.string({ context: "server", access: "secret" }),
      PUBLIC_EMAIL: envField.string({ context: "client", access: "public" }),
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
    }
  },

  output: "server",

  adapter: node({
    mode: "standalone"
  })
});
