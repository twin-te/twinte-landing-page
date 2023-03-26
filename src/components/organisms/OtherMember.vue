<template>
  <section id="other-member" class="other-member">
    <ParticleSectionTitle title="その他のメンバー" />
    <Suspense>
      <div class="other-member__content">
        <div class="other-member__content-cards">
          <ParticleMemberItem
            imagePath="hikaruegashira"
            name="Hikaru Egashira"
            desc="元フロントエンド担当。情報科学類出身。"
            :link="{ text: 'egahika.dev', href: 'https://egahika.dev' }"
            :iconLinks="{
              github: 'https://github.com/HikaruEgashira',
              twitter: 'https://twitter.com/ITF_hikary',
            }"
          ></ParticleMemberItem>

          <ParticleMemberItem
            imagePath="kanadenishizawa"
            name="Kanade Nishizawa"
            desc="元デザイン担当。芸術専門学群出身。"
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
            imagePath="kensukesuzuki"
            name="Kensuke Suzuki"
            desc="寄付ページ担当。情報科学類出身。"
            :link="{
              text: 'momokichi.github.io',
              href: 'https://momokichi.github.io/',
            }"
            :iconLinks="{
              github: 'https://github.com/momokichi',
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
        <div class="other-member__content-link opacity2">
          <NuxtLink to="/#member">&lt; 戻る</NuxtLink>
        </div>
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

.other-member {
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
    @include tablet {
      margin: auto;
      width: calc(220px * 2 + 16px * 3);
    }

    @include pc {
      margin: auto;
      width: calc(220px * 4 + 16px * 3);
    }
    &-link {
      margin: 16px;
      a {
        color: $text-link;
        text-decoration: none;
      }
    }
    &-cards {
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto;
      gap: 16px;
      @include tablet {
        grid-template-columns: repeat(auto-fit, 22rem);
      }

      @include pc {
        grid-template-columns: repeat(auto-fit, 22rem);
      }
    }
  }
}
</style>
