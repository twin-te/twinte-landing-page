<template>
  <HeaderMenu v-model:inTop="inTop" />
  <Top />
  <Feature />
  <OptionFeatures />
  <Faq />
  <Member />
  <Link />
  <Bottom />
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import Bottom from "~/organisms/Bottom.vue";
import Faq from "~/organisms/Faq.vue";
import Footer from "~/organisms/Footer.vue";
import HeaderMenu from "~/organisms/HeaderMenu.vue";
import Link from "~/organisms/Link.vue";
import OptionFeatures from "~/organisms/OptionFeatures.vue";
import Top from "~/organisms/Top.vue";
import Feature from "~/organisms/Feature.vue";
import Member from "~/organisms/Member.vue";

export default defineComponent({
  name: "Home",
  components: {
    Bottom,
    Faq,
    Footer,
    HeaderMenu,
    Link,
    OptionFeatures,
    Top,
    Feature,
    Member,
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
