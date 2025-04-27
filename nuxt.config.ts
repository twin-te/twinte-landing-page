import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  nitro: {
    output: {
      dir: 'dist',
    },
  },
  srcDir: 'src/',
  app: {
    head: {
      title: 'Twin:te',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content:
            '時間割をTWINSからアプリに簡単インポート！教室や授業名も自動で表示！曜日振替に対応したウィジェット！筑波大学生専用の時間割アプリTwin:teです。',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@te_twin' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:description',
          content:
            '時間割をTWINSからアプリに簡単インポート！教室や授業名も自動で表示！曜日振替に対応したウィジェット！筑波大学生専用の時間割アプリTwin:teです。',
        },
        { property: 'og:image', content: 'https://twinte.net/ogp.jpg' },
        { property: 'og:site_name', content: 'Twin:te' },
        { property: 'og:title', content: 'Twin:te' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://twinte.net' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/touch-icon.png',
          sizes: '192x192',
        },
        { rel: 'canonical', href: 'https://www.twinte.net' },
      ],
    },
  }
});
