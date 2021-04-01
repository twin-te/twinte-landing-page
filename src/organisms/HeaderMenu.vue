<template>
  <div
    :class="{
      'header-menu': true,
      'header-menu--in-top': inTop,
      'header-menu--opened': opened,
    }"
  >
    <a
      :class="{
        'header-menu__item': true,
        'header-menu__item--in-top': inTop,
        'header-menu__item--opened': opened,
      }"
      href="#twin-te"
    >
      Twin:te
    </a>
    <a
      :class="{
        'header-menu__item': true,
        'header-menu__item--in-top': inTop,
        'header-menu__item--opened': opened,
      }"
      href="#faq"
    >
      Q&A
    </a>
    <a
      :class="{
        'header-menu__item': true,
        'header-menu__item--in-top': inTop,
        'header-menu__item--opened': opened,
      }"
      href="#member"
    >
      主メンバー
    </a>
    <a
      :class="{
        'header-menu__item': true,
        'header-menu__item--in-top': inTop,
        'header-menu__item--opened': opened,
      }"
      href="#link"
    >
      リンク
    </a>
    <div
      @click="opened = !opened"
      :class="{
        'header-menu__icon': true,
        'header-menu__icon--in-top': inTop,
        'header-menu__icon--opened': opened,
        'material-icons': true,
      }"
    >
      {{ opened ? 'close' : 'menu' }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HeaderMenu',
  props: {
    inTop: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {
    const opened = ref(false);
    return { opened };
  },
});
</script>

<style scoped lang="scss">
@import '~/scss/main.scss';

.header-menu {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 8.2rem;
  background: rgba(239, 241, 246, 0.85);
  backdrop-filter: blur(8px);
  @include pc {
    display: flex;
    justify-content: flex-end;
  }
  &--in-top {
    position: absolute;
    background: none;
    backdrop-filter: none;
  }
  &--opened {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(239, 241, 246, 0.85);
    backdrop-filter: blur(8px);
  }
  &__item {
    color: $button-gray;
    &:link {
      color: $button-gray;
    }
    height: 2rem;
    line-height: 2rem;
    text-decoration: none;

    @include button-cursor;
    @include pc {
      margin-top: 4.2rem;
      &:not(:first-child) {
        margin-left: 3.6rem;
      }
      &:nth-child(4) {
        margin-right: 7.4rem;
      }
    }
    @include tab-and-sp {
      display: none;
    }
    &--in-top {
      color: $white;
      &:link {
        color: $white;
      }
    }
    &--opened {
      @include tab-and-sp {
        @include flexible;
      }
      &:not(:first-child) {
        margin-top: 3.2rem;
      }
      color: $button-gray;
      &:link {
        color: $button-gray;
      }
      &:nth-child(1) {
        margin-top: 11.6rem;
      }
      &:nth-child(4) {
        margin-bottom: 3.2rem;
      }
    }
  }
  &__icon {
    @include button-cursor;
    @include pc {
      display: none;
    }
    position: absolute;
    top: 2rem;
    right: 3rem;
    font-size: 4rem;
    color: $button-gray;
    &--in-top {
      color: $white;
    }
    &--opened {
      color: $button-gray;
    }
  }
}
</style>
