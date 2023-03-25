<template>
  <section id="member" class="member">
    <ParticleSectionTitle title="その他のメンバー" />
    <Suspense>
      <div class="member__content">
        <ParticleMemberItem
          imagePath="hikaruegashira"
          name="HikaruEgashira"
          desc="フロントエンド担当。筑波大学情報科学類所属。"
          :link="{ text: 'egahika.dev', href: 'https://egahika.dev' }"
          :iconLinks="{
            github: 'https://github.com/HikaruEgashira',
            twitter: 'https://twitter.com/ITF_hikary',
          }"
        ></ParticleMemberItem>

        <ParticleMemberItem
          imagePath="kanadenishizawa"
          name="KanadeNishizawa"
          desc="デザイン担当。筑波大学芸術専門学群所属。"
          :link="{
            text: 'kanade-works.web.app',
            href: 'https://kanade-works.web.app',
          }"
          :iconLinks="{
            github: 'https://github.com/KanadeNishizawa',
            twitter: '',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="yuku"
          name="ゆうく"
          desc="バックエンド担当。無職。"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/Monchi',
            twitter: 'https://twitter.com/LOST_JINKEN',
          }"
        ></ParticleMemberItem>
      </div>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup: () => {},
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.member {
  @include sp {
    padding: 8rem 2rem;
  }

  @include tablet {
    padding: 8rem 6rem;
  }

  @include pc {
    padding: 8rem 0 14rem;
  }
  &__content {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto;
    gap: 16px;
    @include tablet {
      width: calc(220px * 2 + 16px * 3);
      margin: auto;
      grid-template-columns: repeat(auto-fit, 22rem);
    }

    @include pc {
      width: calc(220px * 4 + 16px * 3);
      margin: auto;
      grid-template-columns: repeat(auto-fit, 22rem);
    }
  }
}
</style>
