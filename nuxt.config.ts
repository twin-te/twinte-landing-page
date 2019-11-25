import NuxtConfiguration from "@nuxt/config";
const baseName = process.env.BASE_NAME || "Twin:te";
const baseDesc =
  process.env.BASE_DISC || "筑波大学専門の時間割アプリケーションです";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const baseDir = process.env.BASE_DIR || "/";

const config: NuxtConfiguration = {
  mode: "universal",
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#"
    },
    title: baseName,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: baseDesc },
      { hid: "og:site_name", property: "og:site_name", content: baseName },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: baseUrl },
      { hid: "og:title", property: "og:title", content: baseName },
      { hid: "og:description", property: "og:description", content: baseDesc },
      {
        hid: "og:image",
        property: "og:image",
        content: `${baseUrl}/favicon.png`
      },
      { name: "twitter:card", content: baseDesc },
      { name: "twitter:site", content: "@te_twin" }
    ]
  },
  router: {
    base: baseDir
  },
  loadingIndicator: {
    name: "wandering-cubes",
    color: "teal",
    color2: "white",
    background: "gray"
  },
  loading: {
    color: "teal",
    height: "5px"
  },
  modules: ["nuxt-buefy"],
  build: {
    analyze: {
      analyzerMode: "static"
    },
    cache: true,
    extend(config, _ctx) {
      config.devtool = "source-map";
    },
    optimizeCSS: true
  },
  workbox: {
    dev: false,
    runtimeCaching: [
      {
        urlPattern: "^https://fonts.(?:googleapis|gstatic).com/(.*)",
        handler: "cacheFirst"
      },
      {
        urlPattern: baseDir + "lib/.*",
        handler: "cacheFirst",
        strategyOptions: {
          cacheName: "image-cache",
          cacheExpiration: {
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60 * 30
          }
        }
      }
    ]
  },
  plugins: [
    { src: "~~/node_modules/vue-rellax/lib/nuxt-plugin", ssr: false },
    "~~/plugins/laxxx",
    { src: "~~/plugins/ga.js", mode: "client" }
  ],
  css: ["~assets/css/main.scss"]
};

export default config;
