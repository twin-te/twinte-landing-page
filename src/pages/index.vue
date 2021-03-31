<template>
  <HeaderMenu v-model:inTop="inTop" />
  <OptionFeatures />
  <Top />
  <Feature />
  <Faq />
  <Link />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import Link from "~/organisms/Link.vue";
import HeaderMenu from "~/organisms/HeaderMenu.vue";
import OptionFeatures from "~/organisms/OptionFeatures.vue";
import Faq from "~/organisms/Faq.vue";
import Top from "~/organisms/Top.vue";
import Feature from "~/organisms/Feature.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeaderMenu,
    Link,
    OptionFeatures,
    Faq,
    Top,
    Feature,
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
</style>
