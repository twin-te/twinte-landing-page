<template>
  <nav class="navbar is-primary" role="navigation" aria-label="navigation">
    <div class="navbar-brand">
      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="https://www.twinte.net" class="navbar-item title is-bold">Twin:te</a>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#about">Twin:teとは?</a>
        <a class="navbar-item" href="#about">使い方</a>
        <a class="navbar-item" href="#member">主メンバー</a>
        <a class="navbar-item" href="#info">お問い合わせ</a>
        <a class="navbar-item" href="https://twitter.com\te_twin">公式Twitter</a>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">その他</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#search-with-qiita">Twinte API</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" href="https://github.com/HikaruEgashira">Coming Soon...</a>
            <a class="navbar-item" href="#twin-te">地図機能</a>
            <a class="navbar-item" href="https://github.com/HikaruEgashira">卒業管理</a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Index extends Vue {}
</script>
