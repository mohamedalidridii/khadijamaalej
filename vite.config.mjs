import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = [
  "index.html",
  "about.html",
  "speaking.html",
  "contact.html",
  "work/el-kul.html",
  "work/i-am-the-president.html",
  "work/kids-lifeline.html",
  "work/public-interest-media.html",
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(".html", ""), resolve(import.meta.dirname, page)]),
      ),
    },
  },
});
