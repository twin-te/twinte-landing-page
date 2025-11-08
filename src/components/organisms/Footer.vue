<template>
  <footer class="footer">
    <img
      src="../../images/twintelogo-color.svg"
      alt="Twin-teのロゴ"
      class="footer__logo"
    >
    <a
      href="mailto:info@twinte.net"
      class="footer__email"
    >email: info@twinte.net</a>
    <div class="footer__links">
      <a href="https://app.twinte.net/sponsorship/sponsors-list">寄付者一覧</a>
      <NuxtLink to="/policy"> プライバシーポリシー </NuxtLink>
      <NuxtLink to="/terms"> 利用規約 </NuxtLink>
      <NuxtLink to="/recruit"> Twin:teに参加 </NuxtLink>
      <NuxtLink to="/APIterms"> 外部連携機能に関する規約 </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "~/assets/scss/variable";
@use "~/assets/scss/mixin";

.footer {
  background: variable.$base;
  display: grid;
  align-items: end;
  @include mixin.pc {
    padding: 1.8rem 0 1.8rem 7.2rem;
    grid-template:
      "logo ... ... ... ... ..." auto
      "logo ... email ... links ..." auto
      / auto 4.8rem auto 4.8rem auto 1fr;
  }
  @include mixin.tablet {
    padding: 3.6rem 0 2rem 3.6rem;
    grid-template:
      "links links links links" auto
      "... ... ... ..." 2.8rem
      "logo ... ... ..." 2rem
      "logo ... email ..." auto
      / auto 2.4rem auto 1fr;
  }
  @include mixin.sp {
    padding: 3.6rem 0 2rem 3rem;
    grid-template:
      "links links links links" auto
      "... ... ... ..." 2.8rem
      "logo ... ... ..." 2rem
      "logo ... email ..." auto
      / auto 2rem auto 1fr;
  }
  &__logo {
    grid-area: logo;
    width: 11.9rem;
    height: auto;
  }
  &__email {
    grid-area: email;
    line-height: 140%;
    color: variable.$button-gray;
    text-decoration: none;
    font-weight: 500;
    &:link {
      color: variable.$button-gray;
    }
  }
  &__links {
    grid-area: links;
    font-weight: 400;
    display: grid;
    align-items: end;
    gap: 2rem;
    @include mixin.pc {
      grid-auto-flow: column;
    }
    @include mixin.sp {
      gap: 1.2rem;
    }
    a {
      color: variable.$button-gray;
      text-decoration: none;
      line-height: 140%;
      font-weight: 400;
    }
    img {
      transform: translateY(8px);
    }
  }
}
</style>
