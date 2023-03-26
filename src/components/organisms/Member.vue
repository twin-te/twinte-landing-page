<template>
  <section id="member" class="member">
    <ParticleSectionTitle title="主メンバー" />
    <Suspense>
      <div class="member__content">
        <div class="member__content-cards">
          <ParticleMemberItem
            imagePath="takonasu"
            name="たこなす"
            desc="発起人。iOS、総務担当。大学院情報理工所属。"
            :link="{ text: 'takonasu.net', href: 'https://takonasu.net' }"
            :iconLinks="{
              github: 'https://github.com/takonasu',
              twitter: 'https://twitter.com/ITF_tako',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="siy1121"
            name="SIY1121"
            desc="バックエンド・Android担当。大学院情報理工所属。"
            :link="{ text: 'siy.space', href: 'https://siy.space/' }"
            :iconLinks="{
              github: 'https://github.com/SIY1121',
              twitter: 'https://twitter.com/SIY1121',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="takonomura"
            name="takonomura"
            desc="インフラ担当。情報科学類所属。"
            :link="{ text: '', href: '' }"
            :iconLinks="{
              github: 'https://github.com/takonomura',
              twitter: '',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="hosokawar"
            name="HosokawaR"
            desc="フロントエンド担当。情報科学類所属。"
            :link="{ text: '', href: '' }"
            :iconLinks="{
              github: 'https://github.com/HosokawaR',
              twitter: '',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="hayatoshishido"
            name="Hayato Shishido"
            desc="フロントエンド担当。社会工学類所属。"
            :link="{ text: '', href: '' }"
            :iconLinks="{
              github: 'https://github.com/hayato24s',
              twitter: '',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="raspi0124"
            name="raspi0124"
            desc="知識情報・図書館学類所属。"
            :link="{ text: 'raspi0124.dev', href: 'https://raspi0124.dev' }"
            :iconLinks="{
              github: 'https://github.com/raspi0124',
              twitter: 'https://twitter.com/raspi0124',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="kichi2004"
            name="Takayuki Ueno (kichi2004)"
            desc="情報科学類所属。"
            :link="{ text: 'kichi2004.jp', href: 'https://kichi2004.jp/' }"
            :iconLinks="{
              github: 'https://github.com/kichi2004',
              twitter: 'https://twitter.com/kichi2004_',
            }"
          ></ParticleMemberItem>
          <ParticleMemberItem
            imagePath="azarashi"
            name="あざらし"
            desc="情報科学類所属。ブラウザ拡張機能担当。"
            :link="{ text: 'azr.sh', href: 'https://azr.sh/' }"
            :iconLinks="{
              github: 'https://github.com/azarashi2931',
              twitter: 'https://twitter.com/azarashi_uni',
            }"
          ></ParticleMemberItem>
        </div>
        <div class="member__content-link">
          <a href="./othermember">その他のメンバー ></a>
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
      text-align: right;
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
