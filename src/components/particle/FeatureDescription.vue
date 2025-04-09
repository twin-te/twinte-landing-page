<template>
  <div class="feature-description opacity1">
    <p
      :class="{
        'feature-description__title': true,
        ['feature-description__title--primary']: primary,
      }"
    >
      <slot name="title" />
    </p>
    <p class="feature-description__description">
      <slot name="description" />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.feature-description {
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
    margin-bottom: 2rem;
    @include feature-title;
    @include pc {
      margin-bottom: 3.2rem;
    }
    &--primary {
      @include text-liner;
    }
  }
  &__description {
    @include text-description;
    color: inherit;
  }
}
</style>
