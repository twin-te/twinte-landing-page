<template>
  <div style="overflow: hidden; position: relative" v-show="load">
    <div class="columns grid">
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
      <div class="column grid-line"></div>
    </div>

    <navigation />

    <transition name="slide1">
      <section
        class="hero is-warning is-large is-bold column is-10 slide"
        v-if="load"
      >
        <div class="hero-body">
          <div class="container">
            <h2 class="subtitle">筑波大学生専用</h2>
            <h1 class="title">時間割管理アプリ<br />Twin:te</h1>
          </div>
          <b-button
            id="start"
            class="is-large is-primary"
            rounded
            tag="a"
            href="https://app.twinte.net"
            aria-label="GetStart"
            >今すぐ使う</b-button
          >
        </div>
      </section>
    </transition>

    <fixpos />
    <article>
      <SectionTitle title="Twin:te (ついんて)とは？" id="about" />
      <section
        class="section"
        laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
        laxxx-anchor="self"
      >
        <div class="container">
          <h1 class="title">筑波大学生用の時間割アプリ</h1>
          <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
            筑波大生による筑波大生のための時間割アプリです。
            筑波大生に最適な設計になっており、いかに時間割を簡単に作るかに重きを置いています。
            授業をアプリに登録する方法は様々で、数ステップで自動的に自分の時間割を作ることもできます。
            現在も保守・アップデートが行われているため、新たな機能を提案していただくことも可能です。
            また、OSSとして<a href="https://github.com/twin-te">GitHub</a
            >にて公開中ですので、機能改善にご協力ください。
          </p>
        </div>
      </section>

      <SectionTitle id="feature" title="特徴" />
      <section
        class="section"
        laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
        laxxx-anchor="self"
      >
        <div class="container">
          <ul>
            <li>
              <h1 class="title">アカウント連携機能</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                TwitterやGoogleアカウントでログインすると複数端末でデータの共有ができます。
              </p>
            </li>
            <li>
              <h1 class="title">自動登録機能</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                授業を選択するだけで時間割に授業名・教室・講師等が自動登録されます。
                また、自動登録された情報は皆さんご自身で変更していただくことが可能です。
              </p>
            </li>
            <li>
              <h1 class="title">メモ機能</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                メモはもちろん、出席・欠席・遅刻回数を記録できます。
                もちろんこれらの記録はログインすることで複数端末で共有されます。
              </p>
            </li>
            <li>
              <h1 class="title">豊富な授業登録方法</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                手動で授業を登録することはもちろん、ご自身でTwinsにログインした上でTwin:teに授業を自動登録する機能や授業を検索して登録する方法など、多数ご用意しております。
              </p>
            </li>
          </ul>
        </div>
      </section>
      <SectionTitle id="qa" title="Q & A" />
      <section
        class="section"
        laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
        laxxx-anchor="self"
      >
        <div class="container">
          <ul>
            <li>
              <h1 class="title">Q. Twin:teが保存するデータはなんですか？</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                A.
                複数端末で共有するためTwin:teはユーザーがTwin:teのログインに利用したTwittterアカウント/Googleアカウントと、保存した時間割の情報（メモ・出席欠席遅刻回数・変更した教室情報等を含む）
                を結び付けて保存します。この情報はログインしたユーザーのみが見ることができる物であり、他のユーザーには共有されません。
                なお、Twin:teはログインに利用したTwittterアカウント/Googleアカウントのパスワードや、学籍番号等の情報は一切保存しておりません。そのようなことは技術的に不可能です。
                詳細は利用規約をご覧ください。
              </p>
            </li>
            <li>
              <h1 class="title">Q. 利用は無料ですか？</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                A.　利用は完全無料です。また、広告もございません。
                なお、寄付を受け付けております。
              </p>
            </li>
            <li>
              <h1 class="title">Q. Twinsの履修情報を自動で読み込めますか？</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                A.　はい。ユーザーが自分でTwinsにログインしたあと、「Twin:teにインポート」ボタンを押すことで利用できます。
                ユーザーが自分でTwinsにログインをするのでTwin:teはユーザーの学籍番号・パスワードを取得することはございません。
                この機能はiOS版Twin:teのみで利用できます。
                この機能に不安を覚える場合は他の時間割登録方法をご利用いただけます。
              </p>
            </li>
            <li>
              <h1 class="title">Q. このサービスは大学公式のものですか？</h1>
              <p class="is-size-4-desktop is-size-4-tablet is-size-5-mobile">
                A.　いいえ。これは筑波大生によって構成されたグループ（Twin:te）が日常の不便を解消するために製作されたサービスです。
                主な構成員は以下をご覧ください。
              </p>
            </li>
          </ul>
        </div>
      </section>
      <SectionTitle title="Twin:te主メンバー" id="member" />

      <section
        class="section"
        laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
        laxxx-anchor="self"
        id="hika"
      >
        <div class="container">
          <ul>
            <li>
              <h1 class="title">Hikaru Egashira</h1>
              <h2 class="subtitle">
                フロントエンド・デザイン担当。Nuxt(Vue.js)
              </h2>
              <a href="https://twitter.com/ITF_hikary">>> Twitter</a>
              <a href="https://egahika.dev">>> ホームページ</a>
            </li>
            <li>
              <h1 class="title">SIY1121</h1>
              <h2 class="subtitle">バックエンド・Android版アプリ担当</h2>
              <a href="https://twitter.com/SIY1121">>> Twitter</a>
              <a href="https://siy.space/">>> ホームページ</a>
            </li>
            <li>
              <h1 class="title">たこなす</h1>
              <h2 class="subtitle">インフラ・iOS版アプリ担当</h2>
              <a href="https://twitter.com/ITF_tako">>> Twitter</a>
              <a href="https://takonasu.tk">>> ホームページ</a>
            </li>
            <li>
              <h1 class="title">kanade</h1>
              <h2 class="subtitle">デザイナー</h2>
              <a href="https://twitter.com/wasshoi_jolokia">>> Twitter</a>
              <a href="https://kanade-works.web.app/">>> ホームページ</a>
            </li>
          </ul>
        </div>
      </section>

      <SectionTitle title="お問い合わせ" id="info" />
      <section
        class="section"
        laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
        laxxx-anchor="self"
      >
        <div class="container">
          <ul>
            <li>
              <a href="https://twitter.com\te_twin">公式Twitter</a
              >へDM・リプライ
            </li>
            <li>メール: info@twinte.net</li>
          </ul>
        </div>
      </section>
    </article>
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
