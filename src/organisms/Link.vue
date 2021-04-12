<template>
  <section id="link" class="link">
    <SectionTitle :title="title" />
    <LinkItem
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :href="item.href"
      :description="item.description"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SectionTitle from '~/components/SectionTitle.vue';
import LinkItem, { Props as LinkItemProps } from '~/components/LinkItem.vue';

export default defineComponent({
  name: 'Link',
  components: {
    SectionTitle,
    LinkItem,
  },
  setup: () => {
    const title = ref('リンク');
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
    ]);

    return { title, items };
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.link {
  background: $base;

  @include sp {
    padding: 8rem 2rem;
  }

  @include tablet {
    padding: 8rem 6rem;
  }

  @include pc {
    padding: 8rem 0 14rem;
    width: 90rem;
    margin: 0 auto;
  }
}
</style>
