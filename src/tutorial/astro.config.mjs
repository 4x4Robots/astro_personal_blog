// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // TODO update to real domain
  site: "https://example.com",

  integrations: [preact()]
});