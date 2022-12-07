<template>
  <div class="link-item">
    <h3 class="link-item__title">
      <a :href="href" target="_blank" rel="noopener noreferrer">{{ title }}</a>
    </h3>
    <p class="link-item__description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export type Props = {
  title: string;
  href: string;
  description: string;
};

export default defineComponent({
  name: 'LinkItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.link-item {
  &__title {
    font-size: $font-large;
    line-height: 140%;

    margin: 4.2rem 0 1.2rem 0;
    a {
      color: $text-link;
      text-decoration: none;
    }
  }
  &__description {
    @include text-discription;
  }
}
</style>
