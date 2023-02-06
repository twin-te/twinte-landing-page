<template>
  <section id="member" class="member">
    <ParticleSectionTitle title="主メンバー" />
    <Suspense>
      <div class="member__content">
        <ParticleMemberItem
          imagePath="takonasu"
          name="たこなす"
          desc="発起人。iOS、総務担当。
筑波大学院情報理工所属。
"
          :link="{ text: 'takonasu.net', href: 'https://takonasu.net' }"
          :iconLinks="{
            github: 'https://github.com/takonasu',
            twitter: 'https://twitter.com/ITF_tako',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="hikaruegashira"
          name="HikaruEgashira"
          desc="フロントエンド担当。
筑波大学情報科学類所属。
"
          :link="{ text: 'egahika.dev', href: 'https://egahika.dev' }"
          :iconLinks="{
            github: 'https://github.com/HikaruEgashira',
            twitter: 'https://twitter.com/ITF_hikary',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="siy1121"
          name="SIY1121"
          desc="バックエンド・Android担当。
筑波大学院情報理工所属。
"
          :link="{ text: 'siy.space', href: 'https://siy.space/' }"
          :iconLinks="{
            github: 'https://github.com/SIY1121',
            twitter: 'https://twitter.com/SIY1121',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="kanadenishizawa"
          name="KanadeNishizawa"
          desc="デザイン担当。
筑波大学芸術専門学群所属。

"
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
          imagePath="takonomura"
          name="takonomura"
          desc="インフラ担当。
筑波大学情報科学類所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/takonomura',
            twitter: '',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="hosokawar"
          name="HosokawaR"
          desc="フロントエンド担当。
筑波大学情報科学類所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/HosokawaR',
            twitter: '',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="hayatoshishido"
          name="HayatoShishido"
          desc="フロントエンド担当。
筑波大学応用理工学群所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/hayato24s',
            twitter: '',
          }"
        ></ParticleMemberItem>
        <ParticleMemberItem
          imagePath="yuku"
          name="ゆうく"
          desc="バックエンド担当。
無職。

"
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
