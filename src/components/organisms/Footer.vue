<template>
  <footer class="footer">
    <img
      src="../../images/twintelogo-color.svg"
      alt="Twin-teのロゴ"
      class="footer__logo"
    />
    <a href="mailto:info@twinte.net" class="footer__email"
      >email: info@twinte.net</a
    >
    <div class="footer__links">
      <NuxtLink to="/sponsor"> 寄付者一覧 </NuxtLink>
      <NuxtLink to="/policy"> プライバシーポリシー </NuxtLink>
      <NuxtLink to="/terms"> 利用規約 </NuxtLink>
      <NuxtLink to="/recruit"> Twin:teに参加 </NuxtLink>
      <NuxtLink to="/APIterms"> 外部連携機能に関する規約 </NuxtLink>
      <a href="https://vercel.com?utm_source=twin-te&utm_campaign=oss"
        ><img
          width="120"
          src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
          alt="Powered by Vercel"
      /></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped lang="scss">
@import '~/scss/main.scss';

.footer {
  background: $base;
  display: grid;
  align-items: end;
  @include pc {
    padding: 1.8rem 0 1.8rem 7.2rem;
    grid-template:
      'logo ... ... ... ... ...' auto
      'logo ... email ... links ...' auto
      / auto 4.8rem auto 4.8rem auto 1fr;
  }
  @include tablet {
    padding: 3.6rem 0 2rem 3.6rem;
    grid-template:
      'links links links links' auto
      '... ... ... ...' 2.8rem
      'logo ... ... ...' 2rem
      'logo ... email ...' auto
      / auto 2.4rem auto 1fr;
  }
  @include sp {
    padding: 3.6rem 0 2rem 3rem;
    grid-template:
      'links links links links' auto
      '... ... ... ...' 2.8rem
      'logo ... ... ...' 2rem
      'logo ... email ...' auto
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
    font-weight: 500;
    &:link {
      color: $button-gray;
    }
  }
  &__links {
    grid-area: links;
    font-weight: 400;
    display: grid;
    align-items: end;
    gap: 2rem;
    @include pc {
      grid-auto-flow: column;
    }
    @include sp {
      gap: 1.2rem;
    }
    a {
      color: $button-gray;
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
