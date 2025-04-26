<template>
  <section class="faq-item bottom2">
    <div class="faq-item__head faq-item__question">
      <span class="dropcap">Q.</span> {{ question }}
    </div>
    <div class="faq-item__head faq-item__answer">
      <span class="dropcap">A.</span> {{ answer }}
    </div>
    <div class="faq-item__body">
      <slot name="body" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.faq-item {
  padding: 2rem 3rem 2.4rem;
  border-radius: 1.2rem;
  background-color: variable.$base;
  &__head {
    @include mixin.text-title-sub;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    .dropcap {
      margin-right: 0.8rem;
      font-weight: 700;
    }
  }
  &__body {
    @include mixin.text-description;
    font-size: 1.4rem;
  }
  &__question {
    .dropcap {
      @include mixin.text-liner;
    }
  }
  &__answer {
    .dropcap {
      color: variable.$yellow-orange-light;
    }
  }
}
</style>
