<template>
  <HeaderMenu v-model:inTop="inTop" />
  <Top />
  <Link />
  <Faq />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import HeaderMenu from "~/organisms/HeaderMenu.vue";
import Faq from "~/organisms/Faq.vue";
import Link from "~/organisms/Link.vue";
import Top from "~/organisms/Top.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeaderMenu,
    Link,
    Faq,
    Top,
  },
  setup: () => {
    const inTop = ref(false);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        watchEffect(() => {
          inTop.value = entries[0].isIntersecting;
        });
      });
      const target = document.querySelector(".top");
      observer.observe(target as Element);
    });

    return { inTop };
  },
});
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.link {
  margin-bottom: 50rem;
}
</style>
