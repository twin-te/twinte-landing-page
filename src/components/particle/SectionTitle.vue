<template>
  <h1 class="section-title">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.section-title {
  font-weight: bold;
  font-size: 2rem;
  @include mixin.center-flex(column);
  margin-bottom: 6rem;

  &::after {
    content: '';
    margin-top: 1rem;
    width: 2.4rem;
    height: 0.5rem;
    background: variable.$primary-liner;
  }
}
</style>
