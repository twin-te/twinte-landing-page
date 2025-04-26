<template>
  <div class="bottom">
    <div class="bottom__container">
      <div class="bottom__text">
        Twin:teを今すぐ使う
      </div>
      <a
        href="https://apps.apple.com/jp/app/twin-te/id1489274755?mt=8"
        class="bottom__apple-store"
      >
        <img
          src="../../images/app-store.png"
          alt="Apple Store からダウンロード"
        >
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=net.twinte.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        class="bottom__google-play"
      >
        <img
          src="../../images/google-play.png"
          alt="Google Play からダウンロード"
        >
      </a>
      <a
        href="https://app.twinte.net/"
        class="bottom__pc"
      ><span>PC版</span></a>
    </div>
    <img
      src="../../images/footer.png"
      alt=""
      class="bottom__image bottom2"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Bottom',
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/mixin';
@use '~/assets/scss/variable';

.bottom {
  position: relative;
  background: url('~/images/bg-graphic1.jpg');
  background-size: cover;
  @include mixin.pc {
    height: 25.2rem;
  }
  @include mixin.tab-and-sp {
    height: 19.2rem;
    @include mixin.center-flex;
  }
  &__container {
    display: grid;
    width: 35.9rem;

    @include mixin.pc {
      position: absolute;
      right: calc(50% + 7rem);
      top: 52%;
      transform: translate(0, -50%);
      grid-template:
        'text text text' auto
        '... ... ...' 2rem
        'apple ... google' auto
        '... ... ...' 1rem
        'pc pc pc' auto
        / auto 0.583rem auto;
    }
    @include mixin.tab-and-sp {
      width: 29.4rem;
      grid-template:
        'text text text' auto
        '... ... ...' 3.2rem
        'apple ... google' auto
        / auto 0.583rem auto;
    }
  }
  &__text {
    color: variable.$white;
    font-weight: bold;
    line-height: 160%;
    margin-left: 1.6rem;
    grid-area: text;
    @include mixin.pc {
      font-size: 1.8rem;
    }
    @include mixin.tab-and-sp {
      font-size: 2.2rem;
      justify-self: center;
    }
  }
  &__apple-store {
    grid-area: apple;
    @include mixin.center-flex;
    @include mixin.pc {
      width: 17.7rem;
    }
    @include mixin.tab-and-sp {
    }
    img {
      width: 100%;
    }
  }
  &__google-play {
    grid-area: google;
    @include mixin.center-flex;
    @include mixin.pc {
      width: 17.6rem;
    }
    @include mixin.tab-and-sp {
    }
    img {
      width: 100%;
    }
  }
  &__pc {
    display: none;
    grid-area: pc;
    @include mixin.pc {
      @include mixin.center-flex;
      width: 22.6rem;
      height: 4.4rem;
      margin: 1rem 0 0 1.26rem;
      background: variable.$white;
      border-radius: 4.5rem;
      text-decoration: none;
    }
    span {
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      @include mixin.text-liner;
    }
  }
  &__image {
    position: absolute;
    left: calc(50% + 3.3rem);
    bottom: 0;
    width: 37.8rem;
    @include mixin.tab-and-sp {
      display: none;
    }
  }
}
</style>
