<template>
  <section class="feature">
    <div
      id="feature"
      class="feature__item"
    >
      <section>
        <ParticleFeatureDescription primary>
          <template #title>
            筑波大学生による筑波大学生のための<br>時間割アプリ
          </template>
          <template #description>
            Twin:te(ついんて)は筑波大学生による筑波大学生のための時間割アプリです。<br>
            数ステップでアプリにすべての時間割を登録することができるなど、筑波大学生専用アプリだからこその機能が満載。
            筑波大学生の半数に上るユーザーにご利用いただいています。<br>
            もちろん広告なんてものはありません。完全無料のアプリです。
          </template>
        </ParticleFeatureDescription>
        <img
          id="colon1"
          alt="マスコットキャラクター"
          src="../../images/colon1.png"
        >
      </section>
      <section class="feature__img-mask">
        <div class="feature__img-container pc">
          <img
            id="tsukuba"
            class="opacity2"
            alt="スクリーンショット"
            src="../../images/tsukuba.png"
          >
          <img
            id="main"
            class="opacity3"
            alt="スクリーンショット"
            src="../../images/main.png"
          >
        </div>
      </section>
      <img
        id="eyecatch"
        class="opacity1"
        alt="スクリーンショット"
        src="../../images/eyecatch-sp.png"
      >
    </div>
    <div class="feature__item">
      <section class="feature__img-mask">
        <div class="feature__img-container">
          <img
            id="timetable-1"
            alt="スクリーンショット"
            src="../../images/timetable-1.png"
          >
          <img
            id="timetable-2"
            alt="スクリーンショット"
            src="../../images/timetable-2.png"
          >
        </div>
      </section>
      <section>
        <ParticleFeatureDescription>
          <template #title>
            特殊授業や7,8限にも<br>対応した時間割
          </template>
          <template #description>
            普段の授業はもちろん、他の時間割アプリでは管理の難しかった集中授業のような特殊授業も管理できます。
            <br>大学院生向けに、7,8限の授業も管理できます。
          </template>
        </ParticleFeatureDescription>
        <img
          id="colon2"
          alt="マスコットキャラクター"
          src="../../images/colon2.png"
        >
      </section>
    </div>
    <div class="feature__item">
      <ParticleFeatureDescription>
        <template #title>
          選べる授業追加方法<br>仮組みにも最適
        </template>
        <template #description>
          従来の時間割アプリと同様に手動で授業を追加できることはもちろん、TWINSからすべての時間割情報を安全にインポートすることが可能です。<br>
          また、強力な授業検索機能によって空きコマに入れられる授業を検索できたり、一時的に授業を重複して登録できたりと仮組みにも最適な設計になっています。
          <br>※Twin:teがTWINSから安全に時間割をインポートする方法については<a
            href="https://twinte.hatenablog.com/entry/2019/12/20/200652"
          >こちら</a>をご確認ください。
        </template>
      </ParticleFeatureDescription>
      <section class="feature__img-mask">
        <div class="feature__img-container">
          <img
            id="add-1"
            alt="スクリーンショット"
            src="../../images/add-1.png"
          >
          <img
            id="add-2"
            alt="スクリーンショット"
            src="../../images/add-2.png"
          >
          <img
            id="add-3"
            alt="スクリーンショット"
            src="../../images/add-3.png"
          >
        </div>
      </section>
    </div>
    <div class="feature__item">
      <img
        id="detail-1"
        alt="スクリーンショット"
        src="../../images/detail-1.png"
      >
      <div class="feature__wrap">
        <ParticleFeatureDescription>
          <template #title>
            履修中の授業をかんたんに管理
          </template>
          <template #description>
            このアプリ1つで出欠の管理やメモの記録ができます。<br>
            さらに、授業のシラバスやresponに加えてマップをすぐに参照することができます。<br>
            授業追加の方法によっては授業場所や授業形式も自動的に追加されるので、KdBで授業詳細を調べる手間が省けます。
          </template>
        </ParticleFeatureDescription>
        <section class="feature__img-mask">
          <div class="feature__img-container">
            <img
              id="detail-2"
              alt="スクリーンショット"
              src="../../images/detail-2.png"
            >
            <img
              id="detail-3"
              alt="スクリーンショット"
              src="../../images/detail-3.png"
            >
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Feature',
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.feature {
  background: variable.$base;
  &__item {
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    &:nth-of-type(1) {
      flex-direction: column-reverse;
      padding: 6rem 0 0rem;
    }
    &:nth-of-type(2) {
      padding-bottom: 11.2rem;
    }
    &:nth-of-type(3) {
      flex-direction: column-reverse;
      overflow: hidden;
      color: variable.$white;
      background: center / cover no-repeat url('~/images/bg-graphic1.jpg');
    }
    &:nth-of-type(4) {
      background: variable.$base-liner;
    }

    @include mixin.pc {
      display: grid;
      justify-content: center;
      gap: 7.2rem;
      grid-auto-flow: row;
      &:nth-of-type(1) {
        box-sizing: border-box;
        grid-template-columns: 42.8rem 40rem;
        height: 72.5rem;
        padding: 16rem 0 6rem;
      }
      &:nth-of-type(2) {
        grid-template-columns: 42.8rem 40rem;
        height: 56.5rem;
        z-index: 20;
        padding-bottom: 0;
      }
      &:nth-of-type(3) {
        overflow: hidden;
        color: variable.$white;
        grid-template-columns: 40rem 42.8rem;
        height: 60.3rem;
        background: center / cover no-repeat url('~/images/bg-graphic1.jpg');
      }
      &:nth-of-type(4) {
        grid-template-columns: 25.2rem 57.6rem;
        align-items: flex-start;
        justify-content: center;
        height: 66.7rem;
        box-sizing: border-box;
        padding-top: 12.2rem;
        @include mixin.scroll-mask;
      }
    }
  }
  &__img-mask {
    width: 100%;
    height: 100%;
    align-items: center;
    @include mixin.sp {
      @include mixin.scroll-mask;
    }
    @include mixin.tablet {
      @include mixin.scroll-mask;
    }
  }
  &__img-container {
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    width: 25rem;
    height: 35rem;
    @include mixin.tablet {
      width: 420px;
      height: 550px;
    }
    @include mixin.pc {
      width: 100%;
      height: 100%;
    }
    img {
      position: absolute;
    }
  }
  // spレイアウトでの画像配置
  #eyecatch {
    width: 300px;
  }
  #tsukuba {
    display: none;
  }
  #main {
    display: none;
  }
  #colon1 {
    width: 264px;
    margin-top: 2rem;
    margin-left: 2rem;
  }
  #colon2 {
    position: absolute;
    right: 2rem;
    width: 124px;
  }
  #timetable-1 {
    top: 50px;
    left: 0;
    width: 160px;
    @include mixin.box-shadow-screen-base;
  }
  #timetable-2 {
    right: 0;
    top: 115px;
    width: 160px;
    @include mixin.box-shadow-screen-base;
  }
  #add-1 {
    top: -10px;
    left: 0;
    width: 145px;
  }
  #add-2 {
    top: 20px;
    right: 0;
    width: 145px;
  }
  #add-3 {
    bottom: 0px;
    left: 0;
    width: 145px;
  }
  #detail-1 {
    display: none;
  }
  #detail-2 {
    display: none;
  }
  #detail-3 {
    bottom: 0px;
    right: 50%;
    transform: translateX(50%);
    width: 190px;
    @include mixin.box-shadow-screen-base;
  }

  // tabletレイアウトでの画像配置
  @include mixin.tablet {
    #colon1 {
      margin-left: 5rem;
    }
    #colon2 {
      right: 5rem;
    }
    #timetable-1 {
      top: 50px;
      width: 250px;
    }
    #timetable-2 {
      top: 155px;
      width: 250px;
    }
    #add-1 {
      top: -10px;
      left: 0;
      width: 230px;
    }
    #add-2 {
      top: 20px;
      width: 230px;
    }
    #add-3 {
      width: 230px;
    }
    #detail-3 {
      width: 260px;
    }
  }

  // pcレイアウトでの画像配置
  @include mixin.pc {
    // 画像
    #tsukuba {
      display: block;
      width: 383px;
    }
    #main {
      display: block;
      width: 282px;
      right: 0;
    }
    #colon1 {
      width: 360px;
      margin-top: 2rem;
    }
    #colon2 {
      position: absolute;
      width: 165px;
      margin-top: 32px;
      margin-left: 277px;
    }
    #eyecatch {
      display: none;
    }
    #timetable-1 {
      top: 0;
      width: 245px;
    }
    #timetable-2 {
      top: 104px;
      right: 0;
      width: 245px;
    }
    #add-1 {
      top: 0;
      left: 0;
      width: 245px;
    }
    #add-2 {
      top: 40px;
      right: 0;
      width: 245px;
    }
    #add-3 {
      top: 253px;
      left: 0;
      width: 245px;
    }
    #detail-1 {
      display: block;
      position: relative;
      width: 252px;
      @include mixin.box-shadow-screen-base;
    }
    #detail-2 {
      display: block;
      bottom: 0px;
      left: 0;
      width: 252px;
      @include mixin.box-shadow-screen-base;
    }
    #detail-3 {
      bottom: 0px;
      right: 0;
      transform: unset;
      width: 252px;
    }
  }

  &__wrap {
    display: flex;
    flex-direction: column-reverse;
    @include mixin.pc {
      display: grid;
      gap: 6.6rem;
      height: 100%;
    }
  }
  a {
    color: inherit;
  }
}
</style>
