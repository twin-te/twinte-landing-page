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
    <a
      :class="{
        'header-menu__item': true,
        'header-menu__item--in-top': inTop,
        'header-menu__item--opened': opened,
      }"
      href="./recruit"
    >
      Twin:teに参加
    </a>
    <div
      :class="{
        'header-menu__icon': true,
        'header-menu__icon--in-top': inTop,
        'header-menu__icon--opened': opened,
        'material-icons': true,
      }"
      @click="opened = !opened"
    >
      {{ opened ? 'close' : 'menu' }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderMenu',
  props: {
    inTop: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {
    const opened = ref(false)
    return { opened }
  },
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.header-menu {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 8.2rem;
  background: rgba(239, 241, 246, 0.85);
  backdrop-filter: blur(8px);
  @include mixin.pc {
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
    color: variable.$button-gray;
    &:link {
      color: variable.$button-gray;
    }
    height: 2rem;
    line-height: 2rem;
    text-decoration: none;

    @include mixin.button-cursor;
    @include mixin.pc {
      margin-top: 4.2rem;
      &:not(:first-child) {
        margin-left: 3.6rem;
      }
      &:nth-child(5) {
        margin-right: 7.4rem;
      }
    }
    @include mixin.tab-and-sp {
      display: none;
    }
    &--in-top {
      color: variable.$white;
      &:link {
        color: variable.$white;
      }
    }
    &--opened {
      color: variable.$button-gray;
      &:link {
        color: variable.$button-gray;
      }
      @include mixin.tab-and-sp {
        @include mixin.flexible;
      }
      &:not(:first-child) {
        margin-top: 3.2rem;
      }
      &:nth-child(1) {
        margin-top: 11.6rem;
      }
      &:nth-child(5) {
        margin-bottom: 3.2rem;
      }
    }
  }
  &__icon {
    position: absolute;
    top: 2rem;
    right: 3rem;
    font-size: 4rem;
    color: variable.$button-gray;
    @include mixin.button-cursor;
    @include mixin.pc {
      display: none;
    }
    &--in-top {
      color: variable.$white;
    }
    &--opened {
      color: variable.$button-gray;
    }
  }
}
</style>
