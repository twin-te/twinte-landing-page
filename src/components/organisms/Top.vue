<template>
  <div
    id="twin-te"
    class="top"
  >
    <img
      src="../../images/top.png"
      alt="Twin-teの画像"
      class="top__images"
    >
    <div class="top__logo-and-link logo-and-link">
      <img
        src="../../images/title-logo.png"
        alt="Twin-teのロゴ"
        class="logo-and-link__title-logo"
      >
      <img
        src="../../images/app-store.png"
        alt="Apple Store からダウンロード"
        class="logo-and-link__apple-store"
        @click="
          externalLink(
            'https://apps.apple.com/jp/app/twin-te/id1489274755?mt=8',
          )
        "
      >
      <img
        src="../../images/google-play.png"
        alt="Google Play からダウンロード"
        class="logo-and-link__google-play"
        @click="
          externalLink(
            'https://play.google.com/store/apps/details?id=net.twinte.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
          )
        "
      >
      <div
        class="logo-and-link__pc-button"
        @click="externalLink('https://app.twinte.net/')"
      >
        <span>PC版</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Top',
  setup: () => {
    const externalLink = (url: string) => {
      window.location.href = url
    }

    onMounted(() => {
      function setHeight() {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
      setHeight()
      window.addEventListener('resize', setHeight)
    })

    return { externalLink }
  },
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.top {
  width: 100%;
  background: url('~/images/bg-graphic1.jpg');
  background-size: cover;
  position: relative;
  @include mixin.pc {
    height: 50vw;
  }
  @include mixin.tablet {
    height: 140vw;
    max-height: 900px;
  }
  @include mixin.sp {
    height: 100vh;
    height: calc(var('--vh', 1vh) * 100);
    overflow: hidden;
  }
  &__images {
    @include mixin.pc {
      width: 55vw;
      position: absolute;
      top: 0;
      left: 0;
    }
    @include mixin.tablet {
      width: 100%;
      max-width: 650px;
    }
    @include mixin.sp {
      width: 57rem;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.5;
    }
  }
  &__logo-and-link {
    @include mixin.pc {
      width: 22vw;
      position: absolute;
      top: 50%;
      left: 55vw;
      transform: translateY(-50%);
    }
    @include mixin.tablet {
      width: 50vw;
      max-width: 325px;
      position: absolute;
      right: 7vw;
      bottom: 10.5vmax;
    }
    @include mixin.sp {
      @include mixin.center-absolute;
      width: 25.5rem;
    }
  }
}
.logo-and-link {
  display: grid;
  grid-template:
    'logo logo logo' auto
    '... ... ...' 18%
    'apple ... google' auto
    / 1fr 1.6% 1fr;
  @include mixin.pc {
    grid-template:
      'logo logo logo' auto
      '... ... ...' 16%
      'apple ... google' auto
      '... ... ...' 8%
      'pc pc pc' 20%
      / 1fr 1.6% 1fr;
  }
  &__title-logo {
    grid-area: logo;
    width: 100%;
    height: auto;
    filter: drop-shadow(14.28px 14.28px 35.7px rgba(54, 184, 176, 0.25));
  }
  &__apple-store {
    grid-area: apple;
    width: 100%;
    height: auto;
    align-self: center;
    @include mixin.button-cursor;
  }
  &__google-play {
    grid-area: google;
    width: 100%;
    height: auto;
    align-self: center;
    @include mixin.button-cursor;
  }
  &__pc-button {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 4rem;
    background: variable.$white;
    display: none;
    @include mixin.button-cursor;
    @include mixin.pc {
      grid-area: pc;
      @include mixin.center-flex;
    }
    span {
      @include mixin.text-liner;
    }
  }
}
</style>
