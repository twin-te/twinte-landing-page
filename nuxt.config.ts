import NuxtConfiguration from "@nuxt/config";
const pkg = require("./package");

const config: NuxtConfiguration = {
  mode: "spa",
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Twin:teは筑波大学生向けの時間割作成アプリです。現在Playストア及びAppStoreでは配布していませんのでこちらからお試しください！" }
    ]
  },
  loading: {
    color: "teal",
    height: "5px",
    continuous: true
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
  plugins: [
    { src: "~~/node_modules/vue-rellax/lib/nuxt-plugin", ssr: false },
    "~~/plugins/laxxx"
  ],
  css: ["~assets/css/main.scss"]
};

export default config;
