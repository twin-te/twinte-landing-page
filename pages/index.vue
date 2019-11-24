<template>
  <div style="overflow: hidden; position: relative" v-show="load">
    <div class="columns grid">
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
    </div>

    <navigation/>

    <transition name="slide1">
      <section class="hero is-warning is-large is-bold column is-10 slide" v-if="load">
        <div class="hero-body">
          <div class="container">
            <h2 class="subtitle">筑波大学生専用</h2>
            <h1 class="title">時間割管理アプリケーション</h1>
          </div>
          <b-button
            id="start"
            class="is-large is-primary"
            rounded
            tag="a"
            href="https://twinte.net"
            aria-label="GetStart"
          >今すぐ使う</b-button>
        </div>
      </section>
    </transition>

    <fixpos/>

    <SectionTitle title="ついんて（Twin:te）とは？" id="about"/>
    <section class="section" laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0" laxxx-anchor="self">
      <div class="container">
        <h1 class="title">筑波大学生用の時間割アプリ</h1>
        <h2 class="subtitle">
          <a href>Hikaru Egashira</a>と
          <a href>たこなす</a>が共同開発した、筑波大学生用の時間割アプリです。
          Twinsで行った履修登録を見やすくするのが目的です。時間割は授業番号を入力するだけ、教室やシラバス情報まで見ることができます。（一部対応してない教科もあります）
          現在もメンバーによる保守・アップデートが行われているため、新たな機能を提案していただくことも可能です。
        </h2>
      </div>
    </section>

    <SectionTitle title="使い方"/>
    <section
      class="section"
      laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
      laxxx-anchor="self"
      id="add_number"
    >
      <div class="container">
        <h1 class="title">時間割追加 - 授業番号登録</h1>
        <h2
          class="subtitle"
        >時間割ボタンをタップすると登録画面が出現します。そこに授業番号もしくは授業名を入力すると候補が出てくるので、登録したい授業を選択すると登録できます。</h2>
      </div>
    </section>

    <section class="section" laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0" laxxx-anchor="self" id="pwa">
      <div class="container">
        <h1 class="title">アプリ化（オフラインでの利用）</h1>
        <h2
          class="subtitle"
        >ChromeもしくはSafariでTwin:teを開き、その状態でブラウザの設定画面を開きます。Chromeは「アプリに追加」、Safariは「ホーム画面に追加」ボタンを押すと、インストールが始まり。オフラインで使用することができるようになります。</h2>
      </div>
    </section>

    <section
      class="section"
      laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
      laxxx-anchor="self"
      id="detail"
    >
      <div class="container">
        <h1 class="title">時間割画面詳細画面</h1>
        <h2 class="subtitle">左下のシラバスボタンからその時間割のシラバス情報をみることができます。現在総合科目のみに対応しています。</h2>
      </div>
    </section>
    <SectionTitle title="製作者紹介" id="member"/>

    <section class="section" laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0" laxxx-anchor="self" id="hika">
      <div class="container">
        <h1 class="title">Hikaru Egashira</h1>
        <h2 class="subtitle">フロントエンド・デザイン担当。Nuxt(Vue.js)</h2>
        <a href="https://twitter.com/ITF_hikary">>> Twitter</a>
        <a href="https://egahika.ml">>> ホームページ</a>
      </div>
    </section>

    <section class="section" laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0" laxxx-anchor="self" id="tako">
      <div class="container">
        <h1 class="title">たこなす</h1>
        <h2 class="subtitle">バックエンド担当。Laravel(PHP)</h2>
        <a href="https://twitter.com/ITF_tako">>> Twitter</a>
        <a href="https://takonasu.tk">>> ホームページ</a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  components: {
    navigation: () => import("~/components/navigation.vue"),
    SectionTitle: () => import("~/components/section-title.vue"),
    fixpos: () => import("~/components/fixedpos.vue")
  }
})
export default class Index extends Vue {
  public load: Boolean = false;
  mounted(): void {
    this.load = true;
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();

    //   setTimeout(() => this.$nuxt.$loading.finish(), 300);
    // });
  }
}
</script>

<style lang="sass" scoped>
#start
  position: relative
  top: 16px
.grid
  position: fixed
  width: 100vw
.grid-line
  height: 100vh
  width: 25vw
  border-left: 0.2px solid #ccc
.slide
  height: 100vh - 9
.slide1-enter-active
  transition: transform .8s ease-in-out
.slide1-enter
  transform: translateX(-90vw)
</style>
