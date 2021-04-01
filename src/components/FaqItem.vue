<template>
  <section class="faq-item bottom">
    <div class="faq-item__head faq-item__question">
      <span class="dropcap">Q.</span> {{ question }}
    </div>
    <div class="faq-item__head faq-item__answer">
      <span class="dropcap">A.</span> {{ answer }}
    </div>
    <div class="faq-item__body">
      <slot name="body"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.faq-item {
  padding: 2rem 3rem 2.4rem;
  border-radius: 1.2rem;
  background-color: $base;
  &__head {
    @include text-title-sub;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    .dropcap {
      margin-right: 0.8rem;
      font-weight: 700;
    }
  }
  &__body {
    @include text-discription;
    font-size: 1.4rem;
  }
  &__question {
    .dropcap {
      @include text-liner;
    }
  }
  &__answer {
    .dropcap {
      color: $yellow-orange-light;
    }
  }
}
</style>
