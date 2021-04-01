<template>
  <section class="member">
    <SectionTitle title="主メンバー" />
    <Suspense>
      <div class="member__content">
        <MemberItem
          imagePath="../images/takonasu.jpg"
          name="たこなす"
          desc="発起人。iOS、総務担当。
筑波大学情報科学類所属。
"
          :link="{ text: 'takonasu.net', href: 'https://takonasu.net' }"
          :iconLinks="{
            github: 'https://github.com/takonasu',
            twitter: 'https://twitter.com/ITF_tako',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/hikaruegashira.jpg"
          name="HikaruEgashira"
          desc="フロントエンド担当。
筑波大学情報科学類所属。
"
          :link="{ text: 'egahika.dev', href: 'https://egahika.dev' }"
          :iconLinks="{
            github: 'https://github.com/HikaruEgashira',
            twitter: 'https://twitter.com/ITF_hikary',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/siy1121.jpg"
          name="SIY1121"
          desc="バックエンド・Android担当。
筑波大学情報科学類所属。
"
          :link="{ text: 'siy.space', href: 'https://siy.space/' }"
          :iconLinks="{
            github: 'https://github.com/SIY1121',
            twitter: 'https://twitter.com/SIY1121',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/kanadenishizawa.jpg"
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
        ></MemberItem>
        <MemberItem
          imagePath="../images/takonomura.jpg"
          name="takonomura"
          desc="インフラ担当。
筑波大学情報科学類所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/takonomura',
            twitter: '',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/hosokawar.jpg"
          name="HosokawaR"
          desc="フロントエンド担当。
筑波大学情報科学類所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/HosokawaR',
            twitter: '',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/hayatoshishido.jpg"
          name="HayatoShishido"
          desc="フロントエンド担当。
筑波大学応用理工学群所属。
"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/hayato24s',
            twitter: '',
          }"
        ></MemberItem>
        <MemberItem
          imagePath="../images/yuku.jpg"
          name="ゆうく"
          desc="バックエンド担当。
無職。

"
          :link="{ text: '', href: '' }"
          :iconLinks="{
            github: 'https://github.com/Monchi',
            twitter: 'https://twitter.com/LOST_JINKEN',
          }"
        ></MemberItem>
      </div>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberItem from "~/components/MemberItem.vue";
import SectionTitle from "~/components/SectionTitle.vue";

export default defineComponent({
  components: { MemberItem, SectionTitle },
  setup: () => {},
});
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

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
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    @include tablet {
      width: calc(220px * 2 + 16px * 3);
      margin: auto;
    }

    @include pc {
      width: calc(220px * 4 + 16px * 3);
      margin: auto;
    }
  }
}
</style>
