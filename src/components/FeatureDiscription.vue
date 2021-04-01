<template>
  <div class="feature-discription opacity1">
    <p
      :class="{
        'feature-discription__title': true,
        ['feature-discription__title--primary']: primary,
      }"
    >
      <slot name="title"></slot>
    </p>
    <p class="feature-discription__discription">
      <slot name="discription"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FeatureDiscription',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.feature-discription {
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 3rem 4.4rem;
  @include pc {
    padding: 0;
  }
  @include tablet {
    width: 100%;
    padding: 2rem 5rem 4.4rem;
  }
  &__title {
    @include feature-title;
    margin-bottom: 2rem;
    @include pc {
      margin-bottom: 3.2rem;
    }
    &--primary {
      @include text-liner;
    }
  }
  &__discription {
    @include text-discription;
    color: inherit;
  }
}
</style>
