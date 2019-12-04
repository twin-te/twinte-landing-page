<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.twinte.net">
        <img src="~/assets/img/Twintelogo-white.png" alt="twin:te" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="navbar-menu"
      id="navbarBasic"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <a class="navbar-item" href="#about">Twin:teとは?</a>
        <a class="navbar-item" href="#feature">使い方</a>
        <a class="navbar-item" href="#qa">Q & A</a>
        <a class="navbar-item" href="#member">主メンバー</a>
        <a class="navbar-item" href="#info">お問い合わせ</a>
        <a class="navbar-item" href="https://twitter.com/te_twin"
          >公式Twitter</a>
        <nuxt-link  class="navbar-item" to="/terms">利用規約</nuxt-link>
        <nuxt-link  class="navbar-item" to='policy'>プライバシーポリシー</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Index extends Vue {
  isActive = false;
}
</script>
