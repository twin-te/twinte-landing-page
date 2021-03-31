<template>
  <HeaderMenu v-model:inTop="inTop" />
  <!-- 後で消す -->
  <div class="image"></div>
  <div class="image-bottom"></div>
  <Link />
  <Faq />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import Link from "~/organisms/Link.vue";
import HeaderMenu from "~/organisms/HeaderMenu.vue";
import Faq from "~/organisms/Faq.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeaderMenu,
    Link,
    Faq,
  },
  setup: () => {
    const inTop = ref(false);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        watchEffect(() => {
          inTop.value = entries[0].isIntersecting;
        });
      });
      const target = document.querySelector(".image");
      observer.observe(target as Element);
    });

    return { inTop };
  },
});
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

// 後で消す
.image {
  width: 100%;
  height: 10rem;
  background: $primary-liner;
}
.image-bottom {
  height: 30rem;
  background: $base;
}
</style>
