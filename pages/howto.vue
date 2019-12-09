<template>
  <div
    style="overflow: hidden; position: relative"
    class="backall"
    v-show="load"
  >
    <navigation />

    <div class="article">
      <div class="content">
        <SectionTitle title="Twinsから授業をインポートする" />
        <section
          class="section"
          laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
          laxxx-anchor="self"
        >
          <p class="is-size-5-desktop is-size-5-tablet is-size-5-mobile">
            ※この機能はiOS/Androidアプリ版で利用できます。
          </p>
          <ul class="is-size-5-desktop is-size-5-tablet is-size-5-mobile">
            <li>
              メニューから「Twinsからインポートする」ボタンを押してTwinsにログインします。
            </li>
            <li>
              履修登録画面に行きます。まず「履修」ボタンを押してから、「履修登録・登録状況紹介」を押します。
            </li>
            <li>
              「Twin:teにインポート」ボタンがあるので、タップします。すると、現在表示している学期の授業がインポートされます。
            </li>
            <li>
              完了画面が出たら完了です。他の学期もインポートする場合はTwinsの画面を他の学期に切り替えてください。
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="article">
      <div class="content">
        <SectionTitle title="手動で授業を登録する" />
        <section
          class="section"
          laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
          laxxx-anchor="self"
        >
          <ul class="is-size-5-desktop is-size-5-tablet is-size-5-mobile">
            <li>授業の登録されていない場所をタップします。</li>
            <li>授業名や授業番号を入れて授業を検索します。</li>
            <li>該当する授業にチェックを入れて「時間割に追加」を押します。</li>
          </ul>
        </section>
      </div>
    </div>
    <div class="article">
      <div class="content">
        <SectionTitle title="教室やメモを変更する" />
        <section
          class="section"
          laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
          laxxx-anchor="self"
        >
          <p class="is-size-5-desktop is-size-5-tablet is-size-5-mobile"></p>
        </section>
      </div>
    </div>
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
<style lang="scss" scoped>
@import "~assets/css/subpage.scss";
@import "~assets/css/main.scss";

.article {
  margin-top: 1rem;
}
li {
  list-style-type: decimal;
}
</style>
