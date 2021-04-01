<template>
  <footer class="footer">
    <img
      src="../images/twintelogo-color.svg"
      alt="Twin-teのロゴ"
      class="footer__logo"
    />
    <a href="mailto:info@twinte.net" class="footer__email"
      >email: info@twinte.net</a
    >
    <div class="footer__links">
      <a href="/sponsor"> 寄付者一覧 </a>
      <a href="/policy"> プライバシーポリシー </a>
      <a href="/terms"> 利用規約 </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "~/scss/main.scss";

.footer {
  background: $base;
  display: grid;
  @include pc {
    padding: 1.8rem 0 1.8rem 7.2rem;
    grid-template:
      "logo ... ... ... ... ..." auto
      "logo ... email ... links ..." auto
      / auto 4.8rem auto 4.8rem auto 1fr;
  }
  @include tablet {
    padding: 3.6rem 0 2rem 3.6rem;
    grid-template:
      "links links links links" auto
      "... ... ... ..." 2.8rem
      "logo ... ... ..." 2rem
      "logo ... email ..." auto
      / auto 2.4rem auto 1fr;
  }
  @include sp {
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
    color: $button-gray;
    text-decoration: none;
    &:link {
      color: $button-gray;
    }
  }
  &__links {
    grid-area: links;
    font-weight: 400;
    @include pc {
      grid-auto-flow: column;
      display: grid;
      gap: 2rem;
    }
    @include tablet {
      display: flex;
      gap: 2rem;
    }
    @include sp {
      display: grid;
      gap: 1.2rem;
    }
    a {
      color: $button-gray;
      text-decoration: none;
      line-height: 140%;
      font-weight: 500;
    }
  }
}
</style>
