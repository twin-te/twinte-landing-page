<template>
  <section
    id="link"
    class="link"
  >
    <ParticleSectionTitle :title="title" />
    <ParticleLinkItem
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :href="item.href"
      :description="item.description"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Props as LinkItemProps } from '~/components/particle/LinkItem.vue'

const title = ref('リンク')
const items = ref<LinkItemProps[]>([
  {
    title: '公式Twitter',
    href: 'https://twitter.com/te_twin',
    description:
      '更新情報や障害情報などをお知らせします。お問い合わせはDMまで。',
  },
  {
    title: '開発者ブログ',
    href: 'https://twinte.hatenablog.com/',
    description: 'Twin:te開発にまつわる記事を書いていきます。',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/twin-te',
    description: 'OSSとして公開中ですので、機能改善にご協力ください。',
  },
  {
    title: 'Twin:te Sponsor',
    href: 'https://sponsorship.twinte.net',
    description:
      '寄付の受付ページです。Twin:teの活動をご支援いただけますと幸いです。',
  },
  {
    title: '開発者向けドキュメント',
    href: 'https://github.com/twin-te/twinte-landing-page/tree/main/docs',
    description: '開発者向けドキュメントです。',
  },
])
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.link {
  background: variable.$base;

  @include mixin.sp {
    padding: 8rem 2rem;
  }

  @include mixin.tablet {
    padding: 8rem 6rem;
  }

  @include mixin.pc {
    padding: 8rem 0 14rem;
    width: 90rem;
    margin: 0 auto;
  }
}
</style>
